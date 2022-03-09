const loadCartFromLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItem(name);
    }

}

const localStrogeFunc = () => {
    const nameInput = document.getElementById('name-input');
    if (nameInput.value) {
        displayItem(nameInput.value);
        addProductToCart(nameInput.value);
        nameInput.value = '';
    }

}


const displayItem = name => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;

    if (cart) {
        cartObj = JSON.parse(cart);

    } else {
        cartObj = {};
    }
    return cartObj;
};

const addProductToCart = name => {
    const cart = getCart();
    cart[name] = 1;
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfy);
}
loadCartFromLocalStorage();