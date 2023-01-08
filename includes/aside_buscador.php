<aside>



<div class="box">
  <div class="container-1">
  <form method="post" action="buscador.php">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" name="titulo" id="search" placeholder="Search..." />
      </form>
  </div>
</div>


<div id="filtro">
<label><input type="checkbox" id="filter_todo" value="first_checkbox"> Todo</label><br>
<?php $secciones = filter($conexion,$_POST['titulo']);
        while ($seccion = mysqli_fetch_assoc($secciones)): ?>
        <label><input type="checkbox" id="filter_<?=$seccion['nombre']?>" value="first_checkbox"> <?=$seccion['nombre']?> (<?=$seccion['totales']?>)</label><br>
        <?php endwhile;?>  
</div>



</aside>