<?php


//Change the upload location to the right one here and in the uploader.js
$target_dir = $_SERVER['DOCUMENT_ROOT']. "/userUploads/imageUploads/";

//$target_dir = $_SERVER['DOCUMENT_ROOT']. "/animPacks/sport_packs/football_starter_pack/images/";



$target_file = $target_dir . basename($_FILES["file"]["name"]);

if ($res = move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["file"]["name"])). " has been uploaded.";
} else {
    echo "err";
}
var_dump($_FILES, $target_file, $res);

?>