const input1= document.querySelector('#num1');
const input2= document.querySelector('#num2');
const btnSubmit = document.querySelector('#btn-submit');
const body  = document.querySelector('body');
const res = document.querySelector('#res')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const res1 = document.querySelector('#res1')
    btnSubmit.addEventListener('click',() => {
        console.log(input1.value)
        console.log(input2.value)
    })

btnSubmit.addEventListener('click',() => {
     res1.value = Number(input1.value) * Number(input2.value);

})
