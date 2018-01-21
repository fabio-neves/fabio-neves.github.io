$( document ).on( "pagecreate", "#list", function( event ) {
    

    $('.add').on("click", function () {
        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + $(this).text()  + "%0A");
        $('#pedido-list').append("<li>"+$(this).text()+"</li>");
        $('#addedToRequets').popup( "open" );
    });
    
  });