// let a=340;

// if(true){
//     let a=10;
//     console.log("INNER a:",a);
    // const b= 20;
    // var c= 30;
// }
// console.log(c);
// console.log(b);
// console.log("outer a:",a);

// function one(){
//     const username="Nischal";
//     function two(){
//         const website="Youtube";
//         console.log(username);
//     }
//     // console.log(website);
//     // two();

// }
// one();

if(true){
    const username="Nischal";
    if(username==="Nischal"){
        const website=" Youtube";
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



//++++++ intersting +++++ some glimpse of hoisting
addone(2);
function addone(num){
    return num+1;
}

const addfive=function(num){
    return num+5;
}
addfive(6);


