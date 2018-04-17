$(function () {
    console.log("inicio");

    form = $("#formCep");
    txtCep = form.find("#cep");
    txtBairro = form.find("#bairro");
    txtLocalidade = form.find("#localidade");
    txtUf = form.find("#uf");
    txtLogradouro = form.find("#logradouro");

    txtPesquisando = form.find(".pesquisando");
    txtPesquisando = form.find(".pesquisando");

    slicker = $(".slider");
    console.log(slicker);

    slicker.slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        }
    );

    txtCep.mask("99999-999");

    console.log(txtPesquisando);

    console.log(txtCep);

    txtCep.bind('keydown', function (e) {
        
        //detectar tecla enter
        if (e.keyCode == 13) {
            e.preventDefault();
        
            //detectar 8 caracteres
            if(txtCep.val().length != 9)
            {
                alert("cep inválido");
                txtCep.val("");
                return false;
            }
            
            
            //url ajax
            var config = {
                url : "https://viacep.com.br/ws/" + txtCep.val().replace('-', "") +"/json"
            };

            console.log(config);

            //mostrar texto pesquisando
            txtPesquisando.removeClass("hide");

            $.ajax(config).done(function (data) {
                console.log(data);

                //preencher os cmapos
                txtLogradouro.val(data.logradouro);
                txtUf.val(data.uf);
                txtLocalidade.val(data.localidade);
                txtBairro.val(data.bairro);
            }).always(function(){
                //esconder texto pesquisando
                txtPesquisando.addClass("hide");
                
            });
        }


    });
    
    form.submit(function() {
        console.log("sub");
        
        //TESTE botão submit, não usado
        /**
        if(txtNome.val().length != 8)
        {
            alert("cep inválido");
            return false;
        }
         */
    })
})