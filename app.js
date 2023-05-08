const { createApp } = Vue
  
createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      getTasksListUrl: "getTasksList.php",
      sendTaskUrl: "sendTask.php",
      updateTaskUrl: "updateTasks.php"
    }
  },
  methods: {
    insertTask() {
      const payloadToSend = {
        task: this.newTask,
        completed: "false"
      }
      this.newTask = "";
      this.tasks.push(payloadToSend);
      this.sendTask(payloadToSend, this.sendTaskUrl);
    },
    sendTask(payload, apiUrl) {
      axios.post(
        apiUrl,
        payload,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      .then(response => {
        console.log(response);
        // UNNECESSARY ARRAY REASSIGNMENT
        // this.tasks = response.data;
      })
      .catch(error => {
        console.error(error.message);
      })
    },
    updateTasks(index, operation) {
      if (operation === "completionToggle"){
        if (this.tasks[index].completed === "true") {
          this.tasks[index].completed = "false";
        } else {
          this.tasks[index].completed = "true";
        }
      } else {
        this.tasks.splice(index, 1);
      }
      const payloadToSend = this.tasks;
      this.sendTask(payloadToSend, this.updateTaskUrl);
    }
  },
  mounted() {
    axios.get(this.getTasksListUrl)
    .then(response => {
      this.tasks = response.data;
    })
    .catch(error => {
      console.error(error.message);
    })
  },
}).mount('#app')
