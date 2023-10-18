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

    markContact(id) {
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = true;
    },
    removeContact(id) {
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
};

function request(url, method = "GET") {
  try {
    const headers = "";

    fetch(url, {
      method,
    });
    
  } catch (e) {
    console.warn("Error", e.message);
  }
}

Vue.createApp(Counter).mount("#app");
