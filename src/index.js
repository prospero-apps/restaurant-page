import './style.css';
import Restaurant from './restaurant';
import MenuItem from './menuitem';

// import RestaurantImage from './images/restaurant.jpg';
//import FishImage from './images/fish.jpg';

const restaurant = new Restaurant(
    'Food Place',
    'A decent little downtown restaurant.\nEat, drink and enjoy.',
    '242 Park Road\n Glutton City, 455778',
    'Mon-Fri: 4pm-10pm\nSat-Sun: 4pm-11pm',
    '(444)-222 7777'
)

const content = document.querySelector('#content');

function add(tag, cls, id, parent) {
    const element = document.createElement(tag);
    element.className = cls;
    element.id = id;
    parent.appendChild(element);
    return element;
}

/* HEADER */
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



// add semitransparent rectangle
const rectangle = add('div', 'rect', 'info', content);
// add(content, rectangle);







// document.body.appendChild(rectangle);

// content.appendChild('rectangle');



// function component() {




//     const element = document.createElement('div');
//     const fishImage = new Image();
//     fishImage.src = FishImage;
//     element.appendChild(fishImage);     
 
//     return element;
//   }

// document.body.appendChild(component());

