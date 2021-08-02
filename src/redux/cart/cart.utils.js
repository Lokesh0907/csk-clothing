export const addItemToCart = (cartItems, newItem) => {
    var isUpdated = false;

    var updatedCartItems = cartItems.map(cartItem => {
        if(cartItem.id===newItem.id){
            isUpdated=true;
            return {...cartItem,quantity:cartItem.quantity+1}
        }
        return cartItem;
    });

    if(isUpdated){
        return updatedCartItems;
    }
    else{
        return [...cartItems,{...newItem,quantity:1}];
    }

}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id===itemToBeRemoved.id);

    if(existingCartItem.quantity>1){
        var updatedCartItems = cartItems.map(cartItem => {
            if(cartItem.id===itemToBeRemoved.id){
                return {...cartItem,quantity:cartItem.quantity-1};
            }
            return cartItem;
        });
        return updatedCartItems;
    }
    return cartItems.filter( cartItem => cartItem.id!==itemToBeRemoved.id)
}