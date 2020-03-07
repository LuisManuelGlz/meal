<template>
  <li class="list-group-item">
    <router-link
      :to="{ name: 'meal-list', params: { strArea: area.strArea } }"
      >{{ area.strArea }}</router-link
    >
  </li>
</template>

<script>
export default {
  name: "AreaItem",
  props: ["area"]
};
</script>

<style></style>
