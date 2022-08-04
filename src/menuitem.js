class MenuItem {
    constructor(name, description, price, imagePath) {
        this.name = name;
        this.description = description;
        this.price = price;
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

    showImage() {
        const image = new Image()
        image.scr = imagePath;
    }       
}

export default MenuItem;