timesClickedheart = 0;
for (let index = 0; index < document.getElementsByClassName("fa-heart").length; index++) {
    document.getElementsByClassName("fa-heart")[index].onclick = function() { 
      timesClickedheart++;
  
      if (timesClickedheart>1) {
      this.classList.remove("fa-heart-myfav");
      timesClickedheart = 0;
    } else {
      this.classList.add("fa-heart-myfav");
    }
    };
  }

  for (let index = 0; index <  document.getElementsByClassName("fa-trash").length; index++) {
    document.getElementsByClassName("fa-trash")[index].onclick = function(){
            this.parentNode.parentNode.remove()
            console.log(this.parentNode.parentNode)
        }
      
  }

  // metod 1 

  // let decreaseBtn = document.getElementById("decrease_button");
  // let increaseBtn = document.getElementById("increase_button");
  // let counter = document.getElementById("counter");
  // let count = 0;

  // decreaseBtn.addEventListener('click', ()=>{
  // count --;
  // counter.innerHTML = count;
  // })
  //  increaseBtn.addEventListener('click', ()=>{
  // count ++;
  // counter.innerHTML = count;
  // })


  

const plus = document.getElementsByClassName('fas fa-plus');
const minus = document.getElementsByClassName('fas fa-minus');
const count = document.getElementsByClassName('number');
const total = document.getElementsByClassName("cart-total-price");
let sum = 0
let tab = []

for (let index = 0; index < plus.length; index++) {
plus[index].addEventListener("click", function(){
    if (!Number(this.nextElementSibling.innerText)) {
      this.nextElementSibling.innerText = 0;
      }
    this.nextElementSibling.innerText++;
      sum  = Number(this.nextElementSibling.innerText) * Number(this.parentNode.nextElementSibling.innerText.split("$")[0])
      tab [index] = sum;
      total[0].innerText = tab.reduce((prev, item)=>prev+item, 0);
  })
}
for (let index = 0; index < minus.length; index++) {
  minus[index].addEventListener("click", function(){
    this.previousElementSibling.innerText--;
    if (!Number(this.previousElementSibling.innerText)||Number(this.previousElementSibling.innerText)<1) {
      this.previousElementSibling.innerText = 0;
      }
      sum  = Number(this.previousElementSibling.innerText) * Number(this.parentNode.nextElementSibling.innerText.split("$")[0])
      tab [index] = sum;
      total[0].innerText = tab.reduce((prev, item)=>prev+item, 0);
  })
}

// plus.addEventListener('click', ()=>{
//   a++;
//   count.innerText = a;
//   console.log(a);
// })
// minus.addEventListener('click', ()=>{
//   if (a > 1){
//   a--;
//   count.innerText = a;
//   console.log(a);
//   }
// })





//ki nheb nhot ktiba fi blaset numro ama mbaad ki tzid + yetbadel ra9m
// for (let index = 0; index < plus.length; index++) {
//   plus[index].addEventListener("click", function(){
//     if (!Number(this.nextElementSibling.innerText)) {
//       this.nextElementSibling.innerText = 0;
//     }
//     this.nextElementSibling.innerText++;
//   }) 



// hedhi num maytihech taht 0
// for (let index = 0; index < minus.length; index++) {
//   minus[index].addEventListener("click", function(){
//     this.previousElementSibling.innerText--;
//     if (!Number(this.previousElementSibling.innerText)||Number(this.previousElementSibling.innerText)<1) {
//       this.previousElementSibling.innerText = 0;
//       }
//   })
// }


