$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox').on("click", function () {
        var that = $(this);

        var item = that.val();

        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + item  + "%0A");
        $('#pedido-list').append("<li>"+item+"</li>");
    });
    
  });