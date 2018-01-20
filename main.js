$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox"').on("click", function () {
        $('#meupedido').attr("href", _href + $(this).next("label").html());
    });
    
  });