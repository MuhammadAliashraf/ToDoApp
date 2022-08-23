var input =document.getElementById('input')
// console.log(input.va)/
var list =document.getElementById('list')

function add(){
    // var li =document.createElement('li');
    // var litext =document.createTextNode(input.value);
    // li.appendChild(litext)
    // list.appendChild(li);

    var li  = document.createElement('li');
    var litext = document.createTextNode(input.value);
    li.appendChild(litext)
    list.appendChild(li)

    // Edit Button In list :
    var editbtn =document.createElement('button')
    var editbtntext=document.createTextNode('Edit item ');
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
    
    // Function on Edit button
    editbtn.setAttribute("onclick" , "edit(this)")
    editbtn.className="textSussecs"
    // Button completed

    // Delete Button In list items:
    var deletebtn =document.createElement('button')
    var deletebtntext=document.createTextNode('Delete item ');
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    // Function on Delttn button
    deletebtn.setAttribute("onclick" , "Delete(this)")
    deletebtn.clasName="textdanger"

    input.value="";
}
function edit(q){
    var edittext =prompt("Edit value",q.parentNode.firstChild.nodeValue)  
    q.parentNode.firstChild.nodeValue = edittext

}
function Delete(w){
    w.parentNode.remove();
    
}
function deleteall(){
    list.remove();
}