var OMDB_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  console.log(searchTerm);
  var query = {
    q: 'searchTerm',
    key: 'AIzaSyASKTdVhfhbiBkbUPi92NOLGmglcIlbu3o',
    part: 'snippet'
  }
  
  $.getJSON(OMDB_BASE_URL, query, callback);
}




function displayOMDBSearchData(data) {

  for (var i = 0; i < data.items.length; i++) {
   console.log(data.items[i].snippet.thumbnails.medium.url);
  }
   

}





function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});

