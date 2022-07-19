const app = Vue.createApp({
  data() {
    return {
      name: 'Jovan',
      age: 20,
      imageUrl:
        'https://imgs.search.brave.com/ev5IxBDc14A2NGB73Dz-llNKhmWFMEzI4yrycN7PJXI/rs:fit:438:438:1/g:ce/aHR0cHM6Ly93d3cu/Z3VpZGUyZHViYWku/Y29tL1BvcnRhbHMv/MC9JbWFnZXMvQnVz/aW5lc3MvMjY4MDIv/MDdjNTlmYjQtOTQz/NS00ZWUyLTk5NDkt/OGQ2YzUyN2ZiZDE0/X0NhciUyMFJlbnRh/bCUyMER1YmFpLmpw/Zw',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});
app.mount('#assignment');
