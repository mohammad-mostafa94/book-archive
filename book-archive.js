const searchBook = () => {
    const searchField = document.getElementById("searchId");
    const searchText = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => searchBookResultLength(data));

    searchField.value = '';
}

// search all results length start
const searchBookResultLength = (books) => {
    const bookDocs = books.docs;
    const element = document.getElementById("length");
    element.textContent = '';
    const div = document.createElement("div");
    div.innerHTML = `<h1>Books are ${books.docs.length === 0 ? "  not " : books.docs.length} found</h1>`;
    element.appendChild(div);
    searchBookResult(bookDocs);
}
// search all results length end

// search book result start
const searchBookResult = findBooks => {

    const searchResult = document.getElementById("searchResult");
    searchResult.textContent = '';
    const slicedFindBooks = findBooks.slice(0, 12);
    slicedFindBooks.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <img class="h-50" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="${book.cover_i}">
            <h3 class="card-title">Book: ${book.title}</h3>
            <h5 class="card-title">Writer: ${book.author_name ? book.author_name : "not found"}</h5>
            <p class="card-title">First published: ${book.first_publish_year ? book.first_publish_year : "not found"}</p>
        `
        searchResult.appendChild(div);
    });
}
// search book result end