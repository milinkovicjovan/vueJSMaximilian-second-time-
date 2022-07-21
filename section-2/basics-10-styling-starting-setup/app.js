const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
        // this is now toggleable
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
        // this is now toggleable
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
        // this is now toggleable
      }
    },
  },
});

app.mount('#styling');
