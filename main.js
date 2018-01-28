var pedido = new Array();

/**
 * Build Menu Page
 */
$(document).on("pagebeforecreate", "#menu", function (event) { 
    for (var k in menu) {
        $("#mainmenu").append("<li class='navigate' data-categ='"+k+"'>"+ menu[k].label + "</li>");
    }    
});

/**
 * Add Events (Menu Page)
 */
$(document).on("pagecreate", "#menu", function (event) {
    $(".navigate", "#menu").on("click", function (event) {
        $.mobile.pageContainer.pagecontainer("change", "#categoria", {
            categ: $(this).data("categ"),
            transition: "slide"
        });
    });
});

$( document ).on( "pagecontainerbeforechange" , function ( event, data ) {
    // TODO: Tirar a navegação do back e do forward button

    if ( data.toPage[0].id === "categoria" ) {
        $("#listaproduto").empty();

        var categ = data.options.categ;
        if (categ != null && categ != "" && menu[categ] && menu[categ].items) {
            for (var k in menu[categ].items) {
                $("#listaproduto").append("<li class='navigate' data-categ='" + categ + "' data-combo='" + k + "'>"+ menu[categ].items[k].nome + "</li>");
            }

            $("#listaproduto").listview('refresh');
        }

        $(".navigate", "#categoria").on("click", function () {
            $.mobile.pageContainer.pagecontainer("change", "#combo", {
                categ: $(this).data("categ"),
                combo: $(this).data("combo"),
                transition: "slide"
            });
        });
    }


    if ( data.toPage[0].id === "combo" ) {
        var categ = data.options.categ,
            combo = data.options.combo;
        
        $("#bebidas").empty();
        $("#acompanhamentos").empty();

        for (var k in menu["bebida"].items) {
            $("#bebidas").append("<input type='radio' name='bebidas' id='bebidas"+k+"' value='' >");
            $("#bebidas").append("<label for='bebidas"+k+"'>"+menu["bebida"].items[k].nome+"</label>");
            $("#bebidas" + k).checkboxradio();
        }
        $("#bebidas").controlgroup("refresh");
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