var pedido = new Array();

/**
 * Build Menu Page
 */
$(document).on("pagebeforecreate", "#menu", function (event) { 
    for (var k in menu) {
        $("#mainmenu").append("<li class='navigate' data-menu='"+k+"'>"+ menu[k].label + "</li>");
    }    
});

/**
 * Add Events (Menu Page)
 */
$(document).on("pagecreate", "#menu", function (event) {
    $(".navigate", "#menu").on("click", function (event) {
        event.preventDefault();
        $.mobile.navigate( "#categoria", {
            menu: $(this).data("menu")
        });
        // $.mobile.pageContainer.pagecontainer("change", "#categoria", {
        //     menu: $(this).data("menu"),
        //     transition: "slide"
        // });
    });
});

$( document ).on( "pagecontainerbeforechange" , function ( event, data ) {
    if ( data.toPage[0].id === "categoria" ) {
        $("#listaproduto").empty();

        var categ = data.options.menu;
        if (categ != null && categ != "" && menu[categ] && menu[categ].items) {
            for (var k in menu[categ].items) {
                $("#listaproduto").append("<li class='navigate' data-categ='"+categ+"' data-combo='"+k+"'>"+ menu[categ].items[k].nome + "</li>");
            }
            $("#listaproduto").listview('refresh');
        }

        $(".navigate","#categoria").on("click", function () {
            console.log('click');
            $.mobile.pageContainer.pagecontainer("change", "#combo", {
                categ: $(this).data("categ"),
                combo: $(this).data("combo"),
                transition: "slide"
            });
        });
    }
});


$(window).on( "navigate", function( event, data ){
    console.log(data);
    console.log(event);
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