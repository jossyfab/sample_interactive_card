const inputName = document.getElementById('input-name');
const inputNumber = document. getElementById('input-number');
const inputMonth = document. getElementById('input-month');
const inputYear = document. getElementById('input-year');
const inputCvc = document. getElementById('input-cvc');
const submitBtn = document. getElementById('submit-btn');
const cvc = document. getElementById('cvc');
const name = document. getElementById('name');
const month = document. getElementById('month');
const year = document. getElementById('year');
const form = document. querySelector('form');
const done = document.querySelector('.thank-you');
const number = document.getElementById('number');



function setCardNumber (e){
document.getElementById('number').innerText = e.target.value;
}
function setCardName (e){
document.getElementById('name').innerText = e.target.value;
}
function setCardMonth (e){
document.getElementById('month').innerText = e.target.value;  
}
function setCardYear (e){
document.getElementById('year').innerText = e.target.value;   
}
function setCardCvc (e){
document.getElementById('cvc').innerText = e.target.value;  
}
function format (s){
  return s.toString().replace(/\d{4}(?=.)/g,"$& ");  
}




function handleSubmit(e){
    e.preventDefault();
    if(!inputName.value){
       inputName.classList.add("error"); 
       inputName.parentElement.classList.add("error-message");
    }else{
        inputName.classList.remove("error");
        inputName.parentElement.classList.remove("error-message");
    }

    if (!inputNumber.value) {
      inputNumber.classList.add('error');
      inputNumber.parentElement.classList.add('error-message');
    } else if (inputNumber.value.length < 16) {
        inputNumber.classList.add("error")  
    }else{
        inputNumber.classList.remove('error');
        inputNumber.parentElement.classList.remove('error-message');
    }

    if (!inputMonth.value) {
        inputMonth.classList.add('error');
        inputMonth.parentElement.classList.add('error-message');
    } else {
        inputMonth.classList.remove('error');
        inputMonth.parentElement.classList.remove('error-message');
    }   
 

    if (!inputYear.value) {
       inputYear.classList.add('error');
       inputYear.parentElement.classList.add('error-message');
    } else {
       inputYear.classList.remove('error');
       inputYear.parentElement.classList.remove('error-message');
    }  

    
    if (!inputCvc.value) {
       inputCvc.classList.add('error');
       inputCvc.parentElement.classList.add('error-message');
    } else {
        inputCvc.classList.remove('error');
        inputCvc.parentElement.classList.remove('error-message');
    }

    if(inputName.value &&
    inputNumber.value &&
    inputMonth.value &&
    inputYear.value &&
    inputCvc.value &&
    inputNumber.value.length == 16
    ){
        done.classList.remove("hidden");
        form.classList.add("hidden");
    }

}


submitBtn.addEventListener('click', handleSubmit);


inputNumber.addEventListener("keyup", setCardNumber);
inputName.addEventListener("keyup", setCardName);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvc.addEventListener("keyup", setCardCvc);
