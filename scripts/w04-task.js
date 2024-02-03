/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Joao Moita",
    photo: "images/picture.jpg",
    favoriteFoods: ['Pizza', 'Spaghetti', 'Mexican', 'Sushi', 'Chinese'],
    hobbies: ['Art', 'Gym', 'Movies', 'Video games', 'TV'],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '7 years'
    },
    {
        place: 'Ceres, CA',
        length: '6 years'
    },
    {
        place: 'Tijuana, MX',
        length: '10 years'
    }
)

console.log(myProfile.placesLived[0].place)

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);

document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    }
)

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
    }
)

/* Places Lived DataList */

for (let i = 0; i < 3; i++){
    let placesLived = document.querySelector('#places-lived')
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = myProfile.placesLived[i].place;
    dd.textContent = myProfile.placesLived[i].length;
    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
}


