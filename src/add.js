import saveData from "./save";

export default function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if(inputBox.value === "") {
        alert("Please enter a task to continue.")
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        
    }
    saveData();
}