/**
 * Hello world Block
 * @param {*} block 
 */
export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World';
    block.textContent = '';
    block.appendChild(greeting);
}
