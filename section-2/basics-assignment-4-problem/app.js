const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisible: true,
      inputBackgroundColor: '',
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
      //this is togglable
    },
  },
});

app.mount('#assignment');
