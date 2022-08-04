import './style.css';
import Restaurant from './restaurant';

// create the restaurant object
const restaurant = new Restaurant(
    'Food Place',
    'decent little downtown restaurant',
    '242 Park Road, Glutton City, 455778',
    'Mon-Fri: 4pm-10pm, Sat-Sun: 4pm-11pm',
    '(444)-222 7777'
)

// add DOM element
function add(tag, cls, id, parent) {
    const element = document.createElement(tag);
    element.className = cls;
    element.id = id;
    parent.appendChild(element);
    return element;
}

function load_page() {
    const content = document.querySelector('#content');

    /* HOME PAGE HEADER */
    // add header
    const header = add('div', 'header', 'main-header', content);

    // add restaurant name
    const restaurantName = add('p', 'name', 'main-name', header);
    restaurantName.textContent = restaurant.showName();

    // add tabs
    const tabs = add('div', 'tabs', 'main-tabs', header);

    const homeTab = add('p', 'tab', 'home-tab', tabs);
    homeTab.textContent = 'Home';

    const menuTab = add('p', 'tab', 'menu-tab', tabs);
    menuTab.textContent = 'Menu';

    const contactTab = add('p', 'tab', 'contact-tab', tabs);
    contactTab.textContent = 'Contact Us';

    // add semitransparent rectangle with text
    const rectangle = add('div', 'rect', 'info', content);

    const line1 = add('p', 'line', 'line1', rectangle);
    line1.textContent = 'Hungry? What are you waiting for?'

    const line2 = add('p', 'line', 'line2', rectangle);
    line2.textContent = `We are a ${restaurant.description}.`;

    const line3 = add('p', 'line', 'line3', rectangle);
    line3.textContent = 'Come, eat and drink. Tasty like never before.'

    const line4 = add('p', 'line', 'line4', rectangle);
    line4.textContent = restaurant.address;
}

export default load_page;