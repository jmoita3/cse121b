/* W05: Programming Tasks */

/* Declare and initialize global variables */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  for (const temple of temples) {
    const article = document.createElement("article");
    const templeName = document.createElement("h3");
    const templeNameText = document.createTextNode(temple.templeName);
    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
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
      displayTemples(temples.filter(e => e.location.includes('Utah')));
      break;
    case "nonutah":
      displayTemples(temples.filter(e => !(e.location.includes('Utah'))));
      break;
    case "older":
      console.log("test data 3");
      break;
    case "all":
      displayTemples(temples)
      console.log("test data 4");
    default:
      return true;
  }
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
