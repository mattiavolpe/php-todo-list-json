<?php
  $file = "../../../../assets/data/tasks.json";
  $jsonArray = file_get_contents($file);
  $phpDecodedArray = json_decode($jsonArray, true);

  // Executes if the operation is "addTask"
  if ($_POST["operation"] === "addTask") {
    array_push($phpDecodedArray,
    [
      "task" => $_POST["newTask"],
      "completed" => false
    ]);
  }

  // Executes if the operation is "toggleState"
  if ($_POST["operation"] === "toggleState") {
    $phpDecodedArray[$_POST["index"]]["completed"] = !$phpDecodedArray[$_POST["index"]]["completed"];
  }

  // Executes if the operation is "deleteTask"
  if ($_POST["operation"] === "deleteTask") {
    array_splice($phpDecodedArray, $_POST["index"], 1);
  }

  $encodedArray = json_encode($phpDecodedArray);
  file_put_contents($file, $encodedArray);
  header('Content-Type: application/json');
  header("Access-Control-Allow-Origin: http://localhost:5173");
  header("Access-Control-Allow-Headers: X-Requested-With");
  echo $encodedArray;
