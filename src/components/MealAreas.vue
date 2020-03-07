<template>
  <div v-if="!isLoading">
    <SearchBar v-bind:updateSearchValue="updateSearchValue" />
    <ul class="list-group list-group-flush">
      <AreaItem
        v-bind:area="area"
        v-for="area in filteredAreas"
        :key="area.strArea"
      />
    </ul>
  </div>
  <div v-else class="spinner-grow text-success" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
import SearchBar from "./SerachBar";
import AreaItem from "./AreaItem";

export default {
  name: "MealAreas",
  components: {
    SearchBar,
    AreaItem
  },
  data() {
    return {
      search: "",
      areas: [],
      isLoading: true
    };
  },
  created() {
    this.getAreas();
  },
  methods: {
    async getAreas() {
      const res = await this.axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      this.isLoading = false;
      this.areas = res.data.meals;
    },
    updateSearchValue(searchValue) {
      this.search = searchValue;
    }
  },
  computed: {
    filteredAreas() {
      return this.areas.filter(area => {
        return area.strArea.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style></style>
