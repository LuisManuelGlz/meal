<template>
  <div>
    <ul class="list-unstyled">
      <MealItem v-bind:meal="meal" v-for="meal in meals" :key="meal.idMeal" />
    </ul>
  </div>
</template>

<script>
import MealItem from "./MealItem";

export default {
  name: "MealList",
  props: ['meals'],
  components: {
    MealItem
  }
};
</script>

<style></style>
