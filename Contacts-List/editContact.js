function editContact(e) {
    let nameEdit, emailEdit, phoneEdit, storedContacts, i;
    editName = document.getElementById('editName').value;
    editEmail = document.getElementById('editEmail').value;
    editNumber = document.getElementById('editNumber').value;
    storedContacts = JSON.parse(localStorage.getItem('contacts'));
    i = e.target.id;
    storedContacts[i].Name = editName.charAt(0).toUpperCase()+editName.slice(1);
    storedContacts[i].Email = editEmail;
    storedContacts[i].Number = editNumber;
    localStorage.setItem('contacts', JSON.stringify(storedContacts));
    displayContacts();
}