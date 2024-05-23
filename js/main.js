const notesContainer = document.querySelector(".notes-container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let text = document.createElement("p");
  text.classList.add("input-box");
  text.setAttribute("contenteditable", "true");
  let image = document.createElement("img");
  image.src = "images/delete.png";
  text.appendChild(image);
  notesContainer.appendChild(text);
  setData()
});

notesContainer.addEventListener('click',(e)=>{
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
  }
})

function showNotes(){
  notesContainer.innerHTML=localStorage.getItem("data")
}
showNotes()
function setData(){
  localStorage.setItem("data",notesContainer.innerHTML);
}
