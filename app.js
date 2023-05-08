const { createApp } = Vue
  
createApp({
  data() {
    return {
      tasks: [],
      getTasksListUrl: "getTasksList.php",
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
