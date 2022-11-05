function add(){
    
    return new Promise(function(resolve,error){
        let xml=new XMLHttpRequest();

xml.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=037cc539d190462b86d59f8a5f023a48',false);

xml.onload=function(){
let obj=JSON.parse(this.responseText).articles;
let str="";

    obj.forEach((elm,idx)=>{
       str+=`<div class="news">Breaking News ${idx}</div>
       <div class="main">
           <div class="newh"><h3>${elm.title}</h3>
           <div class="inner">
               ${elm.content}
           </div>
           </div>
         
       </div>` 
        })
        let tm=document.getElementsByClassName("thismain")[0];
tm.innerHTML=str;

let err=false;
if(!err){
    resolve();
}
else{
    error();
    
}

}
xml.send();
    })



}




add().then(addevent).catch(function(){
    console.log("abe yaar");
});

function addevent(){
let obj=document.querySelectorAll(".news");
obj.forEach((elm,idx)=>{
elm.addEventListener("click",function(){
    find(obj);
    elm.nextElementSibling.style.display=`block`;
})
})
}




function find(obj){
    obj.forEach((elm)=>{
        elm.nextElementSibling.style.display=`none`;
    })
}
