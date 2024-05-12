document.querySelector("#btn2")?.addEventListener("click", () => {
   window.location.href = "todolist2.html";
})

var adds = function () {
   var names = document.querySelector(".one");
   var age = document.querySelector(".ones");
   var course = document.querySelector(".onesss");
   var email = document.querySelector(".onessss");
   var table = document.getElementById("table");
   let male = document.getElementById("male");
   let female = document.getElementById("female");

   let gender = " ";
   if (male.checked) {
      gender = male.value
   } else if (female.checked) {
      gender = 'female'
   }
   var newRow = `
   <tr>
      <td>${names.value}</td>
      <td>${age.value}</td>
      <td>${gender}</td>
      <td>${course.value}</td>
      <td>${email.value}</td>
      <td style="background-color:red" onclick="del(event)">Delete </td>
   </tr>`
   table.innerHTML += newRow;
   names.value = ""
   age.value = ""
   email.value = ""
};
function del(event) {
   event.parentElement.remove();
};
window.onkeyup = function (e) {
   if (e.key == 'Enter') {
      add()
   }
}
//page 2
var overlay = document.querySelector(".overlay");
var parentContainer = document.getElementById("parent-container");
var add_update = document.getElementById("add");
var container = document.querySelector(".container");
let symbol = document.querySelector(".symbol");
var popupbox = document.querySelector(".popupbox");
var cancel = document.querySelector("#cancel");
let updateParentElement ;

document.querySelector("#back")?.addEventListener("click", () => {
   window.location.href="index.html";
})


 add_update?.addEventListener("click", function () {
   var booktitle = document.querySelector("#booktitle");
   var bookauthor = document.getElementById("bookauthor");
   var textarea = document.getElementById("textarea");

   if(add_update.innerHTML == 'Update'){
      updateParentElement.querySelector('h3').innerHTML =  booktitle.value;
    updateParentElement.querySelector('h4').innerHTML =  bookauthor.value
    updateParentElement.querySelector('p').innerHTML =  textarea.value

    popupbox.style.display = "none";
    overlay.style.display = "none";

   return;
   }
   
   if (bookauthor.value.trim() == "" || booktitle.value.trim() == "" || textarea.value.trim() == "") {
      return;
  }
 

      var div = document.createElement('div')
      div.setAttribute('class', 'container')
      
      div.innerHTML = `<h3  style="color: rgb(224, 48, 48);">${booktitle.value}</h3><h4>${bookauthor.value}</h4><p>${textarea.value}</p><button onclick=del(event)  style="border-radius: 40px; background-color: rgb(212, 27, 27); border: none; height: 20px; width: 80px; margin-top: 5px;" >Delete</button ><button class='upd' onclick=handleUpdate(event)>Update</button>`
      
      parentContainer.append(div);
      
      popupbox.style.display = "none";
      overlay.style.display = "none";
   
})

symbol?.addEventListener("click", function () {
   add_update.innerHTML = 'Add';
  

   booktitle.value='';
   bookauthor.value='';
   textarea.value='';
    popupbox.style.display = "block";
   overlay.style.display = "block";
})
cancel?.addEventListener("click", function () {
   popupbox.style.display = "none";
   overlay.style.display = "none";
   booktitle.value='';
   bookauthor.value='';
   textarea.value='';
})

function handleUpdate(e){
   popupbox.style.display = "block";
   overlay.style.display = "block";

   
   updateParentElement =  e.target.parentElement

   add_update.innerHTML = 'Update';
   
   booktitle.value= updateParentElement.querySelector('h3').innerHTML;
   bookauthor.value= updateParentElement.querySelector('h4').innerHTML;
   textarea.value= updateParentElement.querySelector('p').innerHTML;
}

function del(e) {
   e.target.parentElement.remove()
}
let creative = document.querySelectorAll(".creative");





