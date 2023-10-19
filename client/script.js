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
    async creaneContact() {
      const { ...contact } = this.form;

      this.contacts.push({ ...contact, id: Date.now() });
      await request("/api/contacts", "POST", contact);

      this.form.value = "";
      this.form.name = "";
    },

    async removeContact(id) {
      await request(`/api/contacts/${id}`, "delete");
      this.contacts = this.contacts.filter((element) => element.id !== id);
    },
  },

  async mounted() {
    this.contacts = await request("/api/contacts");
  },
};

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers["Content-Type"] = "appLication/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    return await response.json();
  } catch (e) {
    console.warn("Error", e.message);
  }
}

Vue.createApp(Counter).mount("#app");
