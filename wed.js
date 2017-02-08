var OMDB_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  console.log(searchTerm);
  var query = {
    q: searchTerm,
    key: 'AIzaSyASKTdVhfhbiBkbUPi92NOLGmglcIlbu3o',
    part: 'snippet'
  }
  
  $.getJSON(OMDB_BASE_URL, query, callback);
}



function displayOMDBSearchData(data) {
var list= []
    for (var i = 0; i < data.items.length; i++) {
        
        var thumbnails = data.items[i].snippet.thumbnails.medium.url
        list.push(thumbnails);
        
    }
    $('.js-search-results').html(`<ul> <li> ${list} </li> </ul>`);
      
}









function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});




// function renderItem(item, itemId, itemTemplate, itemDataAttr) {
//     var element = $(itemTemplate);
//     element.find('.js-shopping-item').text(item.displayName);
//     if (item.checkedOff) {
//         element.find('.js-shopping-item').addClass('shopping-item__checked');
//     }
//     element.find('.js-shopping-item-toggle')
//     element.attr(itemDataAttr, itemId);
//     return element;
// }

// function renderList(state, listElement, itemDataAttr) {
//     var itemsHTML = state.items.map(
//         function(item, index) {
//             return renderItem(item, index, listItemTemplate, itemDataAttr);
//         });
//     listElement.html(itemsHTML);
// }





// $('.js-search-results').find('img').attr('src', thumbnails);



