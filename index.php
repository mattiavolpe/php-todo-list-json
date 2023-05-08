<?php
  /* 
  Dobbiamo creare una web-app che permetta di leggere e scrivere una lista di Todo.
  Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.

  Stack
  Html, CSS, VueJS (importato tramite CDN), axios, PHP

  Consigli
  Nello svolgere l’esercizio seguite un approccio graduale. Prima assicuratevi che la vostra pagina index.php (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).
  Lo step successivo è quello di “testare" l'invio di un nuovo task. Iniziate prima da un array in pagina ma Attenzione! É solo leggendo e scrivendo su un file json come fatto in classe che avremo la persistenza dei dati.
  Solo a questo punto sarà utile passare alla lettura/scrittura della lista da un file JSON.

  Bonus
  Mostrare lo stato del task → se completato, barrare il testo
  Permettere di segnare un task come completato facendo click sul testo
  Permettere il toggle del task (completato/non completato)
  Abilitare l’eliminazione di un task

  */
?>

<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- EXTERNAL BOOTSTRAP CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- EXTERNAL PERSONAL CSS -->
    <link rel="stylesheet" href="./assets/style/app.css">
    
    <title>To-Do List</title>
  </head>
  
  <body>
    
    <div id="app">
      
      <div class="container">
        <div class="w-50 mx-auto py-5">
          <h1 class="text-secondary text-center mb-5">Full-Stack Web Development To-Do List</h1>
          <ul class="list-unstyled">
            <li v-for="task in tasks">{{ task.task }}</li>
          </ul>
          <!-- /.list-unstyled -->
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Insert a new task..." aria-label="Insert a new task..." aria-describedby="submit-button">
            <button class="btn btn-outline-secondary" type="button" id="submit-button">Add Task</button>
          </div>
          <!-- /.input-group -->
        </div>
      </div>
      <!-- /.container -->
      
    </div>
    <!-- /#app -->
    
    <!-- EXTERNAL VUE JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.min.js"></script>
    
    <!-- EXTERNAL PERSONAL JS -->
    <script src="./app.js"></script>
    
  </body>
  
</html>