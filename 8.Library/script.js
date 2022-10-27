let myLibrary = [];
let bookId = 0;
const container = document.getElementById("container");

function Book(bookName, author, pages, read) {
    this.bookName = bookName,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.bookId = bookId;
}

const book1 = new Book("A revolução dos bichos", "George Orwell", 152, "on");
myLibrary.push(book1);
bookId++;
const book2 = new Book("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 208, 1);
myLibrary.push(book2);
bookId++;

function addCard() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div><img src="/img/view.png" class="icon viewIcon"></div>
    <div class="bookInfo">
        <div class="bookTitle" id="bookName`+ bookId + `">
            
        </div>
        <div id="author` + bookId +`">
            
        </div>
    </div>
    <div class="bottomBookContainer">
        <div class="pages">
            <div><img src="/img/open-book.png" class="icon bookIcon"></div>
            <h4>|   </h4>
            <div id="page`+ bookId + `"></div>
        </div>
        <div><img src="/img/bin.png" class="icon binIcon"></div>
    </div>`;   
    newDiv.classList.add("bookContainer");
    container.appendChild(newDiv); 
    
}

function displayCard() {    
    let elem = document.querySelectorAll(".bookContainer");
    [].forEach.call(elem, function(el) {
        el.remove();
    });
    bookId = 0
    myLibrary.forEach((book) => {
        addCard();          
        const bookName = document.getElementById("bookName" + bookId);
        bookName.textContent = book.bookName;
        const author = document.getElementById("author" + bookId);
        author.textContent = book.author;
        const page = document.getElementById("page" + bookId); 
        page.textContent = book.pages;       
        if(book.read != 1){
            
        }     
        bookId++ ;         
     });       
     console.log(myLibrary);
}

function addBookToLibrary() {
    const bookName = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let book = new Book(bookName, author, pages, read);
    myLibrary.push(book);       
    document.getElementById("bookForm").reset();
    closeForm();
    displayCard();    
}



function openForm() {
    document.getElementById("addBook").style.display = "block";
    document.getElementById("addContainer").style.display = "none";
}

function closeForm() {
    document.getElementById("addBook").style.display = "none";
    document.getElementById("addContainer").style.display = "flex" 
    document.getElementById("bookForm").reset();   
}

function changeRead() {
    
}

