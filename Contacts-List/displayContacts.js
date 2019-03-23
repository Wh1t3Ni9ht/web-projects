function displayContacts() {
    let alphabet, lettersContainer, storedContacts;
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    lettersContainer = document.getElementById('lettersContainer');
    storedContacts = JSON.parse(localStorage.getItem('contacts'));
    lettersContainer.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
        lettersContainer.innerHTML += '<div data-aos="fade-up" data-aos-duration="500" style="display:none;" id="letter' + alphabet[i] + '">' + '<h1>' + alphabet[i] + '</h1>' + '</div>';
    }
    for (var i = 0; i < storedContacts.length; i++) {
        for (var x = 0; x < alphabet.length; x++) {
            if (storedContacts[i].Name.charAt(0) == alphabet[x]) {
                let letterDiv = document.getElementById('letter' + alphabet[x]);
                letterDiv.innerHTML += '<li data-aos="fade-up" data-aos-duration="200" class="list-group-item name">' + '<a onclick="modalDisplay(event)" id="' + i + '" data-toggle="modal" data-target="#contactInfo">' + storedContacts[i].Name + '</a>' +'<div class="float">'+'<button class="btn btn-danger" onclick="deleteContact(' + i + ')">' + 'Delete' + '</button>' + '</div>'+ '</li>';
                document.getElementById('letter' + alphabet[x]).style.display = '';
            }
        }
    }
}
