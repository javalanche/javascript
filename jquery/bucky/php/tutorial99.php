<?php
if ( isset($_POST['name'], $_POST['string'])) {
	$name = $_POST['name'];
	$string = $_POST['string'];

	echo '<strong>', $name, '</strong> says <i>', $string, '</i>';
}
?>
