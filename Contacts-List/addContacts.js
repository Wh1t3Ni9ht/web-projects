function addContacts() {
    var name, email, number;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    number = document.getElementById('number').value;
    // Create contact Object.
    contactsObject = {
        Name: name.charAt(0).toUpperCase() + name.slice(1),
        Email: email,
        Number: number
    };
    var contactsArrObject = [];
    // Put contact object inside "contactsArrObject" Array.
    contactsArrObject.push(contactsObject);
    // Check if contacts Key exist in localStorage.
    if (localStorage.getItem('contacts') == null) {
        // Create "Contacts Key" & Add contact object to localStorage as a value of contacts.
        localStorage.setItem('contacts', JSON.stringify(contactsArrObject));
    }
    else {
        var storedContacts = JSON.parse(localStorage.getItem('contacts'));
        storedContacts.push(contactsObject);
        // if contacts exists, Add new contact object.
        localStorage.setItem('contacts', JSON.stringify(storedContacts));
    }
}
