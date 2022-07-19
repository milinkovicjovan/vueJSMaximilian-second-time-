const app = Vue.createApp({
  data() {
    return { userInput: '', confirmedInput: '' };
  },
  methods: {
    showAlert() {
      alert('Show Alert');
    },
    setName(event, lastName) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});
app.mount('#assignment');
