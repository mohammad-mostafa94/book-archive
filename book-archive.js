
// fetch("https://openlibrary.org/search.json?q=hello")
// .then(response => response.json())
// .then(data => console.log(data.docs));

// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
// fetch(url)
// .then(response => response.json())
// .then(data => searchBookResultLength(data.books))

const searchBook = ()=> {
    const searchField = document.getElementById("searchId");
    const searchText = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => searchBookResultLength(data));
    // .then(data => searchBookResultLength(data.docs));

    searchField.value = '';
    if (searchText === '') {
        const tag = document.createElement("h1");
        const text = document.createTextNode("Not Book found here");
        tag.appendChild(text);
        const element = document.getElementById("notfound");
        element.appendChild(tag);
    }
}

// search all results
const searchBookResultLength = (books) =>{
    console.log(books.numFound);
    const bookDocs = books.docs;
        const element = document.getElementById("length");
        const div = document.createElement("div");
            div.innerHTML = `<h1>Total book found ${books.numFound} pieces</h1>`;
            element.appendChild(div);
            searchBookResult(bookDocs);
            

    
}

const searchBookResult = findBooks =>{

    const searchResult = document.getElementById("searchResult");
    searchResult.textContent= '';
    console.log(findBooks.length);
    console.log(findBooks);
    findBooks.forEach(book => {
            console.log("book",book);
            console.log("book - title",book.title);
            // console.log("book-text-lenght",book.text.length);
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
            <h3 class="card-title">Book: ${book.title}</h3>
            <h5 class="card-title">Author: ${book.author_name ? book.author_name : "not found"}</h5>
            <p class="card-title">First published: ${book.first_publish_year ? book.first_publish_year : "not found"}</p>
        `
        searchResult.appendChild(div);
        });
}

{/* <div onclick="mealIds(${book.idMeal})" class="card h-100">
                <img src="${book.strMealThumb}" class="card-img-top" alt="${book.strMealThumb}">
            <div class="card-body">
                    <h5 class="card-title">Book Name: ${book.title}</h5>
                    <p class="card-text">${book.strInstructions.slice(0,200)}....</p>
              </div>
           </div> */}