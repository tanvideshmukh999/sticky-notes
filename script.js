const addBtn=document.getElementById("add-note-btn");

 // add note  event handler
addBtn.addEventListener("click",()=>{
    let input=document.getElementById("textarea-1");
    let color=document.getElementById("color");
    let note_container=document.getElementById("notes-container");
   let note= document.createElement("div");
   note.setAttribute("class","note");


// `;
   note_container.appendChild(note);
   note.style.backgroundColor=color.value;
   

   let noteText=document.createElement("textarea");
   noteText.setAttribute("readonly","readonly");
   noteText.setAttribute("rows","12");
   noteText.value=input.value;
   note.appendChild(noteText);


  

   let deleteIcon=document.createElement("i");
   deleteIcon.setAttribute("class","fa-solid fa-trash");
   deleteIcon.setAttribute("id","delete");

   note.appendChild(deleteIcon);
    
   let editIcon=document.createElement("i");
   editIcon.innerHTML='<i class="fa-solid fa-pen edit"></i>';
    note.appendChild(editIcon);

   editIcon.addEventListener('click',()=>{
    console.log(editIcon.innerHTML);
    if(editIcon.innerHTML=='<i class="fa-solid fa-pen edit"></i>') {
        editIcon.innerHTML='<i class="fas fa-save edit"></i>';
        noteText.removeAttribute("readonly");
        noteText.style.background="white";
    }else {
        editIcon.innerHTML='<i class="fa-solid fa-pen edit"></i>';
        noteText.setAttribute("readonly","readonly");
        noteText.style.background="transparent";
       
    }


   })


    // delete particular note
   let delete_icon=note.querySelector("#delete");
   delete_icon.addEventListener("click",()=>{
        note.style.animation= "fallDown 1s linear";
       setTimeout(()=>{
         note.remove();
       },1000);
      
   })
   input.value="";
  })
 