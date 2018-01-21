$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox').on("click", function () {
        var that = $(this);

        var item = that.val();

        if(that.is(":checked")) {

        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + item  + "%0A");
        $('#pedido-list').append("<li>"+item+"</li>");
        } else {
            $('#meupedido').find('li').each(function(){
                var itempedido = $(this);

                if(itempedido.text() == item){
                    itempedido.remove();
                }
            });
        }
    });
    
  });