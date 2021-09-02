const searchBook = () => {
    const searchField = document.getElementById("searchId");
    const searchText = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => searchBookResultLength(data));

    searchField.value = '';
    if (searchText === '') {
        const tag = document.createElement("h1");
        const text = document.createTextNode("Not Book found here");
        tag.appendChild(text);
        const element = document.getElementById("notfound");
        element.appendChild(tag);
    }
}

// search all results length start
const searchBookResultLength = (books) => {
    const bookDocs = books.docs;
    const element = document.getElementById("length");
    const div = document.createElement("div");
    div.innerHTML = `<h1>Total book found ${books.docs.length} pieces</h1>`;
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
            <img class="h-50" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="${book.strMealThumb}">
            <h3 class="card-title">Book: ${book.title}</h3>
            <h5 class="card-title">Writer: ${book.author_name ? book.author_name : "not found"}</h5>
            <p class="card-title">First published: ${book.first_publish_year ? book.first_publish_year :"not found"}</p>
        `
        searchResult.appendChild(div);
    });
}
// search book result end


{
    /* <div onclick="mealIds(${book.idMeal})" class="card h-100">
                    <img src="${book.strMealThumb}" class="card-img-top" alt="${book.strMealThumb}">
                <div class="card-body">
                        <h5 class="card-title">Book Name: ${book.title}</h5>
                        <p class="card-text">${book.strInstructions.slice(0,200)}....</p>
                  </div>
               </div> */
}