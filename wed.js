

var youtubeApiURL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    key: 'AIzaSyASKTdVhfhbiBkbUPi92NOLGmglcIlbu3o',
    part: 'snippet',
    maxResults: 4,
    pageToken: ""
  }
  
  $.getJSON(youtubeApiURL, query, callback);
}




function displayYouTubeData(data) {
    var id = '';
    var resultElement = '';
    if (data.items) {
      var newArray = data.items.map(function(item, index) {
          var currentVid = item.snippet.thumbnails.medium.url;
          var videoId = item.id.videoId;
          
          return `<li> <iframe width="560" height="315"  src= "https://www.youtube.com/embed/${videoId}" target="_blank"> </iframe>    </li>`; 
      });
      $('.js-search-results').html(newArray);
    }
}

// function nextPage(data) {
//   // var next = data.nextPageToken;  
//   console.log(data);
// };


function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeData);
  });
}

$(function(){watchSubmit()});








// var videoId = item.id.videoId;
//             var currentVid = item.snippet.thumbnails.default.url;
//             var displayHtml = `<li> <a href= "https://www.youtube.com/embed/${videoId}" target="_blank">  <img src= '${currentVid}'/> hey </a></li>`;






