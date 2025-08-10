<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">My Book List</h1>

    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="alert alert-danger">Failed to load books.</div>

    <div v-else-if="bookRows" class="book-grid-container">
      <template v-for="(row, rowIndex) in bookRows" :key="rowIndex">
        <transition-group name="book-item-fade" tag="div" class="row">
          <template v-for="book in row" :key="book.id">
            <div 
              class="book-item mb-4" 
            >
              <transition name="book-card-fade-slide">
                <div 
                  class="card"
                  @click="toggleBookDetail(book, rowIndex)"
                  v-show="!(selectedBook && selectedBook.id === book.id && expandedRowIndex === rowIndex)"
                >
                  <img :src="book.imageUrl" class="card-img-top" :alt="book.title">
                </div>
              </transition>
            </div>
          </template>
        </transition-group>

        <transition name="expand">
          <div v-if="expandedRowIndex === rowIndex" class="row">
            <BookDetailExpanded 
              :book="selectedBook" 
              @close="closeBookDetail" 
            />
          </div>
        </transition>
      </template>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import BookDetailExpanded from './components/BookDetailExpanded.vue';

// --- Data Fetching ---
const { data: books, pending, error } = useFetch('./books.json', {
  lazy: true,
  server: false
});

// --- State ---
const selectedBook = ref(null);
const expandedRowIndex = ref(null);
const windowWidth = ref(0);

// --- Event Handlers ---
const toggleBookDetail = (book, rowIndex) => {
  if (selectedBook.value && selectedBook.value.id === book.id) {
    closeBookDetail();
  } else {
    selectedBook.value = book;
    expandedRowIndex.value = rowIndex;
  }
};

const closeBookDetail = () => {
  selectedBook.value = null;
  expandedRowIndex.value = null;
};

// --- Responsive Logic ---
const columns = computed(() => {
  if (windowWidth.value > 992) return 3;
  if (windowWidth.value > 768) return 2;
  return 1;
});

const bookRows = computed(() => {
  if (!books.value) return [];
  const rows = [];
  for (let i = 0; i < books.value.length; i += columns.value) {
    rows.push(books.value.slice(i, i + columns.value));
  }
  return rows;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<style>
.book-item {
  flex: 0 1 32%;
  max-width: 32%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.book-item:hover {
    transform: scale(1.05);
}

.card {
  aspect-ratio: 1 / 1;
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Transition for the book item itself --- */
.book-card-fade-slide-leave-active {
  transition: all 0.5s ease-out;
}

.book-card-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.book-card-fade-slide-enter-active {
  transition: all 0.5s ease-in;
}

.book-card-fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

/* --- Transition for Expansion --- */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
  max-height: 500px; /* Adjust based on content */
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

/* --- Responsive Grid --- */
@media (max-width: 992px) {
  .book-item {
    flex: 0 1 48%;
    max-width: 48%;
  }
}

@media (max-width: 768px) {
  .book-item {
    flex: 0 1 100%;
    max-width: 100%;
  }
}
</style>
