// import { masiv } from "./script.js";
// localStorage.clear()
const bask=document.querySelector('.bask')
const two=localStorage.getItem('products')
const second=JSON.parse(two)
console.log(second);

// for (let index = 0; index < second.length; index++) {
//     const element = second[index];
    // console.log(element.id);
 
const third=`
    <div class="cards">
    <p>${second[0]}</p>
    <img src='${second[1]}'>
    <h3>${second[2]}</h3>
    <p>${second[3]}</p>
    <p>${second[4]} рублей</p>
    </div>
`
bask.innerHTML=third
// }
// bask.innerHTML=second
