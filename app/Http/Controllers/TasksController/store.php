<?php
  $updatedTasksList = json_encode($_POST);
  file_put_contents("../../../../assets/data/tasks.json", $updatedTasksList);

  echo $updatedTasksList;
