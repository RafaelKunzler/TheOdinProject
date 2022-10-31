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

const book1 = new Book("A revolução dos bichos", "George Orwell", 152, true);
myLibrary.push(book1);
bookId++;

const book2 = new Book("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 208, true);
myLibrary.push(book2);
bookId++;

const book3 = new Book("Cracking the Code Interview","Gayle Laakmann McDowell", 708, false);
myLibrary.push(book3);
bookId++;

const book4 = new Book("Think Like a Programmer", "V. Anton Spraul", 256, true);
myLibrary.push(book4);
bookId++;

function addCard(book) {
    const newDiv = document.createElement("div");
    styleCard(newDiv);
    newDiv.classList.add("bookContainer"); 
    newDiv.classList.add("book" + bookId); 
    isBookRead(book, newDiv);    
    container.appendChild(newDiv);       
}

function styleCard(newDiv) {
    newDiv.innerHTML = `
    <div class="bookInfo">
        <div><button class="view view${bookId}" id="${bookId}" onclick="changeRead(this.id)"><img src="/img/view.png" class="icon viewIcon"></button></div>
            <div class="bookTitle" id="bookName${bookId}">            
            </div>
            <div class ="author" id="author${bookId}">            
            </div>
        </div>
        <div class="bottomBookContainer">
            <div class="pages">
                <div><img src="/img/open-book.png" class="icon bookIcon"></div>
                <h4>|   </h4>
                <div class="page" id="page${bookId}"></div>
            </div>
            <div><button class="removeBook remove${bookId}" id="${bookId}" onclick="removeBook(this.id)"><img src="/img/bin.png" class="icon binIcon"></button></div>
    </div>`;   
}

function isBookRead(book, newDiv){
    const view = newDiv.querySelector(".view" + bookId);  
    const remove = newDiv.querySelector(".remove" + bookId);
    if(book.read == true) {
        newDiv.classList.add("read");
        view.classList.add("read");
        remove.classList.add("read");
    } else if(book.read == false) {
        newDiv.classList.add("unread");
        view.classList.add("unread");
        remove.classList.add("unread");
    }
}

function displayCards() {    
    deleteAllCards();
    addAllCards();        
}

function deleteAllCards() {
    let elem = document.querySelectorAll(".bookContainer");
    [].forEach.call(elem, function(el) {
        el.remove();
    });
}

function addAllCards() {
    bookId = 0
    myLibrary.forEach((book) => {
        addCard(book);          
        const bookName = document.getElementById("bookName" + bookId);
        bookName.textContent = book.bookName;
        const author = document.getElementById("author" + bookId);
        author.textContent = book.author;
        const page = document.getElementById("page" + bookId); 
        page.textContent = book.pages;    
        bookId++ ;   
     }); 
}

function addBookToLibrary() {
    const bookName = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(bookName, author, pages, read);
    myLibrary.push(book);       
    document.getElementById("bookForm").reset();
    closeForm();
    displayCards();        
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

function changeRead(obj) {     
    const id = obj;
    const bookCard = document.querySelector(".book" + id);
    const view = document.querySelector(".view" + id);
    const remove = document.querySelector(".remove" + id);  

    const book = myLibrary[id];
    if(book.read == true) {
        bookCard.classList.remove("read");
        view.classList.remove("read");
        remove.classList.remove("read");
        bookCard.classList.add("unread");
        view.classList.add("unread");
        remove.classList.add("unread");        
        book.read = false;

    } else if(book.read == false) {
        bookCard.classList.remove("unread");
        view.classList.remove("unread");
        remove.classList.remove("unread");
        bookCard.classList.add("read");
        view.classList.add("read");
        remove.classList.add("read");  
        book.read = true;     
    }
}

function removeBook(id) { 
    const book = document.querySelector(".book" + id)   
    book.remove();
    myLibrary.splice(id, 1);    
    displayCards();
}

displayCards();

