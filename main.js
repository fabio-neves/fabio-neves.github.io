$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox').on("click", function () {
        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + $(this).next("label").html());
    });
    
  });