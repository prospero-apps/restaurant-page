import './style.css';
import { add } from './helpers';
import {restaurant} from './restaurant';
import load_header from './header';

// icons
import AddressIcon from './icons/address.png';
import EmailIcon from './icons/email.png';
import PhoneIcon from './icons/phone.png';
import HoursIcon from './icons/time.png';

function load_contact_page() {
    // load_header();

    /* CONTAINER */
    const container = add('div', 'container', 'contact-container', content);
       
    const callToAction = add('p', 'call', 'contact-call', container);
    callToAction.textContent = 'Contact Us';

    /* CONTACT DATA */
    const addressField = add('div', 'field', 'address-field', container);
    const addressIcon = add('img', 'icon', 'address-icon', addressField);
    addressIcon.src = AddressIcon;
    const address = add('p', 'field-text', 'address-text', addressField);
    address.textContent = restaurant.showAddress();

    const telephoneField = add('div', 'field', 'phone-field', container);
    const telephoneIcon = add('img', 'icon', 'phone-icon', telephoneField);
    telephoneIcon.src = PhoneIcon;
    telephoneField.src = PhoneIcon;
    const telephone = add('p', 'field-text', 'phone-text', telephoneField);
    telephone.textContent = restaurant.showTelephone();

    const hoursField = add('div', 'field', 'hours-field', container);
    const hoursIcon = add('img', 'icon', 'hours-icon', hoursField);
    hoursIcon.src = HoursIcon;
    const hours = add('p', 'field-text', 'hours-text', hoursField);
    hours.textContent = restaurant.showOpeningHours();

    /* CONTACT FORM */
    const contactForm = add('form', 'fm', 'contact-form', container);
    contactForm.action = '#';

    const nameArea = add('div', 'area', 'name-area', contactForm);
    const nameInputLabel = add('label', 'lbl', 'name-label', nameArea);
    nameInputLabel.htmlFor = 'nameInput';
    nameInputLabel.textContent = 'Name';    
    const nameInput = add('input', 'inp', 'name-input', nameArea);
    nameInput.type = 'text';

    const emailArea = add('div', 'area', 'email-area', contactForm);
    const emailInputLabel = add('label', 'lbl', 'email-label', emailArea);
    emailInputLabel.htmlFor = 'emailInput';
    emailInputLabel.textContent = 'Email';
    const emailInput = add('input', 'inp', 'email-input', emailArea);
    emailInput.type = 'email';

    const messageArea = add('div', 'area', 'message-area', contactForm);
    const messageLine = add('div', 'line', 'message-line', messageArea);
    const messageIcon = add('img', 'icon', 'message-icon', messageLine);
    messageIcon.src = EmailIcon;
    const messageInputLabel = add('label', 'lbl', 'message-label', messageLine);
    messageInputLabel.htmlFor = 'messageInput';
    messageInputLabel.textContent = 'Type your message here';
    const messageInput = add('textarea', 'inp', 'message-input', messageArea);

    const contactButton = add('button', 'area', 'submit-button', contactForm);
    contactButton.textContent = 'Send';

    return container;
}

export default load_contact_page;