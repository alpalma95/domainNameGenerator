import "./style.css";

const domainOptions = document.getElementById("domains");
const list = document.getElementById("list");
const generateBtn = document.getElementById("generate");
const undoBtn = document.getElementById("undo");

const art = ["the", "a"];
const adj = ["great", "worst", "fabulous", "nice", "crowded"];
const noun = ["cinema", "film", "popcorn", "oscar"];

const domainList = [
  ".com",
  ".es",
  ".org",
  ".net",
  ".int",
  ".mil",
  ".edu",
  ".ar",
  ".pt",
  ".ar"
];

//Render domain options
const optionsForDomain = domainList.map(x => document.createElement("option"));

for (let i in domainList) {
  optionsForDomain[i].value = domainList[i];
  optionsForDomain[i].innerHTML = domainList[i];

  domainOptions.appendChild(optionsForDomain[i]);
}

//Creating combinations
const combinations = [];

for (let i in art) {
  for (let j in adj) {
    for (let k in noun) {
      combinations.push(`${art[i]}${adj[j]}${noun[k]}`);
    }
  }
}

//Rendering items
let htmlElements, selectedDomain;

const updateContent = () => {
  list.innerHTML = "";
  for (let i in htmlElements) {
    list.innerHTML += htmlElements[i];
  }
};

const generateList = () => {
  selectedDomain = domainOptions.value;
  // console.log(domainOptions.innerHTML);
  htmlElements = combinations.map(x => `<li>${x}${selectedDomain}</li>`);
  updateContent();
  list.classList.remove("hidden");
};

const removeAll = () => {
  list.innerHTML = "";
  list.classList.add("hidden");
};

generateBtn.addEventListener("click", generateList);
undoBtn.addEventListener("click", removeAll);
