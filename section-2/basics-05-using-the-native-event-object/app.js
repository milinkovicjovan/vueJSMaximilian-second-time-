const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      // we add lastname if the name is not empty
      return this.name + ' ' + 'Milinkovic';
    },
  },
  methods: {
    outputFullname() {},
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
