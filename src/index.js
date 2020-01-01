const puppeteer = require("puppeteer");
const Discord = require("discord.js");
const client = new Discord.Client();
const url = "URL";

var coincidence = ["Coincidence"];

(async () => {
  const URL = url;
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });
  console.log("Primer coincidence " + coincidence);
  client.on("message", async message => {
    //When the word start is written, run this:
    if (message.channel.id === "Channel ID") {
      if (message.content.startsWith("start")) {
        let dataJobs = await page.evaluate(() => {
          var a = document
            .getElementById("task-listing-datatable")
            .getAttribute("data-tasks"); //Search list
          var ar = eval(a); //Convert string to arr
          var keyword = [
            "Rate The Relevance Of Query And Article Result",
            "Are These Youtube Videos About Music?",
            "Are These Youtube Videos About Food?",
            "Are These Youtube Videos About Sports?",
            "Name Similarity",
            "How Well Did The Edges Get Cut Out Of The Image?",
            "Verify Entities - Top Structures V0004",
            "Identify Invalid Page 3",
            "Identify Invalid Page 4",
            "Identify Invalid Page 5",
            "Help Find Important Trustee Data",
            "Label The Car Products Go",
            "Are These Youtube Channels About Gaming? News/Politics?",
            "Are These Videos Safe For Advertising?",
            "Find A Pdf Document",
            "Rate Action Tag Quality For Short Videos V3",
            "Product Query Relevance",
            "Does The Box On The Image Need Background Fill [Y/N]?",
            "Categorize Damage In These Images Of Car Parts",
            "Label The Video Games Second Edition",
            "Identify The Number Of Pictograms Present In An Image.",
            "Identify The Number Of Pictograms Present In An Image",
            "Is This Youtube Channel For Children?",
            "Commission Document Search",
            "Visual Search Relevance",
            "Youtube Channel Reviews",
            "Verify Handwritten Text In An Image Matches The Phrase",
            "Are These Youtube Videos Background Music?",
            "Senior And First Lien",
            "Aidez - Nous À Répondre Automatiquement Aux Questions",
            "Ayúdanos A Responder Preguntas",
            "Hilf Uns Automatisch Fragen Zu Beantworten",
            "Judge The Sentiment Of Content",
            "Mark The Centre Of The Pupils On Eyes Using Dots",
            'Find The "Contract Size" On Ice',
            'Find The "Minimum Price Fluctuation" On Ice',
            "Verify Entities - Top Structures",
            "Classify Inappropriate Content On Linkedin Company Page_round3_al",
            "Classify The Relationship Between Two Concepts",
            "Identify Invalid Organization On Linkedin",
            "Q3 Title Prediction Evaluation",
            "Annotating Enumerating Relations",
            "Validate If Two Terms Are Related",
            "Are These Youtube Videos About Music? And In English?",
            "Questions And Reviews Organic Milk",
            "Help Label Issues",
            "Annotating Textual Markers Of Social Expressions",
            "Airplane Classification",
            "Annotate Logos In An Image Using A Bounding Box",
            "Sentiment Of Social Media Messages",
            "Are These Places Still In Business?",
            "Classify Inappropriate Content On Linkedin Company Page",
            "Determine If Youtube/Vimeo Videos Are About A Research Paper",
            "Match Youtube Demonstrations To Academic Research Papers",
            "Verify Text In An Image Matches The Phrase",
            "Outline Object With Polygons",
            "Answer Ranker V2",
            "Outline Text In Street Images",
            "Judge Consumer Purchase Behaviour From Tweets For Restaurant Brands",
            "Quantity Property Collection | En",
            "Qid Property Collection | En",
            "Entity Correction | En_in",
            "Entity Correction | En",
            "Entity Correction | En_us",
            "Entity Correction | En_gb",
            "Date Property Collection | En",
            "Categorize The Transaction Shown In Each Graph",
            "Which Image Would You Send In A Text Message",
            "Classify Inappropriate Linkedin Profiles",
            "Determine If A Paper Is A Survey Paper",
            "Catch Those Spikes",
            "Hairstyle Classification",
            "Material: Summary Evaluation 5Day Lt Manual",
            "Material: Summary Evaluation",
            "Skilled Job Opinion Survey Uae",
            "Detrmine Approval Of Donald Trump",
            "Help Categorize Spam Tweets About Tech",
            "Is This Tweet Relevant To Technology?",
            "Relationship Extraction V2",
            "Verify Linkedin Profile Information",
            "Help Us Link Phrases To Entities",
            "Updated: Help Us Link Phrases To Entities (You Must Select All)",
            "Updated: Help Us Link Phrases To Entities (You Must Select All)",
            "Tweets With Events",
            "Passage_model_eval_runid_bimpm_6k_silverset_nner",
            "Passage_model_eval_runid_bimpm_6k_silverset_no_nner",
            "Passage_model_eval",
            "Passage_model_eval_runid_bert_6k_silverset_weighted",
            "Does This Image Contain A Logo?",
            "English Question Answering",
            "Look At The Image And Determine The Light Source",
            "Look For Toxic Behavior In Online Conversations",
            "Classify Customer Messages In Bot-Mediated Conversations",
            "Determine The Intent Of Messages About E-Commerce Services",
            "Determine The Intent Of Messages About Telecommunication Service",
            "Determine The Intent Of Messages About Financial Services",
            "Classify Inappropriate Content On Linkedin Company Page_round3_allcontributer",
            "Categorize Query Text",
            "Please Annotate Any Mentions Of Date",
            "Company Standardization — Manual Launch 1",
            "Valid Page Verification",
            "Valid Page Verification 2",
            "Valid Page Verification 1",
            "Valid Page Verification 4",
            "Valid Page Verification 5",
            "Classify Inappropriate Content On Linkedin Company Page Validation Dataset",
            "What Age Group Would Be Interested In Watching These Youtube Videos?",
            "Tag Facilities Within Hotel Customer Reviews",
            "Event Vs General News Article Classification",
            "Hotel Opinion Deduplication, Step 2",
            "Categorize These Youtube Videos - Is This Video Safe For Advertising?",
            "Job Content Collection-Au (08-30-2019 => 09-02-2019)",
            "Job Content Collection-Au (08-30-2019 => 09-03-2019)",
            "Job Content Collection-Au (08-30-2019 => 09-04-2019)",
            "[Text-12 Review] Ask Virtual Assistant To Decrease The Temperature",
            "[Text-12 Review] Ask Virtual Assistant To Turn Off The Defroster",
            "[Text-12 Review] Ask Virtual Assistant To Turn On The Defroster",
            "[Text-12 Review] Ask Virtual Assistant To Turn On Sync Mode",
            "[Text-12 Review] Ask Virtual Assistant To Turn Off Sync Mode",
            "[Text-12 Review] Ask Virtual Assistant To Turn Off The Auto Climate Mode",
            "[Text-12 Review] Ask Virtual Assistant To Decrease The Fan Speed",
            "[Text-12 Review] Ask Virtual Assistant To Turn On The Auto Climate Mode",
            "[Text-12 Review] Ask Virtual Assistant To Increase Fan Speed",
            "[Text-12 Review] Ask A Virtual Assistant To Turn On The Fan",
            "Facebook Page Discovery (En) - 1444735",
            "Do These Youtube Videos Contain Politics And/Or Controversial News?",
            "Are These Two Items The Same Product?",
            "Identify Similarities Between Terms: Misspellings, Conjugations, Abbreviations And Other Variations",
            "Record Key Information About Facebook User Profiles - Age, Gender, And Location",
            "Identification Of Duplicate Organization Profiles",
            "Determine Number Of Employees Managed",
            "Scientist Resume Url Collection",
            "Categorize The Transaction In Each Graph",
            "Company Match Verification",
            "Compare People From Articles 2.1",
            "Are These Youtube Videos About Gaming (And In English)?",
            "Copy-Paste Article Content [Article Extraction][Updated]",
            "Are These Youtube Videos About Gaming?",
            "Are These Youtube Videos About Fashion?",
            "Are These Youtube Videos About Fitness (And In English)?",
            "Are These Youtube Videos About Mexican Food (And In English)?",
            "Tag Facilities Within Hotel Customer Reviews",
            "Categorize Query Text",
            "Vandalism Detection - 2.7",
            "Vandalism Detection - 2.8",
            "Vandalism Detection - 2.9",
            "Vandalism Detection - 3",
            "Vandalism Detection - 3.0",
            "Classify Pet And Food Safety Combinations",
            "Classifying Skills Into Categories",
            "[Text Annotation] Highlight Entities In Motion",
            "Facebook Page Discovery (En) - 1440653",
            "Are These Youtube Videos About Parenting (And In English)?",
            " Are These Youtube Videos About Food & Drink (And In English)?",
            "Are These Youtube Videos About Parenting (And In English)?",
            "Label The Company And Ticker Go",
            "Are These Youtube Videos About Technology (And In English)?",
            "Are These Youtube Videos About Pets (And In English)?",
            "Are These Youtube Videos About Beauty & Personal Care (And In English)?",
            "Categorize These Videos - Is This Video Safe For Advertising?",
            "Matching Pairs, R2, Full (Potential Explicit Content)",
            "Are These Youtube Videos About Snacks (And In English)?",
            "Are These Youtube Videos About Food & Cooking (And In English)?",
            "Are These Youtube Videos About Food & Drink (And In English)? ",
            "Are These Youtube Videos About Health & Wellness (And In English?)",
            "Violent Text Labeling",
            "Violent Text Labeling (Potential Explicit Content)",
            "Are These Two Items The Same Product? (Cat1)",
            "Are These Two Items The Same Product? (Cat2)",
            "Are These Two Items The Same Product? (Cat3)",
            "Are These Two Items The Same Product? (Cat4)",
            "Are These Two Items The Same Product? (Cat5)",
            "Are These Two Items The Same Product? (Cat6)",
            "Are These Two Items The Same Product? (Cat7)",
            "Are These Two Items The Same Product? (Cat8)",
            "Are These Two Items The Same Product? (Cat9)",
            "Are These Two Items The Same Product? (Cat10)",
            "Valid Page Verification - Q2 Part 1",
            "Valid Page Verification - Q2 Part 2",
            "Valid Page Verification - Q2 Part 3",
            "Valid Page Verification - Q2 Part 4",
            "Valid Page Verification - Q2 Part 5",
            "Valid Page Verification - Q2 Part 6",
            "Valid Page Verification - Q2 Part 7",
            "Valid Page Verification - Q2 Part 8",
            "Valid Page Verification - Q2 Part 9",
            "Valid Page Verification - Q2 Part 10",
            "[Explicit Content] Toxicity Detection In 2K Wikipedia Comments (Oc)",
            "Matching Pairs, R4 (Potential Explicit Content)",
            "Matching Pairs, R5 (Potential Explicit Content)",
            "Matching Pairs, R3 (Potential Explicit Content)",
            "Matching Pairs, R2 (Potential Explicit Content)",
            "Matching Pairs, R6 (Potential Explicit Content)",
            "Matching Pairs, R7 (Potential Explicit Content)",
            "Matching Pairs, R8 (Potential Explicit Content)",
            "Matching Pairs, R9 (Potential Explicit Content)",
            "Matching Pairs, R10 (Potential Explicit Content)",
            "[Text Annotation] Highlight The Entity In Motion",
            "Company Match Verification - Iteration 8",
            "Company Match Verification - Iteration 9",
            "Company Match Verification - Iteration 10",
            "Company Match Verification - Iteration 7",
            "Company Match Verification - Iteration 6",
            "Company Match Verification - Iteration 5",
            "Brand Of A Company Validation",
            "Recipe Course Classification",
            "[Text Annotation] Highlight The Entity In Motion",
            "Locating Companies",
            "Recipe Title - Dish (Review Of 1441839 - F8 Recommendations Implemented)",
            "Judge The Sentiment Of Content - Fragrance Posts",
            "Funds Document Type Extraction",
            "Are These Youtube Videos About Music Festivals (And In English)?",
            "Are These Youtube Videos About Halloween Content (And In English)?",
            "[Explicit Content] Toxicity Detection In 2+8K Wikipedia Comments (Oc)",
            "Are These Youtube Videos About Winter Holidays (And In English)?",
            "Son Estos Videos De Youtube Solo En Español?",
            "Are These Youtube Videos About Halloween Content (And In English)?",
            "Opinion Entailment. Does One Opinion Imply The Other?",
            "Classifying A String Into A Job Title Or Not Job Title.",
            "Classifying A String Into A Job Title Or Not Job Title",
            "Are There Any Voices In These Audio Clips?",
            "Identify The Same Investment Fund",
            "Validating Business Name And Addresses",
            " Detect An Action Item In An Utterance",
            "Determine If An Image Contains Pornography/Sexual Content",
            "Photographic Attributes - Part 1 - Setting, Category, Contents [V1.2, Batch4]",
            "Tag Facilities And Their Sentiment Within Hotel Customer Reviews",
            "Are These Youtube Videos About Hip Hop / Rap?",
            "Detect An Action Item In An Utterance",
            "Are These Videos About Beverages (And In English)?",
            "Are These Youtube Videos About Business?",
            "Are These Videos About Basketball (And In English)?",
            "Classify Code Review Comments Into Categories",
            "Photographic Attributes - Part 1 - Setting, Category, Contents [V1.3, Batch9]",
            "Are These Youtube Videos About Extreme Sports (And In English)?",
            "Langa_ss [V2]: Sunrise/Sunset [Batch003/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch001/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch002/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch005/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch006/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch007/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch008/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch009/An]",
            "Langa_ss [V2]: Sunrise/Sunset [Batch0010/An]",
            "Profile To Key Point Annotation — Manual Launch 1",
            "Profile To Key Point Annotation — Manual Launch 2",
            "Profile To Key Point Annotation — Manual Launch 3",
            "Judge The Sentiment Of These Reviews (Fixed)",
            "これから見るビデオが日本語のビデオとして認められるか判定してください。",
            "Named Entity Recogniton",
            "Langa_ss [V2]: Sunrise/Sunset [Batch002 / Gs]",
            "Are These Youtube Videos About Green Living (And In English)?",
            "Are These Items Duplicates? (Us 2019-12)",
            "Find Hypothetical Statements In Patient Notes",
            "Political Opinions (Potential Explicit Content)",
            "Political Opinions",
            "Is This Youtube Video About Religion?",
            "Are These Youtube Videos About Award Shows?",
            "Are These Youtube Videos About Religion?",
            "Query-Gif Relevancy: 5 Degrees (33270 Rows)",
            "Query-Gif Relevancy: 5 Degrees",
            "Judge The Sentiment Of The Highlighted Theme",
            "Label Topics In Restaurant Reviews",
            "これらの動画が、日本語かつ美容かパーソナルケアの動画かどうか判断してください。",
            "これらの動画は車を購入する動画、または車を所有することに関する動画ですか？",
            "これらの動画が広告配信に適したものであるかどうかを分類してください。",
            "Classify Text Into Categories V1.3 (New Instructions)",
            "Classify Text Into Categories V1.3",
            "Are These Youtube Videos About Movies (And In English)?",
            "Classify Search Keywords Into Categories",
            "Pgx Simplified Addresses",
            "Lalin - Verify Scenes The Same",
            "Labeling-Sites To_reevaluate_2018_adi",
            "Sites_classification_labelers (Adi_2018_premium)",
            "Photography_or_not(Adi)",
            "Is The Site A Photography Site?",
            "Photography_or_not(Round2)",
            "Photography_or_not(Round1)",
            "Photography_or_not(Round3)",
            "Photography_or_not(Round4)",
            "Sites_classification_labelers (Adi_2019_crowdsourcing_free)",
            "Iproduct Round 3 File1 17-Dec-19 (Potential Explicit Content)",
            "Iproduct Round 3 File1 20-Dec-19 (Potential Explicit Content)",
            "Iproduct Round 3 File1 19-Dec-19 (Potential Explicit Content)",
            "Are These Youtube Videos About Award Shows (And In English)?",
            "Toxicity In Online Comments",
            "Query-Gif Relevancy: 5 Degrees (33270 Rows) (Potential Explicit Content)"
          ];
          let ret = [];
          let ret1 = [];

          ar.forEach(val => {
            if (keyword.includes(val[1])) {
              if (`${val[5]}` <= 10) {
                console.log("Es menor a 10");
              } else {
                ret.push(
                  `*${val[0]}* - ***${val[1]}*** - Numero de tasks: *${val[5]}* @everyone`
                );
              }
            }
          });
          ar.forEach(val => {
            if (keyword.includes(val[1])) {
              if (`${val[5]}` <= 10) {
                console.log("Es menor a 10");
              } else {
                ret1.push(`${val[0]} - ${val[1]}`);
              }
            }
          });
          return [ret, ret1];
        });

        for (let i = 0; i <= dataJobs[0].length; i++) {
          if (!coincidence.includes(dataJobs[1][i])) {
            //If there is no coincidence, send the message
            if (dataJobs[1][i] != undefined) {
              client.channels.get(`Channel ID`).send(dataJobs[0][i]);
              coincidence.push(dataJobs[1][i]);
            } else {
              console.log("nada");
            }
          } else {
            console.log("Ya fue enviado");
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
      client.channels.get(`Channel ID`).send(`start`);
    }, 10000);
  }
});

client.on("message", message => {
  if (message.content == "!memory") {
    message.channel.send("Los mensajes que se encuentran en memoria son:");
    if (coincidence.length > 0) {
      for (let i = 0; i < coincidence.length; i++) {
        message.channel.send(`
        ${coincidence[i]}
        `);
      }
    } else {
      message.channel.send("No hay jobs almacenados en la memoria");
    }
  }
});
client.on("message", message => {
  if (message.content == "!delete first") {
    coincidence.shift();
  }
});
client.on("message", message => {
  if (message.content == "!clear") {
    coincidence = [];
    message.channel.send("Se ha limpiado la lista de jobs almacenados");
  }
});

client.login("Bot Token");
