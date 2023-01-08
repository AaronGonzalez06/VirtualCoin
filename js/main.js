$(document).ready(function(){
    var arr_select= [];
    var pruena;



    var heightPage = $(document).height();

$(window).scroll(function(){
    if(($(window).scrollTop() + $(window).height()) == heightPage) {
            alert("final de la página");
    }      
});




function cambios(){

    function todo (categoria) {
        var url = window.location.href;
        if (url.indexOf("categoria=" + categoria) != -1){
            return true;
        }
     };

     var url= "http://localhost/VirtualCoin/seccion.php?seccion=";

     if ( window.location.href == url+"Bitcoin" || todo("Bitcoin")){
        localStorage.change= "Bitcoin";
    }
     else if ( window.location.href == url+"Ehtereun" || todo("Ehtereun")){   
        localStorage.change= "Ehtereun"; 
    }
    else if ( window.location.href == url+"litecoin" || todo("litecoin")){   
        localStorage.change= "litecoin"; 
    }
    else if ( window.location.href == url+"Solana" || todo("Solana")){   
        localStorage.change= "Solana"; 
    }
    else if ( window.location.href == url+"cardano" || todo("cardano")){   
        localStorage.change= "cardano"; 
    }
     else if ( window.location.href == url+"Noticias" || todo("Noticias")){   
        localStorage.change= "Noticias"; 
    }
    else if ( window.location.href == url+"predicciones" || todo("predicciones")){   
        localStorage.change= "predicciones"; 
    }
    else if ( window.location.href == url+"JuegosNFT" || todo("JuegosNFT")){   
        localStorage.change= "JuegosNFT"; 
    }
    else if ( window.location.href == url+"NFT" || todo("NFT")){   
        localStorage.change= "NFT"; 
    }        
    else {
        localStorage.change= "defecto"; 
    }


    if (localStorage.change == 'Bitcoin'){
        $('#cambio').attr('href', './assets/css/cambios/1.css');

      }

    else if ((localStorage.change == 'Ehtereun')) {
        $('#cambio').attr('href', './assets/css/cambios/2.css');

        
    }
    else if ( (localStorage.change == 'litecoin') ) {
        $('#cambio').attr('href', './assets/css/cambios/3.css');

        
    }        
    else if (localStorage.change == 'Solana') {
        $('#cambio').attr('href', './assets/css/cambios/4.css');

        
    }
    else if (localStorage.change == 'cardano') {
        $('#cambio').attr('href', './assets/css/cambios/5.css');
        
    } 

    else if (localStorage.change == 'Noticias') {
        $('#cambio').attr('href', './assets/css/cambios/6.css');

        
    }

    else if (localStorage.change == 'predicciones') {
        $('#cambio').attr('href', './assets/css/cambios/7.css');

        
    }

    else if (localStorage.change == 'JuegosNFT') {
        $('#cambio').attr('href', './assets/css/cambios/8.css');

        
    }

    else if (localStorage.change == 'NFT') {
        $('#cambio').attr('href', './assets/css/cambios/9.css');

        
    }
                              
    else if (localStorage.change == 'defecto') {
        $('#cambio').attr('href', '');
    }

}



    window.onload = cambios;






     //http://localhost/VirtualCoin/seccion.php?seccion=

    //slider

    $(".img_1").show();
    $(".img_2").hide();
    $(".img_3").hide();
    $(".img_4").hide();
    $(".img_5").hide();
 

    $('.parr_1').click(function(){
        $(".img_1").show();
        $(".img_2").hide();
        $(".img_3").hide();
        $(".img_4").hide();
        $(".img_5").hide();
    })

    $('.parr_2').click(function(){
        $(".img_1").hide();
        $(".img_2").show();
        $(".img_3").hide();
        $(".img_4").hide();
        $(".img_5").hide();
    })

    $('.parr_3').click(function(){
        $(".img_1").hide();
        $(".img_2").hide();
        $(".img_3").show();
        $(".img_4").hide();
        $(".img_5").hide();
    })

    $('.parr_4').click(function(){
        $(".img_1").hide();
        $(".img_2").hide();
        $(".img_3").hide();
        $(".img_4").show();
        $(".img_5").hide();
    })

    $('.parr_5').click(function(){
        $(".img_1").hide();
        $(".img_2").hide();
        $(".img_3").hide();
        $(".img_4").hide();
        $(".img_5").show();
    })




    // volver arriba
    $("#arriba").hide();

    function dar(){
        if ($(document).scrollTop() >100){
            $("#arriba").show();
        }
    }

    function quitar(){
        if ($(document).scrollTop() < 150){
            $("#arriba").hide();
        }
    }

var position = $(window).scrollTop();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
            dar();
    } else {
        quitar();
    }
    position = scroll;
});

   // fin


        //volver arriba
		$('#arriba').click(function(){ //Id del elemento cliqueable
			$('html, body').animate({scrollTop:0}, 1250);
			return false;
		});
        $('html, body').animate({scrollTop:0}, 1250);
        //fin



    // logica del filtro

    $('#filter_todo').click(function(){
        //alert("A");
        $(".reverse").show();
    })

    //bitcoin funciona

    $('#filter_Bitcoin').click(function(){
        //alert("A");

        


        if( $('#filter_Bitcoin').is(':checked') ) {

            arr_select.push("seach_Bitcoin");

           // alert('Seleccionado');

           $(".reverse").show();

           $(".seach_Ehtereun").hide();
           $(".seach_litecoin").hide();
           $(".seach_Solana").hide();
           $(".seach_cardano").hide();
           $(".seach_Noticias").hide();
           $(".seach_predicciones").hide();
           $(".seach_JuegosNFT").hide();
           $(".seach_JuegosNFT").hide();
           $(".seach_NFT").hide();


           for(var x = 0; x < arr_select.length;x++){
            console.log(pruena);
           console.log("se entra");
           $("." + arr_select[x]).show();
       }

        } else {
            var i = arr_select.indexOf("seach_Bitcoin");
            arr_select.splice( i, 1 );

            $(".seach_Bitcoin").hide();
        
            if(arr_select.length == 0){
                $(".reverse").show();
            }

        }


    })

    //ethereum funciona

    $('#filter_Ehtereun').click(function(){
        //alert("A");
        

        if( $('#filter_Ehtereun').is(':checked') ) {

            arr_select.push("seach_Ehtereun");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();


       for(var x = 0; x < arr_select.length;x++){
        console.log(pruena);
       console.log("se entra");
       $("." + arr_select[x]).show();
   }



         } else {

           //alert(empty(arr_select));

            var i = arr_select.indexOf("seach_Ehtereun");
            arr_select.splice( i, 1 );
        
        $(".seach_Ehtereun").hide();

        if(arr_select.length == 0){
            $(".reverse").show();
        }

    }


    })

    // fin etereun

    //litecoin funciona
    $('#filter_litecoin').click(function(){
        //alert("A");

        if( $('#filter_litecoin').is(':checked') ) {

            arr_select.push("seach_litecoin");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();


       for(var x = 0; x < arr_select.length;x++){
        console.log(pruena);
       console.log("se entra");
       $("." + arr_select[x]).show();
   }

    } else {

        var i = arr_select.indexOf("seach_litecoin");
        arr_select.splice( i, 1 );
    
    $(".seach_litecoin").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    }
    })    

    // fin litecion


    $('#filter_Solana').click(function(){
        //alert("A");

        if( $('#filter_Solana').is(':checked') ) {

            arr_select.push("seach_Solana");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();

       for(var x = 0; x < arr_select.length;x++){
        console.log(pruena);
       console.log("se entra");
       $("." + arr_select[x]).show();
   }

    } else {

        var i = arr_select.indexOf("seach_Solana");
        arr_select.splice( i, 1 );
    
    $(".seach_Solana").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    }       

    })


    //fin solana




    //cardano funciona
    
    $('#filter_cardano').click(function(){
        //alert("A");

        if( $('#filter_cardano').is(':checked') ) {

            arr_select.push("seach_cardano");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();

       for(var x = 0; x < arr_select.length;x++){
        console.log(pruena);
       console.log("se entra");
       $("." + arr_select[x]).show();
        }

    } else {

        var i = arr_select.indexOf("seach_cardano");
        arr_select.splice( i, 1 );
    
    $(".seach_cardano").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    } 

    //fin cardano




    })
    
 
    $('#filter_Noticias').click(function(){
        //alert("A");

        if( $('#filter_Noticias').is(':checked') ) {

            arr_select.push("seach_Noticias");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();

       for(var x = 0; x < arr_select.length;x++){
       $("." + arr_select[x]).show();
        }

    } else {
        var i = arr_select.indexOf("seach_Noticias");
        arr_select.splice( i, 1 );
    
    $(".seach_Noticias").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    } 


    }) 
    
    

    $('#filter_predicciones').click(function(){
        //alert("A");
        if( $('#filter_predicciones').is(':checked') ) {

            arr_select.push("seach_predicciones");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_JuegosNFT").hide();
       $(".seach_NFT").hide();

       for(var x = 0; x < arr_select.length;x++){
        $("." + arr_select[x]).show();
         }

    } else {
        var i = arr_select.indexOf("seach_predicciones");
        arr_select.splice( i, 1 );
    
    $(".seach_predicciones").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    } 

    })


    $('#filter_JuegosNFT').click(function(){
        //alert("A");

        if( $('#filter_JuegosNFT').is(':checked') ) {

            arr_select.push("seach_JuegosNFT");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_NFT").hide();

       for(var x = 0; x < arr_select.length;x++){
        $("." + arr_select[x]).show();
         }

    } else {
        var i = arr_select.indexOf("seach_JuegosNFT");
        arr_select.splice( i, 1 );
    
    $(".seach_JuegosNFT").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    } 

    })


    $('#filter_NFT').click(function(){
        //alert("A");

        if( $('#filter_NFT').is(':checked') ) {

            arr_select.push("seach_NFT");

        $(".reverse").show();

       $(".seach_Bitcoin").hide();
       $(".seach_Ehtereun").hide();
       $(".seach_litecoin").hide();
       $(".seach_Solana").hide();
       $(".seach_cardano").hide();
       $(".seach_Noticias").hide();
       $(".seach_predicciones").hide();
       $(".seach_JuegosNFT").hide();

       for(var x = 0; x < arr_select.length;x++){
        $("." + arr_select[x]).show();
         }

    } else {
        var i = arr_select.indexOf("seach_NFT");
        arr_select.splice( i, 1 );
    
    $(".seach_NFT").hide();

    if(arr_select.length == 0){
        $(".reverse").show();
    }

    } 



    })  
  

})


