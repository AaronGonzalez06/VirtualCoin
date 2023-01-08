const list = document.getElementsByClassName("inf");
const listCoin = document.getElementsByClassName("infCoin");
const aside = document.getElementsByClassName("MarketCap");
const $grafica = document.getElementsByClassName("grafica");
const controlSelect = document.getElementsByClassName("controlSelect");

var URLactual = window.location;
//alert(URLactual);


    const apikey = "e51afa15d3673d0bf9fe83f3154aed213f59c615f9d8b482ede94c221c0b78f0";

    //const url = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${apikey}`;

    //const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,SOL,BNB,USDT,XRP,DOT,DOGE,SHIB&tsyms=USD,EUR&api_key=${apikey}`;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ADA,SOL,XRP,DOGE,AXS,MANA,AVAX,VET,SHIB,SAND,DOT,LUNA,MATIC,TRX,BNB,CRO&tsyms=USD&api_key=${apikey}`;

   // const urlMarketCat = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR&api_key=${apikey}`;
   const urlMarketCat = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=52&tsym=EUR&api_key=${apikey}`;
   

   

   //const urlHistorialBTC = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&api_key=${apikey}`;



      //rellenar control select

       //top 10 IMAGEURL

       fetch(urlMarketCat)
       .then(response => response.json())
       .then(data=> {
           console.log(data);
           for( var q = 0; q < data.Data.length ; q++ ){
           const lista = document.createElement("option");
           lista.value= data.Data[q].CoinInfo.Internal;
           const listado = `${data.Data[q].CoinInfo.FullName}`; 
           //console.log(listado);
           lista.innerHTML =listado;
           controlSelect[0].append(lista);
           }
   
   
       }
       );

    
    // fin relleno control select



//calculadora de crypto
const form = document.getElementsByClassName("calculadora");

const input = document.getElementsByClassName("cantidad");

const control = document.getElementsByClassName("controlSelect");


   const listCal = document.getElementsByClassName("mostrar");
   console.log(form);
   console.log(form[0]);
  console.log(input[0]);

   
   
   function precio (precio, cantidad) {
       var solucion = (precio * cantidad)/1;
       return solucion.toFixed(2);
     }
   
     if(form[0] != undefined || form[0] != null){
   form[0].addEventListener("submit", e => {
     e.preventDefault();
     const inputVal = input[0].value;
     var coin = control[0].value;
   console.log(coin);
   console.log(inputVal);

   var urlCal = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD&api_key=${apikey}`;

     fetch(urlCal)
       .then(response => response.json())
       .then(data => {
   
   
           console.log(inputVal);
   
           console.log(precio (data.USD,inputVal));
   
   
         const li = document.createElement("p");
         li.classList.add("money");
   
         const markup = precio (data.USD,inputVal) + " $";
         
         listCal[0].innerHTML = markup;
   
       })
       .catch(() => {
         msg.textContent = "error";
       });
   
     //msg.textContent = "";
    // form.reset();
     //input.focus();
   });
}
   // fin addeventlistener








    //fin prueba


    //informacion general
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        //const { ADA, BTC, ETH, SOL, BNB, USDT, XRP, DOT, DOGE, SHIB } = data;
        const li = document.createElement("p");

        const markup = `<p><img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.ADA.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.ADA.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.AVAX.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.AVAX.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.BTC.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.BTC.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.ETH.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.ETH.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.SOL.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.SOL.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.AXS.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.AXS.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.VET.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.VET.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.DOGE.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.DOGE.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.SHIB.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.SHIB.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.MANA.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.MANA.USD.PRICE}   
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.DOT.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.DOT.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.TRX.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.TRX.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.SAND.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.SAND.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.LUNA.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.LUNA.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.BNB.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.BNB.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.CRO.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.CRO.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.MATIC.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.MATIC.USD.PRICE}
        <img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.XRP.USD.IMAGEURL}?width=18"/> ${data.DISPLAY.XRP.USD.PRICE}  </p>`;
        //console.log(markup);   
        li.innerHTML = markup;
        //console.log(li.innerHTML);
        list[0].append(li);

    }
    );


    //top 10 IMAGEURL

    fetch(urlMarketCat)
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        for( var q = 0; q < data.Data.length ; q++ ){
            if (q == 49 ||q == 8 || q == 9 || q == 17 || q == 44 || q == 53 ){ q++;}
        const lista = document.createElement("tr");
        const listado = `<td> <img class="phone_img" src="https://www.cryptocompare.com${data.Data[q].CoinInfo.ImageUrl}?width=18"/>  ${data.Data[q].CoinInfo.FullName} </td>
        <td>${data.Data[q].DISPLAY.EUR.PRICE}</td>
        <td>${data.Data[q].DISPLAY.EUR.TOPTIERVOLUME24HOURTO}</td>`; 
        //console.log(listado);
        lista.innerHTML =listado;
        aside[0].append(lista);
        }


    }
    );



    if( URLactual == "http://localhost/VirtualCoin/seccion.php?seccion=Bitcoin"){

        const urlInfoCoinBTC = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=${apikey}`;
        const urlHistorialBTC = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&api_key=${apikey}`;

            //informacion concreta
            fetch(urlInfoCoinBTC)
            .then(response => response.json())
            .then(data=> {
                //console.log(data);
                const li = document.createElement("p");
        
                const markup = `<img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.BTC.USD.IMAGEURL}?width=18" /> Precio actual: ${data.DISPLAY.BTC.USD.PRICE} ---- Cambio 24H: ${data.DISPLAY.BTC.USD.CHANGE24HOUR} ----
                  Cambio en 1H: ${data.DISPLAY.BTC.USD.CHANGEHOUR} ---- Bitcoin en circulación: ${data.DISPLAY.BTC.USD.CIRCULATINGSUPPLY}
                   ---- Volument en un dia: ${data.DISPLAY.BTC.USD.VOLUMEDAYTO} ---- Volumen en 1H: ${data.DISPLAY.BTC.USD.VOLUMEHOURTO}  `;
      
                li.innerHTML = markup;
    
                listCoin[0].append(li);
        
            }
            );

            //historial

            fetch(urlHistorialBTC)
            .then(response => response.json())
            .then(data=> {
                console.log(data);
            
                var dia =  new Array(); 
                var cifra =  new Array(); 
            
                for( var q = 0; q < data.Data.Data.length; q++ ){
            
                 var unix = new Date(data.Data.Data[q].time  * 1000);
                 unix.getTime()
                 var fecha = unix.getDate()+ "/"+(unix.getMonth()+1) + "/"+unix.getFullYear();
                 dia.push(fecha);
                 cifra.push(data.Data.Data[q].high);
                }
                console.log(cifra);
                console.log(dia);
            
                const datosVentas2020 = {
                    label: "historial ultimo mes",
                    data: cifra, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                    borderWidth: 1,// Ancho del borde
                };
                console.log($grafica);
                new Chart($grafica, {
                    type: 'line',// Tipo de gráfica
                    data: {
                        labels: dia,
                        datasets: [
                            datosVentas2020,
                            // Aquí más datos...
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                        },
                    }
                });
            
            
            }
            );

            

    } else if( URLactual == "http://localhost/VirtualCoin/seccion.php?seccion=Ehtereun"){



        const urlInfoCoinETH = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&api_key=${apikey}`;
        const urlHistorialETH = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30&api_key=${apikey}`;

        //informacion concreta
        fetch(urlInfoCoinETH)
        .then(response => response.json())
        .then(data=> {
            //console.log(data);
            const li = document.createElement("p");
    
            const markup = `<img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.ETH.USD.IMAGEURL}?width=18" /> Precio actual: ${data.DISPLAY.ETH.USD.PRICE} ---- Cambio 24H: ${data.DISPLAY.ETH.USD.CHANGE24HOUR} ----
              Cambio en 1H: ${data.DISPLAY.ETH.USD.CHANGEHOUR} ---- ETH en circulación: ${data.DISPLAY.ETH.USD.CIRCULATINGSUPPLY}
               ---- Volument en un dia: ${data.DISPLAY.ETH.USD.VOLUMEDAYTO} ---- Volumen en 1H: ${data.DISPLAY.ETH.USD.VOLUMEHOURTO}  `;
  
            li.innerHTML = markup;

            listCoin[0].append(li);
    
        }
        );

                    //historial

                    fetch(urlHistorialETH)
                    .then(response => response.json())
                    .then(data=> {
                        console.log(data);
                    
                        var dia =  new Array(); 
                        var cifra =  new Array(); 
                    
                        for( var q = 0; q < data.Data.Data.length; q++ ){
                    
                         var unix = new Date(data.Data.Data[q].time  * 1000);
                         unix.getTime()
                         var fecha = unix.getDate()+ "/"+(unix.getMonth()+1) + "/"+unix.getFullYear();
                         dia.push(fecha);
                         cifra.push(data.Data.Data[q].high);
                        }
                        console.log(cifra);
                        console.log(dia);
                    
                        const datosVentas2020 = {
                            label: "historial ultimo mes",
                            data: cifra, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                            borderWidth: 1,// Ancho del borde
                        };
                        console.log($grafica);
                        new Chart($grafica, {
                            type: 'line',// Tipo de gráfica
                            data: {
                                labels: dia,
                                datasets: [
                                    datosVentas2020,
                                    // Aquí más datos...
                                ]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }],
                                },
                            }
                        });
                    
                    
                    }
                    );

    } else if( URLactual == "http://localhost/VirtualCoin/seccion.php?seccion=litecoin"){



        const urlInfoCoinLTC = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD&api_key=${apikey}`;
        const urlHistorialLTC = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=30&api_key=${apikey}`;

        //informacion concreta
        fetch(urlInfoCoinLTC)
        .then(response => response.json())
        .then(data=> {
            //console.log(data);
            const li = document.createElement("p");
    
            const markup = `<img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.LTC.USD.IMAGEURL}?width=18" /> Precio actual: ${data.DISPLAY.LTC.USD.PRICE} ---- Cambio 24H: ${data.DISPLAY.LTC.USD.CHANGE24HOUR} ----
              Cambio en 1H: ${data.DISPLAY.LTC.USD.CHANGEHOUR} ---- LTC en circulación: ${data.DISPLAY.LTC.USD.CIRCULATINGSUPPLY}
               ---- Volument en un dia: ${data.DISPLAY.LTC.USD.VOLUMEDAYTO} ---- Volumen en 1H: ${data.DISPLAY.LTC.USD.VOLUMEHOURTO}  `;
  
            li.innerHTML = markup;

            listCoin[0].append(li);
    
        }
        );

                            //historial

                            fetch(urlHistorialLTC)
                            .then(response => response.json())
                            .then(data=> {
                                console.log(data);
                            
                                var dia =  new Array(); 
                                var cifra =  new Array(); 
                            
                                for( var q = 0; q < data.Data.Data.length; q++ ){
                            
                                 var unix = new Date(data.Data.Data[q].time  * 1000);
                                 unix.getTime()
                                 var fecha = unix.getDate()+ "/"+(unix.getMonth()+1) + "/"+unix.getFullYear();
                                 dia.push(fecha);
                                 cifra.push(data.Data.Data[q].high);
                                }
                                console.log(cifra);
                                console.log(dia);
                            
                                const datosVentas2020 = {
                                    label: "historial ultimo mes",
                                    data: cifra, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                                    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                                    borderWidth: 1,// Ancho del borde
                                };
                                console.log($grafica);
                                new Chart($grafica, {
                                    type: 'line',// Tipo de gráfica
                                    data: {
                                        labels: dia,
                                        datasets: [
                                            datosVentas2020,
                                            // Aquí más datos...
                                        ]
                                    },
                                    options: {
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }],
                                        },
                                    }
                                });
                            
                            
                            }
                            );

    } else if( URLactual == "http://localhost/VirtualCoin/seccion.php?seccion=Solana"){



        const urlInfoCoinSOL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=USD&api_key=${apikey}`;
        const urlHistorialSOL = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=SOL&tsym=USD&limit=30&api_key=${apikey}`;

        //informacion concreta
        fetch(urlInfoCoinSOL)
        .then(response => response.json())
        .then(data=> {
            //console.log(data);
            const li = document.createElement("p");
    
            const markup = `<img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.SOL.USD.IMAGEURL}?width=18" /> Precio actual: ${data.DISPLAY.SOL.USD.PRICE} ---- Cambio 24H: ${data.DISPLAY.SOL.USD.CHANGE24HOUR} ----
              Cambio en 1H: ${data.DISPLAY.SOL.USD.CHANGEHOUR} ---- SOL en circulación: ${data.DISPLAY.SOL.USD.CIRCULATINGSUPPLY}
               ---- Volument en un dia: ${data.DISPLAY.SOL.USD.VOLUMEDAYTO} ---- Volumen en 1H: ${data.DISPLAY.SOL.USD.VOLUMEHOURTO}  `;
  
            li.innerHTML = markup;

            listCoin[0].append(li);
    
        }
        );

                                    //historial

                                    fetch(urlHistorialSOL)
                                    .then(response => response.json())
                                    .then(data=> {
                                        console.log(data);
                                    
                                        var dia =  new Array(); 
                                        var cifra =  new Array(); 
                                    
                                        for( var q = 0; q < data.Data.Data.length; q++ ){
                                    
                                         var unix = new Date(data.Data.Data[q].time  * 1000);
                                         unix.getTime()
                                         var fecha = unix.getDate()+ "/"+(unix.getMonth()+1) + "/"+unix.getFullYear();
                                         dia.push(fecha);
                                         cifra.push(data.Data.Data[q].high);
                                        }
                                        console.log(cifra);
                                        console.log(dia);
                                    
                                        const datosVentas2020 = {
                                            label: "historial ultimo mes",
                                            data: cifra, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                                            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                                            borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                                            borderWidth: 1,// Ancho del borde
                                        };
                                        console.log($grafica);
                                        new Chart($grafica, {
                                            type: 'line',// Tipo de gráfica
                                            data: {
                                                labels: dia,
                                                datasets: [
                                                    datosVentas2020,
                                                    // Aquí más datos...
                                                ]
                                            },
                                            options: {
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            beginAtZero: true
                                                        }
                                                    }],
                                                },
                                            }
                                        });
                                    
                                    
                                    }
                                    );


    } else if( URLactual == "http://localhost/VirtualCoin/seccion.php?seccion=cardano"){



        const urlInfoCoinADA = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD&api_key=${apikey}`;
        const urlHistorialADA = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ADA&tsym=USD&limit=30&api_key=${apikey}`;

        //informacion concreta
        fetch(urlInfoCoinADA)
        .then(response => response.json())
        .then(data=> {
            //console.log(data);
            const li = document.createElement("p");
    
            const markup = `<img class="phone_img" src="https://www.cryptocompare.com${data.DISPLAY.ADA.USD.IMAGEURL}?width=18" /> Precio actual: ${data.DISPLAY.ADA.USD.PRICE} ---- Cambio 24H: ${data.DISPLAY.ADA.USD.CHANGE24HOUR} ----
              Cambio en 1H: ${data.DISPLAY.ADA.USD.CHANGEHOUR} ---- ADA en circulación: ${data.DISPLAY.ADA.USD.CIRCULATINGSUPPLY}
               ---- Volument en un dia: ${data.DISPLAY.ADA.USD.VOLUMEDAYTO} ---- Volumen en 1H: ${data.DISPLAY.ADA.USD.VOLUMEHOURTO}  `;
  
            li.innerHTML = markup;

            listCoin[0].append(li);
    
        }
        );

                                            //historial

                                            fetch(urlHistorialADA)
                                            .then(response => response.json())
                                            .then(data=> {
                                                console.log(data);
                                            
                                                var dia =  new Array(); 
                                                var cifra =  new Array(); 
                                            
                                                for( var q = 0; q < data.Data.Data.length; q++ ){
                                            
                                                 var unix = new Date(data.Data.Data[q].time  * 1000);
                                                 unix.getTime()
                                                 var fecha = unix.getDate()+ "/"+(unix.getMonth()+1) + "/"+unix.getFullYear();
                                                 dia.push(fecha);
                                                 cifra.push(data.Data.Data[q].high);
                                                }
                                                console.log(cifra);
                                                console.log(dia);
                                            
                                                const datosVentas2020 = {
                                                    label: "historial ultimo mes",
                                                    data: cifra, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                                                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                                                    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                                                    borderWidth: 1,// Ancho del borde
                                                };
                                                console.log($grafica);
                                                new Chart($grafica, {
                                                    type: 'line',// Tipo de gráfica
                                                    data: {
                                                        labels: dia,
                                                        datasets: [
                                                            datosVentas2020,
                                                            // Aquí más datos...
                                                        ]
                                                    },
                                                    options: {
                                                        scales: {
                                                            yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true
                                                                }
                                                            }],
                                                        },
                                                    }
                                                });
                                            
                                            
                                            }
                                            );

    }


    
    