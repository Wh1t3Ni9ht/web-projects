document.getElementById('search').addEventListener('input', () => {
    let search, name;
    search = document.getElementById('search').value.toUpperCase();
    name = document.getElementsByClassName('name');
    for (let i = 0; i < name.length; i++) {
       if (name[i].innerHTML.toUpperCase().indexOf(search) == -1) {
           name[i].style.display = 'none';
       }else{
           name[i].style.display = '';
       }
    }
})