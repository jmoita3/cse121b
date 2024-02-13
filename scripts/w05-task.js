/* W05: Programming Tasks */

/* Declare and initialize global variables */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  for (i = 0; i < temples.length; i++) {
    const article = document.createElement("article");
    const templeName = document.createElement("h3");
    const templeNameText = document.createTextNode(templeList[i].templeName);
    const templeImage = document.createElement("img");
    templeImage.src = templeList[i].imageUrl;
    templeName.appendChild(templeNameText);
    article.appendChild(templeName);
    article.appendChild(templeImage);
    templesElement.appendChild(article);
  }
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  if (response.ok) {
    const data = await response.json();
    getData(data);
  }
  function getData(data) {
    templeList = data;
    console.log(templeList);
    displayTemples(templeList);
  }
};

/* reset Function */

const reset = () => {
  templesElement.innerHTML = "";
};
/* filterTemples Function */

const filterTemples = async (temples) => {
  reset();
  let filter = document.getElementById("filtered").value;
  switch (filter) {
    case "utah":
      for (let i = 0; i < temples.length; i++){
        displayTemples(temples[i])
        console.log(temples[i])
      }



      break;

    case "nonutah":
      console.log("test data 2");
      break;
    case "older":
      console.log("test data 3");
      break;
    case "all":
      console.log("test data 4");
      displayTemples(temples)
    default:
      return true;
  }
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
