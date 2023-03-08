/********* VARIABLES ************/

let unreadNote = document.querySelector("h1 span");     //unread notifications position
let markAll = document.querySelector("h2");     // mark all as read
let comments = document.querySelectorAll(".comment");   //array comments
let unreadNoteCount = document.getElementsByClassName("unread").length; //number of unread notifications
let unreadMark = document.querySelectorAll(".sign"); //red poin

/********* CALLBACK FUNCTION ************/

function noteCheck_fn (){
    unreadNoteCount = document.getElementsByClassName("unread").length;
    
    if (unreadNoteCount > 0){
        unreadNote.classList.add("number");
        unreadNote.textContent = unreadNoteCount; 

    } else {
        unreadNote.textContent = "";
        unreadNote.classList.remove("number");

    }
}
//THE FUNC CHECK IF THERE ARE UNREAD COMMENTS (FROM CLASS "UNREAD" IN HTML) AND WRITE THE NUMBER AT THE TOP AND APPLY THE STYLE

/********* EVENTS ************/

document.addEventListener("load", noteCheck_fn());  //CHECK THE UNREAD COMMENTS WHEN THE PAGE HAS LOADED


markAll.addEventListener("click",  () => {      //CLICKING ON IT, REMOVE THE STYLE, THE RED POINT AND THE NUMBER OF THE UNREAD COMMENTS
    comments.forEach(item => item.classList.remove("unread"));
    unreadMark.forEach(item => item.classList.remove("unreadSign"));
    noteCheck_fn();
    
}
);

for (let i = 0; i < unreadNoteCount; i++){  //PUT AS "READ" A SINGLE COMMENT WHENK CLICKING ON IT AND DECREASE THE NUMBER OF UNREAD COMMENTS
    comments[i].addEventListener("click", () => {
        comments[i].classList.remove("unread");
        unreadMark[i].classList.remove("unreadSign");
        noteCheck_fn();
    })
}


