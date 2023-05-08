<?php
  $myVar = json_encode($_POST);
  file_put_contents("tasks.json", $myVar);

  echo $myVar;
  