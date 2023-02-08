$.get('https://swapi-api.hbtn.io/api/films/?format=json', function(data) {
    for (const films of data.results) {
	$('#list_movies').append(`<li>${films.title}</li>`);
    }
});
