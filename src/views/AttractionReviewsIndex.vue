<template>
  <div class="attraction-review">
    <h1>Attraction Reviews</h1>
    <div v-for="attraction_review in attraction_reviews">
      <h3>Fear Factor: {{ attraction_review.fear_factor }}</h3>
      <h3>Fun Factor: {{ attraction_review.fun_factor }}</h3>
      <p>Comments: {{ attraction_review.body }}</p>
      <p>User ID: {{ attraction_review.user_id }}</p>
      <p>Attraction ID: {{ attraction_review.attraction_id }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      attraction_reviews: []
    };
  },
  created: function() {
    axios
      .get("/api/attraction_reviews")
      .then(response => {
        this.attraction_reviews = response.data;
    });
  },
  methods: {}
};
</script>