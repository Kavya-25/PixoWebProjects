// IIFE
// var hello=function sayhello(name){
//     console.log('hello'+ " " +name);
// }();

// Arrow Function
// var sum=(a,b)=>{return a*b};
// console.log(sum(3,5));
// // code from line 7 to 8 is equivalent to
// function sum(a,b){
//     return a*b;
// };
// console.log(sum(3,5));

// var seconds=10;
// function timer(){
//     console.log(seconds);
//     seconds--;
//     if(seconds==0){
//         clearInterval(time);
//         console.log('Times up!!')
//     };
// }
// var time=setInterval(timer,1000);

// var seconds=10;
// var timer= ()=>{
//     console.log(seconds);
//     seconds--;
//     if(seconds==0){
//         clearInterval(time);
//         console.log('*time over*')
//     }
// }
// var time=setInterval(timer,1000);
console.log(this)

var thisExample={
    name:"kavya",
    log:function(){
        this.name="gitika";
        console.log(this);
    }
}
thisExample.log();