<?php
  $newTask = $_POST["task"];
  $newState = $_POST["completed"];
  $tasksJsonString = file_get_contents("tasks.json");
  $tasksArray = json_decode($tasksJsonString, true);
  array_push($tasksArray, [
    "task" => $newTask,
    "completed" => "false"
  ]);
  $updatedTasksJson = json_encode($tasksArray);
  file_put_contents("tasks.json", $updatedTasksJson);
  header('Content-Type: application/json');
  echo $updatedTasksJson;
