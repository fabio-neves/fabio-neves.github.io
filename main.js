$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox').on("click", function () {
        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + $(this).parent().find('span').text() + "HELLO" + "%0A");
    });
    
  });