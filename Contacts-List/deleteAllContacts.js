function deleteAllContacts() {
    if (confirm('Are you sure you want to delete all contacts?')) {
        let storedContacts = JSON.parse(localStorage.getItem('contacts'));
        for (let i = 0; i < storedContacts.length; i++) {
            storedContacts.splice(i);
        }
        localStorage.setItem('contacts', JSON.stringify(storedContacts));
        displayContacts();
    }
}
