/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Matthew Leeper",
    photo : src = 'images/mypic.jpg',
    favoriteFoods : [
    "sushi", 
    "pizza", 
    "burritos", 
    "spicy food"
    ],
    hobbies : ["reading", "camping", "sleeping", "working"],
    placesLived : [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place : "Salt Lake City, UT",  
        length : "4 years"
    },
    {
        place : "San Diego, CA",
        length : "26 years"
    },
    {
        place : "Las Vegas, NV",
        length : "22 years"
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    
});
document.appendChild
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
    
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
