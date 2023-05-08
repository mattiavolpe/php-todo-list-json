const { createApp } = Vue
  
createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      getTasksListUrl: "app/Http/Controllers/TasksController/index.php",
      updateTasksUrl: "app/Http/Controllers/TasksController/store.php"
    }
  },
  methods: {
    /**
     * Inserts a new task locally and, then, calls the API to update the remote tasks list
     */
    insertTask() {
      if(this.newTask === "") {
        return;
      }
      const newTaskObject = {
        task: this.newTask,
        completed: "false"
      }
      this.tasks.push(newTaskObject);
      this.newTask = "";
      this.updateTasks();
    },

    /**
     * Calls the API to update the remote tasks list by matching the JSON file content with the encoded tasks array
     */
    updateTasks() {
      axios.post(
        this.updateTasksUrl,
        this.tasks,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      .then(() => {
        console.info("API call successfull");
      })
      .catch(error => {
        console.error(error.message);
      })
    },

    /**
     * Updates the tasks list locally and, then, calls the API to update the remote tasks list by matching the JSON file content with the encoded tasks array
     * @param {Number} index The index of the element to remove / toggle the completion state
     * @param {String} operation The type of operation to execute
     */
    updateTasksLocally(index, operation) {
      if (operation === "completionToggle"){
        if (this.tasks[index].completed === "true") {
          this.tasks[index].completed = "false";
        } else {
          this.tasks[index].completed = "true";
        }
      } else {
        this.tasks.splice(index, 1);
      }
      this.updateTasks();
    }
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
}).mount('#app')
