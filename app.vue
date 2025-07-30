<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">My Book List</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="book in books" :key="book.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
            <p class="card-text">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const books = ref([
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author 1',
    description: `This is a short description of the first book. It gives a glimpse into the content.`
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author 2',
    description: `Here is a brief summary of the second book, highlighting its main themes and plot.`
  },
  {
    id: 3,
    title: 'Book Title 3',
    author: 'Author 3',
    description: `A concise overview of the third book in the list, touching upon its genre and style.`
  },
  {
    id: 4,
    title: 'Book Title 4',
    author: 'Author 4',
    description: `This is a description for the fourth book, designed to pique the reader's interest.`
  },
  {
    id: 5,
    title: 'Book Title 5',
    author: 'Author 5',
    description: `A summary of the fifth book, providing just enough detail to be intriguing.`
  },
  {
    id: 6,
    title: 'Book Title 6',
    author: 'Author 6',
    description: `An engaging synopsis of the sixth book, encouraging you to discover more.`
  }
]);
</script>

<style>
.card {
  height: 100%;
}
</style>
