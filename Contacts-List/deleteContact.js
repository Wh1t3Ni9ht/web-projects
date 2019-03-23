function deleteContact(i) {
    let storedContacts = JSON.parse(localStorage.getItem('contacts'));
    storedContacts.splice(i, 1);
    localStorage.setItem('contacts', JSON.stringify(storedContacts));
    displayContacts();
}
