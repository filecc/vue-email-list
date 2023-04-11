(() => {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        list: [],
      };
    },
    methods: {
      getEmails() {
        const URL = "https://flynn.boolean.careers/exercises/api/random/mail";

        for (let i = 0; i < 10; i++) {
          axios.get(URL).then((response) => {
            this.list.push(response.data.response);
          });
        }    
      },
    },
    mounted() {
      this.getEmails();
    },
  }).mount("#app");
})();
