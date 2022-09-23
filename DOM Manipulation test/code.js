const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Hey I’m red!";
const h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3"
content.style.color = "red"
h3.style.color = "blue"
content.append(h3);
container.appendChild(content);

const div = document.createElement("div")
div.style.border = "3px solid black"
div.style.backgroundColor = "pink"
const h1 = document.createElement("h1")
h1.innerText = "I'm in a div"
div.textContent = "ME TOO!"
div.append(h1)

content.appendChild(div)
