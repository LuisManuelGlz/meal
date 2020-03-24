<template>
  <div class="container my-5">
    <div class="row justify-content-center mb-5">
      <img class="mr-2 mb-2" alt="Vue logo" src="./assets/logo.png" width="56px" height="56px" />
      <router-link :to="{ name: 'meal-areas' }" class="nav-link">
        <h3>The Best Meal App xd</h3>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
