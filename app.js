const { createApp } = Vue
  
createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      getTasksListUrl: "getTasksList.php",
      sendTaskUrl: "sendTask.php"
    }
  },
  methods: {
    insertTask() {
      this.tasks.push({
        task: this.newTask,
        completed: false
      });
      this.sendTask();
    },
    sendTask() {
      const payload = {
        task: this.newTask,
        completed: false
      }
      axios.post(
        this.sendTaskUrl,
        payload,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      .then(response => {
        // UNNECESSARY ARRAY REASSIGNMENT
        this.tasks = response.data;
      })
      .catch(error => {
        console.error(error.message);
      })
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
