import "./style.css";
import addTask from "./add";
import saveData from "./save";
import showTask from "./show";
import clearData from "./clear";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-tasks");

addButton.addEventListener("click", () => {
    addTask();
})

clearButton.addEventListener("click", () => {
    clearData();
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


showTask();