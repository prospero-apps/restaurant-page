class MenuItem {
    constructor(name, description, price, imagePath) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }

    showName() {
        return this.name;
    }

    showDescription() {
        return this.description;
    }

    showPrice() {
        return '$' + this.price;
    }

    setImageSource() {
        return this.imagePath;
    }  
}

export default MenuItem;