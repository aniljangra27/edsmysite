export default async function decorate(block) {
    const links = [...block.querySelectorAll('a')].map((a) => a.href);
    fetch(links)
    .then(response => response.json())
    .then(json => {
      const tableBody = document.querySelector('#data-table tbody');

      // Loop through the object and create table rows
      for (const key in json) {
        if (json.hasOwnProperty(key)) {
          const row = document.createElement('tr');

          const keyCell = document.createElement('td');
          keyCell.textContent = key;

          const valueCell = document.createElement('td');
          valueCell.textContent = json[key];

          row.appendChild(keyCell);
          row.appendChild(valueCell);
          tableBody.appendChild(row);
        }
      }
    })
    .catch(error => console.error('Error fetching the data:', error));
}