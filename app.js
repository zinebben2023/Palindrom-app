const inputEl=document.getElementById('inpt')
const resuletEl=document.getElementById("result")
const  btnEl=document.querySelector(".palin")

function palindrom(text){
    let textReverse=text.trim().split("").reverse().join('')
   if(textReverse==text){
    return true;
   }else{
    return false
   }
}


btnEl.addEventListener("click",() => {
    let textinpt=inputEl.value.trim()
   let isPalindrom=palindrom(textinpt)
   if(isPalindrom){
    resuletEl.textContent='bravo 👏 ceci est un palindrome'
   }else{
    resuletEl.textContent='filed 👇 '
   }
   
})


