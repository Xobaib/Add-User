// substring() method :

// let hello = 'Hello World';
// let result = hello.substring(0, 10);
// console.log(result);
// ----------------------------------------------------------------------------------------------------------------

// new Array() methode :

// const numbers = new Array(1, 2, 'xobaib', true, null);
// console.log(numbers);
// ----------------------------------------------------------------------------------------------------------------

// Array.isArray() method:

// const names = ['xobaib', 'amir', 'sara', 'ali'];
// console.log(Array.isArray(names));
// ----------------------------------------------------------------------------------------------------------------

// JSON.stringify()  method: (آبجکت های درون آرایه را به طور کامل به string تبدیل میکند)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     }
// ];

// console.log(todos);

// const result = JSON.stringify(todos);
// console.log(result);
// ----------------------------------------------------------------------------------------------------------------

// DOM:
// single element selectors:

// console.log( document.getElementById('name')); /* select element with id */
// console.log( document.querySelector('input')); /* select element with class and the element himself */

// multiple element selectors:

// console.log(document.querySelectorAll('input'));   /* select elements with classes and elements himself */ /*Recommended*/
// console.log(document.getElementsByClassName("item")); /* select elements with classes only (we dont use .) */ /*not Recommended*/
// console.log(document.getElementsByTagName("input"));  /* select elements himself only */  /*not Recommended*/
// ----------------------------------------------------------------------------------------------------------------

// manipulating HTML with DOM:

// const list = document.querySelector('.items');  /* accessing to the element */
// list.firstElementChild.innerHTML = '<h1>Xobaib Mahmoodi</h1>';  /* change the element */
// list.children[1].textContent = '09186861596';  /* change the Textual content*/
// list.lastElementChild.innerText = 'xobaib2001.m@gmail.com'  /* change the Textual content*/

// const button = document.querySelector('.btn');  /* accessing to the element */
// button.style.background = 'darkgreen';  /* change the style */
// ----------------------------------------------------------------------------------------------------------------

// const button = document.querySelector('.btn');
// button.addEventListener('click', function(b){ /* ایجاد یک عمل خاص , این متد دارای دو جایگاه است */
//     b.preventDefault();   /* غیر فعال کردن حالت پیش فرض */
//     alert('you have clicked now');})
// ----------------------------------------------------------------------------------------------------------------

// پروژه تمرینی :

const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const button = document.querySelector('.btn');
const users = document.querySelector('#users');

button.addEventListener('click', processing);

function processing(a){
    
    a.preventDefault();

    if(name.value === '' || email.value === ''){
        let warning = document.querySelector('.msg');
        warning.innerHTML = 'please enter filds';
        warning.classList.add('error');
        setTimeout(() => warning.remove(), 3000);
    } else {
        let seccess = document.querySelector('.msg');
        seccess.textContent = 'Successful login'
        seccess.classList.add('error-1');
        setTimeout(() => seccess.remove(), 3000);

        let information = document.createElement('h4');    /* creating an element */
        let information2 = document.createElement('h4');  
        let text = document.createTextNode(` fullName: ${name.value}`); /* creating a text */
        let text2 = document.createTextNode(` E-mail address: ${email.value}`);
        information.appendChild(text); /* متغیر داخل پرانتز به آخرین فرزند متغیری که متد را برای آن قرار دادیم تبدیل میشود */
        information2.appendChild(text2);
        users.appendChild(information).classList.add('Footnote');
        users.appendChild(information2).classList.add('Footnote');
    };
  
}
// ----------------------------------------------------------------------------------------------------------------
