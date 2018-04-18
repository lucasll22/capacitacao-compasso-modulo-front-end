
//Variáveis para modal
var formCep = $("#formCep");
var formCepInput = formCep.find(" .cep");
var formCepSubmit = formCep.find(".submitCep");
$(function(){

    //iniciando referências aos campos
    var txtBusca = $(".form-search .search");
    var buscaAdd = $(".form-search-help");
    var slickObj = $(".slick");
    var newsletter = $(".newsletter .newsletter-form .newsletter-input");



    //Inicialização de uma modal
    $("#modal").iziModal();

    $('#modal').iziModal('open');

    //Slicker
    slickObj.slick( {
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        centerMode: true
        
    } );

    //Função para controlar o que aparece abaixo do campo de pesquisa
    function menuExtra(){
        
        
        if(txtBusca.val()  == "")
        {
           buscaAdd.html("");
           
           $.each(produtos, function(key, obj) {
               buscaAdd.append("<div id = 'search-help-sug'>" + obj.produto + "</div>");
           });
        }
        else
        {
            buscaAdd.html("");
            
            $.each(produtos, function(key, obj) {
                buscaAdd.append("<div id = 'search-help-box'>" + obj.produto +
                " - R$" + obj.preco + "<a href='#'> Mais detalhes</a>" + "</div>");
            });
        }
    }

    //Array de produtos
    var produtos = [
        {
            "produto" : "produto 1",
            "preco" : 10.0,
            "descr" : "descrição"
        },
        {
            "produto" : "produto 2",
            "preco" : 11.0,
            "descr" : "descrição"
        },
        {
            "produto" : "produto 3",
            "preco" : 12.0,
            "descr" : "descrição"
        },
        {
            "produto" : "produto 4",
            "preco" : 14.0,
            "descr" : "descrição"
        },
        {
            "produto" : "produto 5",
            "preco" : 9.0,
            "descr" : "descrição"
        },
        {
            "produto" : "produto 6",
            "preco" : 20.0,
            "descr" : "descrição"
        }
    ]

    //Controles para o menu
    txtBusca.focus(function(){
        menuExtra();
        buscaAdd.removeClass("hide");
    });

    txtBusca.blur(function(){
        if(txtBusca.val()  == "")
        
          buscaAdd.addClass("hide");



    });

    txtBusca.on('input',function(e){
        menuExtra();
    });

    //Controles para newsletter
    newsletter.bind("keydown", function(e) {
        if(e.keyCode == 13)
        {
            //validação dos 3 caracteres
            if(newsletter.val().length < 3)
            {
                newsletter.css("background-color", "#ffcccc");
                alert("Deve conter mais de 3 digitos");
                return false;
            }
            //Validação do email via expressão regular
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if(reg.test(newsletter.val()) == false)
            {
                newsletter.css("background-color", "#ffcccc");     
                alert("formato de email inválido");
                return false;
            }
            newsletter.css("background-color", "#ccffcc");      
            alert("e-mail cadastrado");
            return false;
        }
    })

    //funções para a modal

})

function submitModal() {
    var config = {
        url : "https://viacep.com.br/ws/" + "99970000" +"/json"
    };
    console.log(formCepInput.val());

    $.ajax(config).done(function (data) {
        console.log(data);

        alert(data.localidade + " - " + data.uf);

    });
}