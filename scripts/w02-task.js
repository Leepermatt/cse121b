/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Matthew Leeper';
let currentYear = Date.currentYear;
const profilePicture = `./images/mypic.jpg`

// const a1 = 'https://nodejs.org/static/images/logo.svg';
//const image = document.getElementById("image");
//image.src = a1;


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('image');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent =`${currentYear}`;
//Element.setAttribute(name, value)
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);





/* Step 5 - Array */

const favoriteFoods =['sushi', 'hamburgers', 'burritos', 'tacos']
favoriteFoods.push('spicy food');
foodElement.innerHTML= favoriteFoods;
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




