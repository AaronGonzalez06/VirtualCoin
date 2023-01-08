<?php require_once './includes/conexion.php'; ?>
<?php require_once './includes/funciones.php'; ?>
<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>VirtualCoin</title> 
        <link rel="stylesheet" type="text/css" href="./assets/css/estilos.css"/>
        <link id="cambio" rel="stylesheet" type="text/css" href="" />

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js"></script>

        <script src="./js/main.js"></script>
        <script src="./js/api.js"></script>
</head>
<body>
<div id="contenido">
<?php require_once './includes/header.php'; ?>
    <!-- Fin del header -->

    <div class="inf">

</div>

    <!-- MAin -->
    <main>
    <section> 

    <?php $articulos = articulo($conexion,$_GET['id']);
        while ($articulo = mysqli_fetch_assoc($articulos)): ?>

        <article>
         <h3><?=$articulo['titulo']?></h3>

            <img class="img_articulo" src="./assets/img/<?=$articulo['img']?>" width="250" height="250">
            <p> <?=$articulo['cuerpo']?></p>
            <div class="clearfix"></div>
                      
            <p class="fecha_articulo"><?=$articulo['fecha']?> </p>
        </article> 
        
        <?php endwhile;?>
    </section>       
    </main>
    <!-- Fin del header -->
    
    <!-- aside -->
    <?php require_once './includes/aside.php'; ?>
    <!-- Fin del aside -->
    <div class="clearfix"></div>

    
</div>


</body>