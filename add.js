const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

const saveNote = () =>{
    const note =document.querySelectorAll(".note textarea");
    console.log(note)
    const data = [];
    note.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
   // console.log(data)
   if(data.length === 0){
    localStorage.removeItem("note")
   } else{
       localStorage.setItem("note", JSON.stringify(data))
   }
 
}




addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }

)




const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML =`
    
    <div class="note">
    <div class="tool">
        <i class="save fa-solid fa-floppy-disk fa-lg"></i>
        <i class="trash fa-sharp fa-solid fa-trash fa-lg"></i>
    </div>
    <textarea>${text}</textarea>

    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function (){
        note.remove() 
        saveNote()
        } 
     )
    
     note.querySelector(".save").addEventListener(
        "click",
        function (){
        saveNote() 
        } 
     )

     note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNote()
        }
     )

     


    main.appendChild(note);
    saveNote()
     
}



(
    function(){
        const lsnote =JSON.parse(localStorage.getItem("note"));
        if (lsnote === null){
            addNote()
            
        } else{
            lsnote.forEach(
              (lsnote) =>{
                  addNote(lsnote)
              }
            )
      }

    }
)()

