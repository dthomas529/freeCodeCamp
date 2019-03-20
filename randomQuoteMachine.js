
/* quotebox: use objects with properties (quote, author)
random quote selection: use Mozilla Math Library ( Math.random) */
$(document).ready(function() {
  function getQuote() {
    
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";     
    $.getJSON(url, function(data) {
      $("#quote").html('"' +data.quoteText+ '"');
      $("#author").html("- "+data.quoteAuthor);
    });    
    };
              
  $("#getquote").on("click", function() {
    getQuote();
  });
    
  });
  
