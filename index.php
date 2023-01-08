<?php require_once './includes/conexion.php'; ?>
<?php require_once './includes/funciones.php'; ?>
<?php require_once './libreria/vendor/autoload.php'; ?>
<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>VirtualCoin</title> 
        <link rel="stylesheet" type="text/css" href="./assets/css/estilos.css"/>
        <link id="cambio" rel="stylesheet" type="text/css" href="" />
        <!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js"></script>
        <script src="./js/main.js"></script>

</head>
<body>
<div id="contenido">
<?php require_once './includes/header.php'; ?>
    <!-- Fin del header -->

<div class="inf">

</div>


    <?php require_once './includes/slider.php'; ?>
    <!-- MAin -->



    <main>
    <a href="#" id="arriba">Up</a>
    <section> 

    <?php $cantidad = cantidad($conexion);
    
    //total de datos
    $numero_elementos = $cantidad->num_rows;
    $numero_de_cada =10;
    $pagination = new Zebra_Pagination();
    $pagination->records($numero_elementos);
    //numero de datos por pagina
    $pagination->records_per_page($numero_de_cada);

    $page = $pagination->get_page();

    $empezar = (( $page - 1)*$numero_de_cada);

    $articulos = index($conexion,$empezar,$numero_de_cada);

        while ($articulo = mysqli_fetch_assoc($articulos)): ?>

        <article class="articulo_<?=$articulo['nombre']?>">
        <a href="articulo.php?id=<?=$articulo['id']?>"> <h3><?=$articulo['titulo']?></h3>

            <img class="img_articulo" src="./assets/img/<?=$articulo['img']?>" width="250" height="250">
            <p> <?=$articulo['cuerpo']?></p></a>
            <div class="clearfix"></div>
                      
            <p class="fecha_articulo"><?=$articulo['fecha']?> </p>
        </article> 
        
        <?php endwhile;?>
    </section>
<?php $pagination->render();?>
    </main>
    <!-- Fin del header -->
    
    <!-- aside -->
    <?php require_once './includes/aside.php'; ?>
    <!-- Fin del aside -->
    <div class="clearfix"></div>

    
</div>

<script src="./js/api.js"></script>
</body>
        