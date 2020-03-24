<template>
  <div v-if="!isLoading">
    <SearchBar v-bind:updateSearchValue="updateSearchValue" />
    <ul class="list-unstyled">
      <MealItem
        v-bind:meal="meal"
        v-for="meal in filteredMeals"
        :key="meal.idMeal"
      />
    </ul>
  </div>
  <div v-else class="d-flex justify-content-center">
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SerachBar";
import MealItem from "./MealItem";

export default {
  name: "MealList",
  props: ["strArea"],
  components: {
    SearchBar,
    MealItem
  },
  data() {
    return {
      search: "",
      isLoading: true,
      meals: []
    };
  },
  created() {
    this.getMeals();
  },
  methods: {
    async getMeals() {
      const res = await this.axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.strArea}`
      );
      this.meals = res.data.meals;
      this.isLoading = false;
    },
    updateSearchValue(searchValue) {
      this.search = searchValue;
    }
  },
  computed: {
    filteredMeals() {
      return this.meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style></style>
