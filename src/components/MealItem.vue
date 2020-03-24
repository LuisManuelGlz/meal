<template>
  <li class="media p-2">
    <img
      v-bind:src="meal.strMealThumb"
      class="mr-3"
      v-bind:alt="meal.strMeal"
      width="100px"
    />
    <div class="media-body">
      <h5 class="mt-0 mb-1">
        <router-link
          :to="{ name: 'meal-detail', params: { idMeal: meal.idMeal } }"
          class="nav-link"
        >
          {{ meal.strMeal }}
        </router-link>
      </h5>
      <p class="ml-3">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
        lacinia congue felis in faucibus.
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "MealItem",
  props: ["meal"]
};
</script>

<style></style>
