/**
 * Hello world Block
 * @param {*} block 
 */
export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = block.querySelector('p').textContent;
    block.textContent = '';
    block.appendChild(greeting);
}
