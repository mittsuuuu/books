<template>
  <div class="expanded-detail-container">
    <div class="row">
      <div class="col-md-4">
        <img :src="book.imageUrl" class="img-fluid" :alt="book.title">
      </div>
      <div class="col-md-8">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Rating:</strong> <span v-for="n in 5" :key="n" class="star">{{ n <= book.rating ? '★' : '☆' }}</span></p>
        <p><strong>Review:</strong> {{ book.review }}</p>
        <a :href="book.amazonLink" class="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">View on Amazon</a>
        <button class="btn btn-secondary mt-3 ms-2" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
});
defineEmits(['close']);
</script>

<style scoped>
.expanded-detail-container {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.star {
  color: #ffc107;
  font-size: 1.5rem;
}
.img-fluid {
  max-height: 400px;
  object-fit: contain;
  width: 100%;
}
</style>
