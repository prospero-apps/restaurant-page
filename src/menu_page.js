import './style.css';
import { add } from './helpers';
import load_header from './header';
import MenuItem from './menuitem';
import FishImage from './images/fish.jpg';

// create a menu item
function createMenuItem(menuItem) {    
    const menuElement = document.createElement('div');
    menuElement.className = 'menu-element';
    
    const menuImage = add('img', 'menu-image', 'image' + `_${menuItem.showName()}`, menuElement);
    menuImage.src = menuItem.setImageSource();

    const menuItemHeader = add('div', 'menu-item-header', 'header' + `_${menuItem.showName()}`, menuElement);
    
    const menuItemName = add('p', 'menu-item-name', 'item' + `_${menuItem.showName()}`, menuItemHeader);
    menuItemName.textContent = menuItem.showName();

    const menuItemPrice = add('p', 'menu-item-price', 'price' + `_${menuItem.showName()}`, menuItemHeader);
    menuItemPrice.textContent = menuItem.showPrice();

    const menuItemDescription = add('p', 'menu-item-description', 'description' + `_${menuItem.showName()}`, menuElement);
    menuItemDescription.textContent = menuItem.showDescription();

    return menuElement;
}

const menuItem1 = new MenuItem(
    'Fresh Fish',
    'Delicious fish straight from the Pacific Ocean. With French fries and onion.',
    24.99,
    FishImage
)

// create the menu
function createMenu() {

}

function load_menu_page() {
    load_header();

    /* CONTAINER */
    const container = add('div', 'container', 'home-container', content);

    container.appendChild(createMenuItem(menuItem1));
}





export default load_menu_page;