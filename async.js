// const sayJeetu=function(){
//     console.log("jeetu")
// }
// setTimeout(sayJeetu,2000)


// const changeText=function(){
//     document.querySelector('h1').innerHTML="Best js series";
// }
// setTimeout(changeText,2000)



// const changeText=function(){
//     document.querySelector('h1').innerHTML="Best js series";
// }
// const changeMe=setTimeout(changeText,2000);

// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(changeMe);
//     console.log("Stopped");
// })


// const sayDate=function(str){
//     console.log(str,Date.now());
// }
// const intercalId=setInterval(sayDate,1000,"h1");
// clearInterval(intercalId)


const startChange=function(){
    console.log("jeetu", Date.now());
}

document.querySelector("#start").addEventListener('click', function(){
    setInterval(startChange,1000);
})

document.querySelector("#stop").addEventListener('click',function(){
     clearInterval();
})






