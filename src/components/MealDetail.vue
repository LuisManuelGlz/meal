<template>
  <div v-if="!isLoading">
    <div class="media" v-for="meal in meals" :key="meal.idMeal">
      <img
        v-bind:src="meal.strMealThumb"
        class="mr-3"
        v-bind:alt="meal.strMeal"
        width="300px"
      />
      <div class="media-body">
        <h5 class="mt-0">
          {{ meal.strMeal }} · <small>{{ meal.strCategory }}</small>
        </h5>
        <span v-if="meal.strTags != null">
          <span
            class="badge badge-success mr-1 mb-3"
            v-for="tag in meal.strTags.split(',')"
            :key="tag"
          >
            {{ tag }}
          </span>
        </span>
        <h5>Instructions</h5>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center">
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealDetail",
  props: ["idMeal"],
  data() {
    return {
      isLoading: true,
      meals: []
    };
  },
  created() {
    this.getMeal();
  },
  methods: {
    async getMeal() {
      const res = await this.axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.idMeal}`
      );
      this.meals = res.data.meals;
      this.isLoading = false;
    }
  }
};
</script>

<style></style>
