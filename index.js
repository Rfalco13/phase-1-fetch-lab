function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error(error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});




