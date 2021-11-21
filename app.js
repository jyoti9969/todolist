console.log("Welcome to notes app. This is app.js");
showNotes();



function openModal(index) {
  document.getElementById('modal').style.display='block';
}


// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let text = addTxt.value.trim();

  let length = text.length;

  console.log(length);
  if(length > 0) {
    notesObj.push(addTxt.value);
  }else {
    window.alert('Enter some text')
  }
  
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
//  console.log(notesObj);
 showNotes();
 
})
//function to show element through localstorage
function showNotes(){
  let notes=localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html="";
  notesObj.forEach(function(element, index){
    html +=  `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                <button id= "${index}" onclick="openModal(this.id)" class="btn btn-primary">Update Node</button>
            </div>
        </div>`;
    
  });
  let notesElm = document.getElementById('notes');
  if(notesObj.length!=0)
  notesElm.innerHTML=html;
  else{
  notesElm.innerHTML=`nothing to show`;
  }
}
//FUNCTION TO DELete a note
function deleteNote(index){
  console.log('i am deleting',index);
  let notes=localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//FUNCTION TO UPDATE A NODE




let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  })
})
