<?php
  $tasksFile = "tasks.json";
  $tasksJsonString = file_get_contents($tasksFile);
  echo $tasksJsonString;
