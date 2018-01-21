var pedido = new Array();

$( document ).on( "pagebeforeshow", "#view", function( event ) {  
console.log("pagebeforeshow");

} );

$( document ).on( "pagebeforeload", "#view", function( event ) {  
    console.log("pagebeforeload");
    
    } );

$( document ).on( "pagecreate", "#list", function( event ) {
    

    $(':checkbox').on("click", function () {
        var that = $(this);

        var item = that.val();

        if(that.is(":checked")) {
            var _href = $('#meupedido').attr("href");
            $('#meupedido').attr("href", _href + item  + "%0A");
            pedido.push(item);
        } else {
            var idx = pedido.indexOf(search_term); 
            if (idx !== -1) {
                pedido.splice(idx, 1);
            }
        }
    });
    
  });