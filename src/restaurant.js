class Restaurant {
    constructor(name, description, address, openingHours, telephone) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.openingHours = openingHours;
        this.telephone = telephone;
    }

    showName() {
        return this.name;
    }

    showDescription() {
        return this.description;
    }

    showAddress() {
        return this.address;
    }

    showOpeningHours() {
        return this.openingHours;
    }

    showTelephone() {
        return this.telephone;
    }
}

export default Restaurant;