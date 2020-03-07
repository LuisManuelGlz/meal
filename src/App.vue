<template>
  <div class="container mt-5">
    <div class="row">
      <img class="mr-2" alt="Vue logo" src="./assets/logo.png" width="40px" />
      <h3>The Best Meal App xd</h3>
    </div>
    <SearchBar v-bind:search="search" v-bind:updateSearchValue="updateSearchValue" />
    <MealList v-bind:meals="filteredMeals" />
  </div>
</template>

<script>
import SearchBar from "./components/SerachBar";
import MealList from "./components/MealList";

export default {
  name: "App",
  components: {
    SearchBar,
    MealList
  },
  data() {
    return {
      search: '',
      meals: []
    };
  },
  created() {
    this.getMeals();
  },
  methods: {
    async getMeals() {
      const res = await this.axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      this.meals = res.data.meals;
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
