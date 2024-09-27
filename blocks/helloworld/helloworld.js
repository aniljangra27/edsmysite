/**
 * Hello world Block
 * @param {*} block 
 */
export default function decorate(block) {
    const divElemnt = document.createElement('div');
    divElemnt.textContent = block.querySelector('p').textContent;
    block.textContent = '';
    block.appendChild(divElemnt);
}
