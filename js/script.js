// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://anime-quotes1.p.rapidapi.com/api/quotes/anime?title=One%20Piece",
// 	"method": "GET",
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


$.ajax({
    url:'https://anime-quotes1.p.rapidapi.com/api/quotes/anime?title=One%20Piece',
    "headers": {
		"X-RapidAPI-Key": "2eba11bd42msh3cdfe07ccc61a1cp13ef6bjsn84cf6ca7c03a",
		"X-RapidAPI-Host": "anime-quotes1.p.rapidapi.com"
	}
}).then(
    (data) => {
     console.log(data);
    }).catch(
    (error) => {
     console.log('bad request', error);
    })