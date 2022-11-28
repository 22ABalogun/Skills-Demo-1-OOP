class cart{

    constructor (name, price, size, town){
    this.name = name
    this.price = price
    this.DeliveryFee = price + (price * 0.05)
    this.size = size
    this.town = town
    }

    AddToCart(){
        return "You have just added " + this.size + this.name + "(" + this.price +")" + " To your cart."
    }
    
    AddDelivery(){
        return "Item Price:  " + "£" + + this.price + ". Order Total Including Delivery at the cost of 5% of item going to " + this.town +  ": £" + this.DeliveryFee 
    }
}

var Cart = new cart("LG Tv ", 420, "32 inch ", "navan" )
console.log(Cart.AddToCart())
console.log(Cart.AddDelivery())

//TAKE SCREENSHOTS