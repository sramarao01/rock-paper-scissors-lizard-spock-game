let images=document.querySelectorAll(".image")
let player1,player2;
for(let y of images){
    y.addEventListener("click",function(){
        player1=document.querySelector(".heading").innerHTML=this.getAttribute("alt")
        y.style.transform="scale(1.3)"
        computer()
     if(player1==player2){
         document.querySelector("#score").innerHTML="DRAW !!!";
         document.querySelector("#score").style.background="yellowgreen"

     }else if(player1=="rock"&&(player2=="scissor"||player2=="lizard")){
         document.querySelector("#score").innerHTML="YOU WON !!!";
         document.querySelector("#score").style.background="green"

     }else if(player1=="paper"&&(player2=="rock"||player2=="spock")){
        document.querySelector("#score").innerHTML="YOU WON !!!";
        document.querySelector("#score").style.background="green"

     }else if(player1=="scissor"&&(player2=="paper"||player2=="lizard")){
        document.querySelector("#score").innerHTML="YOU WON !!!";
        document.querySelector("#score").style.background="green"

     }else if(player1=="lizard"&&(player2=="spock"||player2=="paper")){
        document.querySelector("#score").innerHTML="YOU WON !!!";
        document.querySelector("#score").style.background="green"

     }else if(player1=="spock"&&(player2=="rock"||player2=="scissor")){
        document.querySelector("#score").innerHTML="YOU WON !!!";
        document.querySelector("#score").style.background="green"

     }else{
         document.querySelector("#score").innerHTML="YOU LOSE"
         document.querySelector("#score").style.background="red"
     }
     document.querySelector(".cover").style.display="block"  
    })
}
let arr=["rock","paper","scissor","lizard","spock"];

let random=Math.trunc(Math.random()*5)
let secondplayer=document.querySelectorAll(".image1")
player2=arr[random]
function computer(){
    document.querySelector(".heading1").innerHTML=arr[random]
    for(let x of secondplayer){
        if(arr[random]== x.getAttribute("alt")){
            x.style.transform="scale(1.3)"
        }
    }
}