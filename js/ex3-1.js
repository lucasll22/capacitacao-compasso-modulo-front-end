console.log("teste");

$(function() {
    console.log("pag carregada");

    //var txt = $('#txtNome');

    //txt.val("novo valor do campo");

    /**
    setInterval(function(){
        
        txt.toggle();

        
        if(txt.is(":visible"))
            txt.hide('slow');
        else
            txt.show('slow');
         


    
    }, 2000);

    */
    var divProdutos = $('#produtos');
    var divFrmCadastro = $('#divFormCadastro');
    var msgSucesso = $(".msgSucesso");

    var txtNomeProduto = divFrmCadastro.find("#txtNome");
    var txtPrecoProduto = divFrmCadastro.find("#txtPreco");


    var arProdutos = [
        {
            "nome" : "produto 1",
            "valor" : 10.50
        },
        {
            "nome" : "produto 2",
            "valor" : 11.50
        },
        {
            "nome" : "produto 3",
            "valor" : 12.50
        }
    ];
    console.log(arProdutos);
    function renderizaProdutos()
    {
        //limpar os elementos
        divProdutos.empty();

        $.each(arProdutos, function(key, obj){
            console.log(obj.nome);
            
            //criar uma nova div
            var div = $("<div>");
            var h1 = $("<h1>");
            var p = $("<p>");

            //adicionar o html nessa div
            h1.html(obj.nome);
            //adicionar preço no parágrafo
            p.html(obj.valor);

            //adiciona h1 dentro da div
            div.append(h1);
            //adicionar paragrafo na div
            div.append(p);

            //adiciona o objeto div no container divProdutos
            divProdutos.append(div);

        });
    };
    renderizaProdutos();
    renderizaProdutos();
    
    divFrmCadastro.find(`.jsFrmCadastro`).submit(function(e){
        e.preventDefault();
        console.log(txtNomeProduto.val());
        console.log(txtPrecoProduto.val());

        arProdutos.push(
            {
                "nome" : txtNomeProduto.val(),
                "valor" : txtPrecoProduto.val()
            }
        );

        //reseta o formulario
        renderizaProdutos();

        $(this)[0].reset();

        console.log(msgSucesso);

        //TESTE -- NÃO FUNCIONA
        //msgSucesso.show();
        //setTimeout(msgSucesso.hide(), 5000);
        
        msgSucesso.removeClass("hide");
        setTimeout (function(){msgSucesso.addClass("hide")}, 5000);
        window.scrollTo(0, document.body.scrollHeight);

        console.log(document.body.scrollHeight);

        //TESTE - POR HIDE E SHOW   
        //msgSucesso.show();
        //setTimeout(function(){msgSucesso.hide()}, 5000);

    });

    console.log(arProdutos);


});