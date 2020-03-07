<template>
  <form class="form-inline my-3">
    <input
      v-bind:search="search"
      v-on:input="updateSearchValue($event.target.value)"
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
    />
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["search", "updateSearchValue"]
};
</script>

<style></style>
