const inputBox = document.getElementById('input-box');
const ListContainer = document.getElementById('list-container');
document.getElementById('btn').addEventListener('click',addtask)
function addtask(){
   if (inputBox.value === '' ) {
      alert("You must Write something")
   } else {
      let li = document.createElement('li')
      li.innerText = inputBox.value;
      ListContainer.appendChild(li);
      let span = document.createElement('span');
      span.setAttribute("id", "icon");
      span.innerHTML = "X"
      li.appendChild(span)
      span.addEventListener("click",(e)=>{
        const parentNode = span.parentNode
        parentNode.remove()
   })
      
   }
   inputBox.value = ''
}

