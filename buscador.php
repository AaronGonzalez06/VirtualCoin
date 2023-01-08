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
    <a href="#" id="arriba">Ir arriba</a>
    <section> 

    <?php $articulos = buscador($conexion,$_POST['titulo']);
        while ($articulo = mysqli_fetch_assoc($articulos)): ?>

        <article class="seach_<?=$articulo['nombre']?> reverse">
        <a href="articulo.php?id=<?=$articulo['id']?>"> <h3><?=$articulo['titulo']?></h3>

            <img class="img_articulo" src="./assets/img/<?=$articulo['img']?>" width="250" height="250">
            <p> <?=$articulo['cuerpo']?></p></a>
            <div class="clearfix"></div>
                      
            <p class="fecha_articulo"><?=$articulo['fecha']?> </p>
        </article> 
        
        <?php endwhile;?>
    </section>       
    </main>
   
    <!-- Fin del MAIN -->
    
    <!-- aside -->
    <?php require_once './includes/aside_buscador.php'; ?>
    <!-- Fin del aside -->
    <div class="clearfix"></div>

    
</div>


</body>
        