import './style.css';
import { add } from './helpers';
import {restaurant} from './restaurant';
import load_header from './header';

function load_home_page() {
    load_header();

    /* CONTAINER */
    const container = add('div', 'container', 'home-container', content);
    
    // add semitransparent rectangle with text
    const rectangle = add('div', 'rect', 'info', container);

    const line1 = add('p', 'line', 'line1', rectangle);
    line1.textContent = 'Hungry? What are you waiting for?'

    const line2 = add('p', 'line', 'line2', rectangle);
    line2.textContent = `We are a ${restaurant.description}.`;

    const line3 = add('p', 'line', 'line3', rectangle);
    line3.textContent = 'Come, eat and drink. Tasty like never before.'

    const line4 = add('p', 'line', 'line4', rectangle);
    line4.textContent = restaurant.address;
}

export default load_home_page;