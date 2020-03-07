<template>
  <form id="searchbar" class="form-inline my-3">
    <input
      v-bind:search="search"
      v-on:input="updateSearchValue($event.target.value)"
      class="form-control col-12"
      type="search"
      placeholder="Filter"
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
