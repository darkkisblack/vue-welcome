<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col>
        <h2 class="greeting-title">Привет {{ fullNameOfUser }}!</h2>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <p class="random-data-text">Рандомные данные: {{ randomData }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      randomData: "",
    };
  },

  computed: {
    ...mapGetters(["getFullName"]),
    fullNameOfUser() {
      return this.getFullName;
      // либо, с использованием query параметра:
      // return this.$route.query.fullName || 'пользователь';
    },
  },

  mounted() {
    this.fetchRandomData();
  },
  methods: {
    async fetchRandomData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        this.randomData = data.title;
      } catch (error) {
        console.error("Ошибка при запросе к JSONPlaceholder", error);
      }
    },
  },
};
</script>
<style scoped>
.greeting-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.random-data-text {
  font-size: 16px;
  color: #666;
}
</style>
