(() => {
  class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }

    rate(rating) {
      this.rating = rating;
    }
  }

  class LibraryCatalog {
    constructor(books = []) {
      this.books = books;
    }

    *[Symbol.iterator]() {
      for (let i = 0; i < this.books.length; i++) {
        const book = this.books[i];
        yield book;
      }
      return;
    }
  }

  // class LibraryCatalog {
  //   constructor(books = []) {
  //     this.books = books;
  //   }

  //   [Symbol.iterator]() {
  //     let currentIndex = 0;
  //     const next = () => {
  //       if (currentIndex < this.books.length) {
  //         const book = this.books[currentIndex];
  //         currentIndex++;
  //         return { value: book, done: false };
  //       } else {
  //         return { done: true };
  //       }
  //     };

  //     return { next };
  //   }
  // }

  const a = new Book(
    "Harry Potter and the Philosopher's Stone",
    'J. K. Rowling',
    1997
  );
  const b = new Book(
    'Harry Potter and the Chamber of Secrets',
    'J. K. Rowling',
    1998
  );
  const c = new Book(
    'Harry Potter and the Prisoner of Azkaban',
    'J. K. Rowling',
    1999
  );
  console.log(a, b, c);
  const libraryCatalog = new LibraryCatalog([a, b, c]);

  console.log(libraryCatalog);

  function rateBooks() {
    for (const book of libraryCatalog) {
      console.log(book);
      const rating = prompt(
        `Input rating for ${book.title}, written by ${book.author} in ${book.year}`
      );
      book.rate(rating);
    }
  }

  rateBooks();
  console.log(libraryCatalog.books);
})();
