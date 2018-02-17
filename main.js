var pedido = new Array();

function fillProducts(elemFieldset, categ) {
    $(elemFieldset).empty();
    $(elemFieldset).append("<label>"+menu[categ].label+"</label>");
    for (var k in menu[categ].items) {
        $(elemFieldset).append("<input type='radio' name='"+categ+"' id='"+categ+k+"' value='' data-name='"+menu[categ].items[k].nome+"' data-price='"+menu[categ].items[k].preco+"' >");
        $(elemFieldset).append("<label for='"+categ+k+"'>"+menu[categ].items[k].nome+"<span style='float:right;font-weight:400'>R$"+menu[categ].items[k].preco+"</span></label>");
        $("#" + categ + k).checkboxradio();
    }
    $(elemFieldset).controlgroup("refresh");
}

function goToMenu() {
    $.mobile.pageContainer.pagecontainer("change", "#menu", {
        transition: "slide"
    });
}

function goToOrderPage() {
    $.mobile.pageContainer.pagecontainer("change", "#pedido", {
        transition: "slide"
    });
}

/**
 * Build Menu Page
 */
$(document).on("pagebeforecreate", "#menu", function (event) { 
    for (var k in menu) {
        $("#mainmenu").append("<li class='navigate' data-categ='"+k+"' data-page='"+menu[k].page+"'><a href='#'>"+ menu[k].label + "</a></li>");
    }    
});

/**
 * Add Events (Menu Page)
 */
$(document).on("pagecreate", "#menu", function (event) {
    $(".navigate", "#menu").on("click", function (event) {
        $.mobile.pageContainer.pagecontainer("change", $(this).data("page"), {
            categ: $(this).data("categ"),
            transition: "slide"
        });
    });
});

$(document).on("pagecreate", "#listProductPage", function (event) {
    $("#lppAddToOrderBtn").on("click", function (event) {
        if ($("#listProduct :radio:checked").length > 0) {
            pedido.push({
                "nome"  : $("#listProduct :radio:checked").data("name"),
                "preco" : $("#listProduct :radio:checked").data("price")
            });
            goToOrderPage();
        }
    });
});

$(document).on("pagecreate", "#combo", function (event) {
    $("#cAddOrderBtn").on("click", function (event) {
        if ($("#combobebidas :radio:checked").length > 0 && $("#comboacompanhamentos :radio:checked").length) {

            pedido.push({
                "nome": $("#comboVal").data("name"),
                "preco":$("#comboVal").data("price")
            });
            pedido.push({
                "nome": $("#combobebidas :radio:checked").data("name"),
                "preco":0
            });
            pedido.push({
                "nome": $("#comboacompanhamentos :radio:checked").data("name"),
                "preco":0
            });
            goToOrderPage();
        } else {
            console.log("Escolha um acompanhamento e uma bebida");
            $("#popupChoose").popup("open");
        }

    });
});

function handleListProductPage(event, data) {
    var categ = data.options.categ;
    fillProducts("#listProduct", categ);
}

function handleListComboPage(event, data) {
    $("#listComboListView").empty();
        
    var categ = data.options.categ;
    
    if (categ != null && categ != "" && menu[categ] && menu[categ].items) {
        for (var k in menu[categ].items) {
            $("#listComboListView").append("<li class='navigate' data-categ='" + categ + "' data-combo='" + k + "'><a href='#'>"+ menu[categ].items[k].nome + "<p class='ui-li-aside'> R$ "+menu[categ].items[k].preco.toFixed(2)+"</p></a></li>");
        }

        $("#listComboListView").listview('refresh');
    

        $(".navigate", "#listComboPage").on("click", function () {
            $.mobile.pageContainer.pagecontainer("change", "#combo", {
                categ: $(this).data("categ"),
                combo: $(this).data("combo"),
                transition: "slide"
            });
        });
    } else {
        goToMenu();
    }
}

$( document ).on( "pagecontainerbeforechange" , function ( event, data ) {
    // TODO: Tirar a navegação do back e do forward button    

    if ( data.toPage[0].id === "listComboPage" ) {
        handleListComboPage(event, data);
    }

    if ( data.toPage[0].id === "listProductPage" ) {
        handleListProductPage(event, data);
    }    

    if ( data.toPage[0].id === "combo" ) {
        var categ = data.options.categ,
            combo = data.options.combo;

        $("#comboVal").data("name", menu["combos"].items[combo].nome);
        $("#comboVal").data("price", menu["combos"].items[combo].preco);
        
        $("#combobebidas").empty();
        $("#combobebidas").append("<label>Escolha sua bebida:</label>");
        for (var k in menu["bebidas"].items) {
            $("#combobebidas").append("<input type='radio' name='bebidas' id='combobebidas"+k+"' value='' data-name='"+menu["bebidas"].items[k].nome+"' data-price='"+menu["bebidas"].items[k].preco+"' >");
            $("#combobebidas").append("<label for='combobebidas"+k+"'>"+menu["bebidas"].items[k].nome+"</label>");
            $("#combobebidas" + k).checkboxradio();
        }
        $("#combobebidas").controlgroup("refresh");

        $("#comboacompanhamentos").empty();
        $("#comboacompanhamentos").append("<label>Escolha seu acompanhamento:</label>");
        for (var k in menu["acompanhamentos"].items) {
            $("#comboacompanhamentos").append("<input type='radio' name='acompanhamentos' id='comboacompanhamentos"+k+"' value='' data-name='"+menu["acompanhamentos"].items[k].nome+"' data-price='"+menu["acompanhamentos"].items[k].preco+"'>");
            $("#comboacompanhamentos").append("<label for='comboacompanhamentos"+k+"'>"+menu["acompanhamentos"].items[k].nome+"</label>");
            $("#comboacompanhamentos" + k).checkboxradio();
        }
        $("#comboacompanhamentos").controlgroup("refresh");        
    }
});

$(document).on("pagebeforeshow", "#pedido", function (event) {      
    $("#pedidotbl tr").remove();
    $('#enviar').attr("href", "whatsapp://send?text=");
    
    var sum = 0;

    $.each(pedido, function(idx) {        
        $("#pedidotbl tbody")
            .append("<tr><td>"+pedido[idx].nome+"</td><td> R$"+pedido[idx].preco.toFixed(2)+"</td></tr>");
        sum = sum + pedido[idx].preco;
        var _href = $('#enviar').attr("href");
        $('#enviar').attr("href", _href + "Nome: "+ pedido[idx].nome +" Preco: R$"+ pedido[idx].preco.toFixed(2) + "%0A");
    });

    $("#pedidotbl tfoot").append("<tr><td> Total: R$"+sum.toFixed(2)+"<tr><td>");

    $("#pedidotbl").trigger('create');
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