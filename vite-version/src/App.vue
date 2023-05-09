<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      axios,
      tasks: [],
      newTask: "",
      getTasksListUrl: "http://localhost:8888/php/php-todo-list-json/app/Http/Controllers/TasksController/index.php",
      updateTasksUrl: "http://localhost:8888/php/php-todo-list-json/app/Http/Controllers/TasksController/store.php"
    }
  },
  methods: {
    /**
     * Sets the payload with data to add a new task and, then, calls the API to update the remote tasks list
    */
    insertTask() {
      if(this.newTask === "") {
        return;
      }
      const payload = {
        "newTask": this.newTask,
        "operation": "addTask"
      }
      this.updateTasks(payload);
      this.newTask = "";
    },

    /**
     * Sets the payload with data to toggle the completed state and, then, calls the API to update the remote tasks list
    */
    toggleState(index) {
      const payload = {
        "index": index,
        "operation": "toggleState"
      }
      this.updateTasks(payload);
    },

    /**
     * Sets the payload with data to delete a task and, then, calls the API to update the remote tasks list
    */
    deleteTask(index) {
      const payload = {
        "index": index,
        "operation": "deleteTask"
      }
      this.updateTasks(payload);
    },

    /**
     * Calls the API to update the remote tasks list by matching the JSON file content with the encoded tasks array
    */
    updateTasks(payload) {
      axios.post(
        this.updateTasksUrl,
        payload,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      .then(response => {
        console.info("API call successfull");
        this.tasks = response.data;
      })
      .catch(error => {
        console.error(error.message);
      })
    },
  },
  mounted() {
    // Retrieves the tasks list stored in the remote JSON file
    axios.get(this.getTasksListUrl)
    .then(response => {
      this.tasks = response.data;
    })
    .catch(error => {
      console.error(error.message);
    })
  },
}
</script>

<template>
  <div class="container">
    <div class="py-5">
      <h1 class="text-warning text-center mb-5">Full-Stack Web Development To-Do List</h1>
      <ul class="list-unstyled text-dark rounded-3 bg-light mb-4">
        <li v-for="(task, index) in tasks" :class="task.completed ? 'completed' : ''" class="d-flex align-items-center justify-content-between p-3">
          <h5 @click="toggleState(index)" class="mb-0">{{ task.task }}</h5>
          <button @click="deleteTask(index)" class="btn btn-danger">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </li>
      </ul>
      <!-- /.list-unstyled -->
      <div class="input-group">
        <input @keyup.enter="insertTask()" v-model.trim="newTask" type="text" class="form-control" placeholder="Insert a new task..." aria-label="Insert a new task..." aria-describedby="submit-button">
        <button @click="insertTask()" class="btn btn-outline-warning" type="button" id="submit-button">Add Task</button>
      </div>
      <!-- /.input-group -->
    </div>
  </div>
  <!-- /.container -->
</template>

<style>
</style>
