<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Главная страница</h2>
        <v-text-field v-model="name" label="Введите имя"></v-text-field>
        <v-text-field v-model="lastName" label="Введите фамилию"></v-text-field>
        <v-btn @click="goToResult" class="ok-button">OK</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
    };
  },
  methods: {
    goToResult() {
      this.$store.dispatch("updateFullName", `${this.name} ${this.lastName}`);
      this.$router.push({ name: "result" });
      // без Vuex можно передать fullName через query параметр:
      // this.$router.push({ name: 'result', query: { fullName: `${this.name} ${this.lastName}` }});
    },
  },
};
</script>

<style scoped>
.ok-button {
  background-color: #3f51b5;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.ok-button:hover {
  background-color: #2c387e;
}
</style>
