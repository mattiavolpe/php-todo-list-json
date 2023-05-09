<?php
  $updatedTasksList = json_encode($_POST["tasksArray"]);
  file_put_contents("../../../../assets/data/tasks.json", $updatedTasksList);
  header('Content-Type: application/json');
  header("Access-Control-Allow-Origin: http://localhost:5173");
  header("Access-Control-Allow-Headers: X-Requested-With");
  echo $updatedTasksList;
