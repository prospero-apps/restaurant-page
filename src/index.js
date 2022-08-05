import load_home_page from './home_page';
import load_menu_page from './menu_page';
import load_contact_page from './contact_page';

import { add } from './helpers';
import {restaurant} from './restaurant';

const content = document.querySelector('#content');
const header = add('div', 'header', 'main-header', content);

// add restaurant name
const restaurantName = add('p', 'name', 'main-name', header);
restaurantName.textContent = restaurant.showName();

// add tabs
const tabs = add('div', 'tabs', 'main-tabs', header);

const homeTab = add('p', 'tab', 'home-tab', tabs);
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => { 
    content.replaceChild(load_home_page(), content.childNodes[1]);
});

const menuTab = add('p', 'tab', 'menu-tab', tabs);
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => { 
    content.replaceChild(load_menu_page(), content.childNodes[1]);
});

const contactTab = add('p', 'tab', 'contact-tab', tabs);
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', () => { 
    content.replaceChild(load_contact_page(), content.childNodes[1]);
});

content.appendChild(load_home_page());