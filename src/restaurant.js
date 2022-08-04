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

// create the restaurant object
const restaurant = new Restaurant(
    'Food Place',
    'decent little downtown restaurant',
    '242 Park Road, Glutton City, 455778',
    'Mon-Fri: 4pm-10pm, Sat-Sun: 4pm-11pm',
    '(444)-222 7777'
)

export default Restaurant;
export { restaurant };