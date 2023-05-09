<?php
  $tasksJsonString = file_get_contents("../../../../assets/data/tasks.json");
  header('Content-Type: application/json');
  header("Access-Control-Allow-Origin: http://localhost:5173");
  header("Access-Control-Allow-Headers: X-Requested-With");
  echo $tasksJsonString;
