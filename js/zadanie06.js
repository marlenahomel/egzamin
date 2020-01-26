document.addEventListener("DOMContentLoaded", () => {
  
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");
    const shoppingList = document.getElementById("shopping-list");


    button1.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "chleb";
        shoppingList.appendChild(li);
    })

    button2.addEventListener("click", () => {
        shoppingList.children[shoppingList.children.length - 1].remove();
    })

    button3.addEventListener("click", () => {
        const lastElement = shoppingList.children[shoppingList.children.length - 1].cloneNode(true);
        shoppingList.appendChild(lastElement);
    })
})