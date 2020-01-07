const puppeteer = require("puppeteer");
const Discord = require("discord.js");
const client = new Discord.Client();
const { config } = require("../config/settings");
var jobsInMemory = [];

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto(config.webUrl, { waitUntil: "networkidle2" });
  client.on("message", async message => {
    //When the word start is written, run this:
    if (message.channel.id === config.channelMessageStart) {
      if (message.content.startsWith("start")) {
        let dataJobs = await page.evaluate(() => {
          var jobsListInString = document
            .getElementById("task-listing-datatable")
            .getAttribute("data-tasks"); //Search list
          var jobsListInArray = eval(jobsListInString); //Convert string to arr
          var jobsToFind = ["Box People And Signs In An Image"];
          let jobsToAlert = [];
          let jobsToMemory = [];

          jobsListInArray.forEach(val => {
            if (jobsToFind.includes(val[1])) {
              if (`${val[5]}` <= 10) {
                console.log("Tasks number is Less than 10");
              } else {
                jobsToAlert.push(
                  `*${val[0]}* - ***${val[1]}*** - Number of tasks: *${val[5]}* @everyone`
                );
              }
            }
          });
          jobsListInArray.forEach(val => {
            if (jobsToFind.includes(val[1])) {
              if (`${val[5]}` <= 10) {
                console.log("Tasks number is less than 10");
              } else {
                jobsToMemory.push(`${val[0]} - ${val[1]}`);
              }
            }
          });
          return [jobsToAlert, jobsToMemory];
        });

        for (let i = 0; i <= dataJobs[0].length; i++) {
          if (!jobsInMemory.includes(dataJobs[1][i])) {
            //If there is no coincidence, send the message
            if (dataJobs[1][i] != undefined) {
              client.channels
                .get(config.channelMessageToSend)
                .send(dataJobs[0][i]);
              jobsInMemory.push(dataJobs[1][i]);
            } else {
              console.log("Nothing");
            }
          } else {
            console.log("Already sent");
          }
        }
      }
    }
    await page.reload();
  });
})();

client.on("message", message => {
  if (message.content == "!interval") {
    setInterval(() => {
      client.channels.get(config.channelMessageStart).send(`start`);
    }, 10000);
  }
});

client.on("message", message => {
  if (message.content == "!memory") {
    message.channel.send("The jobs in memory are:");
    if (jobsInMemory.length > 0) {
      for (let i = 0; i < jobsInMemory.length; i++) {
        message.channel.send(`
        ${jobsInMemory[i]}
        `);
      }
    } else {
      message.channel.send("There are no jobs stored in memory");
    }
  }
});
client.on("message", message => {
  if (message.content == "!delete first") {
    jobsInMemory.shift();
    message.channel.send("The first job in memory have been deleted");
  }
});
client.on("message", message => {
  if (message.content == "!clear") {
    jobsInMemory = [];
    message.channel.send("Jobs stored in memory have been deleted");
  }
});

client.login(config.botToken);
