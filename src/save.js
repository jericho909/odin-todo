export default function saveData(){
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("data", listContainer.innerHTML);
}