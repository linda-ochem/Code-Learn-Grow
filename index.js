const button = document.getElementById('btn')

button.addEventListener('click', (e)=>{
e.preventDefault()

const firstname = document.getElementById('first').value
const lastname = document.getElementById('last').value

// const value = 'Hello'  + ' ' + firstname + ' ' + lastname + ' ' + 'welcome to class'

const value = `Hello ${firstname} ${lastname} welcome to class today `

console.log(value)
})


// ToDo 
// CREATE A FORM
// WITH THREE INPUTS: NAME, AGE, COUNTRY
// DISPLAY THE RESULT IN A TEMPLATE LITERAL TO WELCOME HIM OR HER TO THE COUNTRY


















































// const form = document.getElementById('btn')

// form.addEventListener('click', (e)=>{
//     e.preventDefault()
//     const firstname = document.getElementById('fname').value;
//     const lastname = document.getElementById('lname').value

//     console.log(firstname + lastname)
// })

//ToDO
//create a simple form, that takes the inputs 'Name', 'country'
//and outputs a string literal that says Hello 'Name', 
//welcome to 'Country', i hope you enjoy your stay!