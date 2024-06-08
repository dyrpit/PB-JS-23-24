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

  [Symbol.iterator]() {
    let currentIndex = 0;

    const next = () => {
      if (currentIndex < this.books.length) {
        const book = this.books[currentIndex];
        currentIndex++;
        return { value: book, done: false };
      } else {
        return { done: true };
      }
    };

    return { next };
  }
}

const a = new Book('Harry Potter 1', 'J.K. Rowling', 1997);
const b = new Book('Harry Potter 2', 'J.K. Rowling', 1998);
const c = new Book('Harry Potter 3', 'J.K. Rowling', 1999);

const libraryCatalog = new LibraryCatalog([a, b, c]);

// console.log(libraryCatalog);

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
