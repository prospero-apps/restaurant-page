import './style.css';
import { add } from './helpers';
import {restaurant} from './restaurant';

function load_header() {
    const content = document.querySelector('#content');
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
}

// function load_home_page() {
//     const content = document.querySelector('#content');

//     /* HOME PAGE HEADER */
//     // add header
//     const header = add('div', 'header', 'main-header', content);

//     // add restaurant name
//     const restaurantName = add('p', 'name', 'main-name', header);
//     restaurantName.textContent = restaurant.showName();

//     // add tabs
//     const tabs = add('div', 'tabs', 'main-tabs', header);

//     const homeTab = add('p', 'tab', 'home-tab', tabs);
//     homeTab.textContent = 'Home';

//     const menuTab = add('p', 'tab', 'menu-tab', tabs);
//     menuTab.textContent = 'Menu';

//     const contactTab = add('p', 'tab', 'contact-tab', tabs);
//     contactTab.textContent = 'Contact Us';

//     /* CONTAINER */
//     const container = add('div', 'container', 'home-container', content);
    
//     // add semitransparent rectangle with text
//     const rectangle = add('div', 'rect', 'info', container);

//     const line1 = add('p', 'line', 'line1', rectangle);
//     line1.textContent = 'Hungry? What are you waiting for?'

//     const line2 = add('p', 'line', 'line2', rectangle);
//     line2.textContent = `We are a ${restaurant.description}.`;

//     const line3 = add('p', 'line', 'line3', rectangle);
//     line3.textContent = 'Come, eat and drink. Tasty like never before.'

//     const line4 = add('p', 'line', 'line4', rectangle);
//     line4.textContent = restaurant.address;
// }

export default load_header;