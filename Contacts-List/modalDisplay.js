function modalDisplay(e) {
    let storedContacts, i, modal;
    storedContacts = JSON.parse(localStorage.getItem('contacts'));
    i = e.target.id;
    modal = document.getElementById('modal');
    modal.innerHTML = '<div class="modal fade" id="contactInfo" tabindex="-1" role="dialog" aria-labelledby="contactInfo" aria-hidden="true">' +
        '<div class="modal-dialog modal-dialog-centered" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="contactInfo">' + 'Contact Information' + '</h5>' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' + '<span aria-hidden="true">' + '&times;' + '</span>' + '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div id="editNameDiv">' +'<b>'+'Name: '+'</b>'+ storedContacts[i].Name + '</div>' +
        '<div id="editEmailDiv">' +'<b>'+'Email: '+'</b>'+  storedContacts[i].Email + '</div>' +
        '<div id="editNumberDiv">' +'<b>'+'Phone number: '+'</b>'+  storedContacts[i].Number + '</div>' +
        '<div class="modal-footer" id="editBtnDiv">'+'<button onclick="editModal(event)" class="button is-warning" id="'+i+'">'+'Edit'+'</button>'+'</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
}
