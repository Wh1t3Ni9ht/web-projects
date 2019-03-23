function editModal (e) {
    let editNameDiv, editEmailDiv, editNumberDiv, storedContacts, index, editBtnDiv;
    editNameDiv = document.getElementById('editNameDiv');
    editEmailDiv = document.getElementById('editEmailDiv');
    editNumberDiv = document.getElementById('editNumberDiv');
    storedContacts = JSON.parse(localStorage.getItem("contacts"));
    index = parseInt(e.target.id);
    editNameDiv.innerHTML = '<input class="input" id="editName" type="text" value="'+storedContacts[index].Name+'">'+'<br />'+'<br />';
    editEmailDiv.innerHTML = '<input class="input" id="editEmail" type="text" value="'+storedContacts[index].Email+'">'+'<br />'+'<br />';
    editNumberDiv.innerHTML = '<input class="input" id="editNumber" type="number" value="'+storedContacts[index].Number+'">'+'<br />'+'<br />';
    editBtnDiv = document.getElementById('editBtnDiv');
    editBtnDiv.innerHTML = '<button id="'+index+'" type="button" class="button is-success" onclick="editContact(event)">'+'Save'+'</button';
}