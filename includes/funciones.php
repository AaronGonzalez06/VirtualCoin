<?php


function seccion ($conexion){
    
    $sql = "select * from seccion;";
     $categorias=mysqli_query($conexion, $sql);
     $resul = array();
     if ($categorias && mysqli_num_rows($categorias) !=0) {
         
        $resul = $categorias; 
     }
     
     return $resul;
    
};


function articulos ($conexion,$nombre){
    
   $sql = "SELECT *,art.id id_articulos FROM articulos art INNER JOIN seccion secc ON art.id_seccion = secc.id where secc.nombre = '$nombre';";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};


function buscador ($conexion,$titulo){
    
   $sql = "select art.*, sec.nombre nombre from articulos art inner join seccion sec on sec.id =art.id_seccion where upper(art.titulo) like '%$titulo%';";
    $secciones=mysqli_query($conexion, $sql);
    $resul = array();
    if ($secciones && mysqli_num_rows($secciones) !=0) {
        
       $resul = $secciones; 
    }
    
    return $resul;
   
};





function filter ($conexion,$titulo){
    
   $sql = "select count(*) totales, sec.nombre nombre from articulos art inner join seccion sec on sec.id =art.id_seccion where upper(art.titulo) like '%$titulo%' group by sec.nombre;";
    $secciones=mysqli_query($conexion, $sql);
    $resul = array();
    if ($secciones && mysqli_num_rows($secciones) !=0) {
        
       $resul = $secciones; 
    }
    
    return $resul;
   
};





function cantidad ($conexion){
   
   $sql = "select art.*, sec.nombre nombre from articulos art inner join seccion sec on sec.id=art.id_seccion order by fecha desc;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};








function index ($conexion,$init,$canti){
   
   $sql = "select art.*, sec.nombre nombre from articulos art inner join seccion sec on sec.id=art.id_seccion order by fecha desc limit $init,$canti;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};


function articulo ($conexion,$id){
    
   $sql = "select * from articulos where id=$id;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};


//funciones para el slider
function titulo_slider ($conexion){
    
   $sql = "select titulo from articulos order by fecha desc limit 5;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};


function img_slider ($conexion){
    
   $sql = "select img from articulos order by fecha desc limit 5;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};


function id_slider ($conexion){
    
   $sql = "select id from articulos order by fecha desc limit 5;";
    $categorias=mysqli_query($conexion, $sql);
    $resul = array();
    if ($categorias && mysqli_num_rows($categorias) !=0) {
        
       $resul = $categorias; 
    }
    
    return $resul;
   
};





