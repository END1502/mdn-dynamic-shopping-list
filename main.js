const list = document.querySelector("ul");

const itm = document.querySelector("input");

const submitBtn = document.querySelector("button");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const listElement = itm.value;
    itm.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(delBtn);

    span.textContent = listElement;
    delBtn.textContent = "Delete";

    list.appendChild(listItem);

    delBtn.addEventListener('click', () => {
        listItem.remove();
        itm.focus();
    })
})

itm.focus();
