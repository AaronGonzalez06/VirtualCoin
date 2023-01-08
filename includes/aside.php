<aside>



<div class="box">
  <div class="container-1">
  <form method="post" action="buscador.php">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" name="titulo" id="search" placeholder="Search..." />
      </form>
  </div>
</div>

<div>


<?php

$host= $_SERVER["HTTP_HOST"];
$url= $_SERVER["REQUEST_URI"];
$urlCompleta = "http://" . $host . $url;
$urlIndex = "http://localhost/VirtualCoin/index.php";
$urlIndex2 = "http://localhost/VirtualCoin/";

if ($urlCompleta == $urlIndex || $urlCompleta == $urlIndex2):
?>

<div class="calculadora_div">
<h3>Calculadora de criptomonedas.</h3>
<form class="calculadora" action="#" method="POST" >
<select class="controlSelect" name="select">
</select>
    <input  class="cantidad" type="text" placeholder="Cantidad a calcular" autofocus>
    <button type="submit">SUBMIT</button>
</form>
<div class="mostrar"></div>
</div>
<?php endif;?>

  <h3>capitalización de mercado.</h3>
<table class="MarketCap" >
<tr>
<th>Moneda</th>
<th>Precio</th>
<th>Volumen 24 horas</th>
</tr>
</table>
</div>



<!--<iframe src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" width="100%" height="100%" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe><div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;">Powered by <a href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=TOP_CRYPTOCURRENCIES&amp;utm_content=Footer%20Link" target="_blank" rel="nofollow">Investing.com</a></div> -->






</aside>