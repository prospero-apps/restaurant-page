import './style.css';
import { add } from './helpers';
import load_header from './header';
import MenuItem from './menuitem';

// images
import FishImage from './images/fish.jpg';
import PizzaImage from './images/pizza.jpg';
import PrawnsImage from './images/prawns.jpg';
import RiceImage from './images/rice.jpg';
import SalmonImage from './images/salmon.jpg';
import SoupImage from './images/soup.jpg';
import SteakImage from './images/steak.jpg';
import SushiImage from './images/sushi.jpg';

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

// menu items
const menuItems = [
    new MenuItem(
        'Fresh Fish',
        'Delicious fish straight from the Pacific Ocean. With French fries and onion.',
        24.99,
        FishImage
    ),
    
    new MenuItem(
        'Original American Pizza',
        'Pizza with cheese, mushrooms, tuna, tomatoes and olives. Diameter: 50cm',
        9.99,
        PizzaImage
    ),
    
    new MenuItem(
        'Prawns',
        'Juicy and crunchy at the same time. Fresh prawns from the waters of North America.',
        19.99,
        PrawnsImage
    ),
    
    new MenuItem(
        'Baked Rice',
        'Healthy and tasty. Full of vitamins. Baked in a huge oven in the cellar of our restaurant.',
        7.49,
        RiceImage
    ),
    
    new MenuItem(
        'Salmon with Vegetables',
        'Fresh salmon from the rivers of Alaska. Served with vegetables and sauce.',
        36.50,
        SalmonImage
    ),
    
    new MenuItem(
        'Tomato Soup',
        'Simple and tasty. Best before your main course. Optionally with pieces of meat.',
        6.50,
        SoupImage
    ),
    
    new MenuItem(
        'Beef Steak',
        'Juicy beef steak with French fries or potatoes and vegetables.',
        18.99,
        SteakImage
    ),
    
    new MenuItem(
        'Original Japanese Sushi',
        'Prepared according to an original Japanese recipe, very tasty.',
        24.99,
        SushiImage
    )
]

// create the menu
function createMenu() {

}

function load_menu_page() {
    load_header();

    /* CONTAINER */
    const container = add('div', 'container', 'menu-container', content);
  
    for(let i = 0; i < menuItems.length; i++) {
        container.appendChild(createMenuItem(menuItems[i]));
    }
}

export default load_menu_page;