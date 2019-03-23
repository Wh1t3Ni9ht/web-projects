document.getElementById('myForm').addEventListener('submit', saveBookmarks);


function saveBookmarks(e){
	var userWebsite = document.getElementById('siteName').value;
	var userUrl = document.getElementById('siteUrl').value;
	var Bookmarks = {
			name: userWebsite,
			url: userUrl
	}
	console.log(Bookmarks)
	if(localStorage.getItem('Bookmarks') === null){
		var array = [];

		array.push(Bookmarks);
		localStorage.setItem('Bookmarks', JSON.stringify(array));
	}else{
		var bookmarks = JSON.parse(localStorage.getItem('Bookmarks'))
		console.log(typeof(bookmarks))
		bookmarks.push(Bookmarks);
		localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
	}

	displayBookmarks();
	e.preventDefault();
}

function displayBookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));
	var results = document.getElementById('results');

	results.innerHTML = "";

	for(var i = 0; i < bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url

		results.innerHTML += '<div>'+
                                  '<h3>'+name+
                                  '<a class="btn btn-success mr-1 ml-3" target="_blank" href="'+url+'"> Visit</a>' +
                                  '<a onclick="deleteBookmarks(\''+url+'\')"class="btn btn-danger" href="#">Delete</a>' +
                                  '</h3>'+
                                  '</div>';
	}
}

function deleteBookmarks(url){
	var bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));

	for(i = 0; i < bookmarks.length; i++){
		if(bookmarks[i].url == url){
			bookmarks.splice(i, 1);
		}
	}
	localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
	displayBookmarks();
}