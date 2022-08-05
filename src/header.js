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

export default load_header;