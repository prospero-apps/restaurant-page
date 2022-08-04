// add DOM element
function add(tag, cls, id, parent) {
    const element = document.createElement(tag);
    element.className = cls;
    element.id = id;
    parent.appendChild(element);
    return element;
}

export { add };