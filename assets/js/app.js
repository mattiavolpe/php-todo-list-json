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
}).mount('#app')
