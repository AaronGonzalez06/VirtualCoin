
<div id="my_slider">


<?php $images = img_slider($conexion);
        $contador2= 1;
        while ($imge = mysqli_fetch_assoc($images)): ?>
<img class="img_articulo img_<?=$contador2?>" src="./assets/img/<?=$imge['img']?>" width="400" height="400">
        <?php $contador2++ ;?>
        <?php endwhile;?>



<div id="art_slide">
        <?php $titulos = titulo_slider($conexion);
        $contador= 1;
        while ($titulo = mysqli_fetch_assoc($titulos)): ?>

<p class="parr_<?=$contador?>"><?=$titulo['titulo']?></p>
        <?php $contador++ ;?>
        <?php endwhile;?>
</div>
<div class="clearfix"></div>

<div id="dest_slider">

<?php $ids = id_slider($conexion);
        $contador3= 1;
        while ($id = mysqli_fetch_assoc($ids)): ?>

        <a href="articulo.php?id=<?=$id['id']?>"> <p class="destacado_slider img_<?=$contador3?>">ir noticia</p></a>
        <?php $contador3++ ;?>
        <?php endwhile;?>



<div class="clearfix"></div>
</div>
</div>


