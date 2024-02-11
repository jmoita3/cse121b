/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples')

let templeList = []


/* async displayTemples Function */

const displayTemples = (temples) => {
    for (i = 0; i < temples.length; i++){
        const article = document.createElement("article");
        const templeName = document.createElement("h3");
        const templeNameText = document.createTextNode(templeList[i].templeName)
        const templeImage = document.createElement("img");
        templeImage.src = templeList[i].imageUrl;
        templeName.appendChild(templeNameText)
        article.appendChild(templeName);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    }
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      if (response.ok) {
        const data = await response.json();
        getData(data);
      }
    function getData(data) {
      templeList = data;
      console.log(templeList)
      displayTemples(templeList)
    }
}

/* reset Function */

const reset = () => {
    templeList = []
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered');


}

getTemples();

/* Event Listener */

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const results = fetch(url);
console.log(results);