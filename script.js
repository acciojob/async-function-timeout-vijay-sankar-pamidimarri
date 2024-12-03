//your JS code here. If required.
let output=document.querySelector("span");

document.querySelector("button").addEventListener("click",async ()=>{
    let text=document.querySelector("#text").value;
    let time=document.querySelector("#delay").value;
    let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(text);
    },Number(time));
  });
  let k1=await p;
  output.textContent=k1;
  document.querySelector("#text").value="";
  document.querySelector("#delay").value="";
})