<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="d-flex justify-content-center">
      <div class="form-group">
        <input
          v-model="book"
          ref="input"
          @input="filterBooks"
          @focus="showListGroup = true"
          autocomplete="off"
          type="text"
          class="form-control"
          placeholder="Enter at least 3 letters of the book you are looking for"
        />
      </div>
    </div>
    <div>
      <div v-if="filteredBooks && showListGroup">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="book in filteredBooks"
            v-bind:key="book"
            @click="setBook(book)"
          >
            {{ book }}
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      testVar: "",
      book: "",
      filteredBooks: [],
      showListGroup: false
    };
  },
  /* 
		Commenting this out, but it is another way 
	  to utilize the store data in the methods (line 57 & 63)
	*/
  // computed: {
  //   books() {
  //     return this.$store.getters["bks/books"];
  //   }
  // },
  methods: {
    // Build new array by filtering books with user input
    filterBooks() {
      if (this.book.length >= 3) {
        // let filteredBooksScoped = this.books.filter( // Use computed property
        let filteredBooksScoped = this.$store.getters["bks/books"].filter(
          (book) => book.title.toLowerCase().match(this.book.toLowerCase())
        );

        if (filteredBooksScoped.length == 0) {
          // filteredBooksScoped = this.books.filter( // Use computed property
          filteredBooksScoped = this.$store.getters["bks/books"].filter(
            (book) => book.author.toLowerCase().match(this.book.toLowerCase())
          );
        }

        if (filteredBooksScoped.length > 0) {
          for (let i = 0; i < filteredBooksScoped.length; i++) {
            let arrayString =
              filteredBooksScoped[i].title +
              " by " +
              filteredBooksScoped[i].author;

            if (!this.filteredBooks.includes(arrayString)) {
              this.filteredBooks.push(arrayString);
            }
          }
        } else {
          this.filteredBooks = [];
        }

        this.showListGroup = true;
      } else {
        this.filteredBooks = [];
        this.showListGroup = false;
      }
    },
    // Set the book variable when a list group item is clicked
    setBook(book) {
      this.book = book;
      this.showListGroup = false;
    },
    setFocus() {
      // Set focus on text box when component is loaded
      this.$refs.input.focus();
    }
  },
  created() {
    // Use nextTick to fire off setFocus function
    this.$nextTick(() => this.setFocus());
  }
};
</script>
