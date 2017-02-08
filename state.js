
var state = {
  videoId: [],
  currentVidUrl: [],
  nextPageToken: "",
  totalResults: []
};

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
  if (data){
    // state.videoId.push(data.items.id);
    console.log(data.items[]);
   
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






