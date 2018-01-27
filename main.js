var pedido = new Array();

/**
 * Build Menu Page
 */
$(document).on("pagebeforecreate", "#menu", function (event) { 
    for (var k in menu) {
        $("#mainmenu").append("<li>"+ menu[k].label + "</li>");
    }    
});

$(document).on("pagebeforeshow", "#view", function (event) {      
    $("#pedido-list").empty();
    $('#meupedido').attr("href", "whatsapp://send?text=");    

    $.each(pedido, function(idx) {        
        $("#pedido-list").append("<li>"+ pedido[idx]+ "</li>");
        var _href = $('#meupedido').attr("href");
        $('#meupedido').attr("href", _href + pedido[idx]  + "%0A");
    });

    $("#pedido-list").listview('refresh');
});

$(document).on("pagecreate", "#list", function (event) {
    $(':checkbox').on("click", function () {
        var that = $(this);
        var item = that.val();

        if (that.is(":checked")) {
            pedido.push(item);
        } else {
            var idx = pedido.indexOf(item); 

            if (idx !== -1) {
                pedido.splice(idx, 1);
            }
        }
    });    
});