const Counter = {
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
      contacts: [],
    };
  },
  methods: {
    creaneContact() {
      const { ...contact } = this.form;
      [].length;
      this.contacts.push({ ...contact, id: Date.now() });

      this.form.value = this.form.name = "";
    },

    markContact() {},
  },
};

Vue.createApp(Counter).mount("#app");
