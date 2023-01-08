<header>
        <h1><a href="index.php">Virtual Coin</a></h1>

           
        <ul>
        <?php $secciones = seccion($conexion);
        while ($seccion = mysqli_fetch_assoc($secciones)): ?>
        <li class="boton_<?=$seccion['nombre']?>"><a href="seccion.php?seccion=<?=$seccion['nombre']?>" ><?=$seccion['nombre']?></a></li>
        <?php endwhile;?>            

        </ul>
        <div class="clearfix"></div>




    </header>