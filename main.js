const request = require("request");
const cheerio = require("cheerio");




const url = "https://stackoverflow.com/questions"  //url of the main page


request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractHTML(html);
    }
}



function extractHTML(html){
    let $ = cheerio.load(html);     //Read the html
                                
    for(let i=1;i<=50;i++){
      
    let fulllink = "https://stackoverflow.com/questions?tab=newest&page="+ i;
     
    getalldata(fulllink);
    
  }
}


function getalldata(url){
    request(url,function (err,response,html){
        if((err)){
            console.log(err);
        }else{
           extractdata(html);
        }
    } )

}




function extractdata(html){

    let $ = cheerio.load(html);

   //vote  .vote-count-post
   let votecount = $(".vote-count-post");
   
   //answers .status
   let answercount = $(".status");
 

   for(let i=1;i<votecount.length;i++){

   let votetext = $(votecount[i]).text();
   let anstext = $(answercount[i]).text();

   console.log("question no ->", i);
   console.log("vote is ->" , votetext);
   console.log("ans is ->", anstext.trim());

   

   }
   
}





   
  
