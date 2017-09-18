<?php
	// include("header.html");
	// echo "<div>中间</div>";
	// include("footer.html");
	// include("./views/main/index.html");
	// $path=$_SERVER['PATH_INFO'];
	// echo $path;
	
	// include('./views'.$path.'.html')
	$dir='main';
	$filename='index';
	if(array_key_exists('PATH_INFO', $_SERVER)){
		$path=$_SERVER['PATH_INFO'];
		$str=substr($path, 1);
		// var_dump($str);
		$ret=explode('/', $str);
		// var_dump($ret);
		if(count($ret)==2){
			$dir=$ret[0];
			$filename=$ret[1];
		}else{
			$filename='login';
		}
	}
	include('./views/'.$dir.'/'.$filename.'.html')
	?>

