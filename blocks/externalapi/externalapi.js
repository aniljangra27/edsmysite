export default async function decorate(block) {
    const link = [...block.querySelectorAll('a')].map((a) => a.href);
    const mainContainer = document.createElement('main');
   // Dynamically create the div to hold the table
   const divContainer = document.createElement('div');
   divContainer.id = 'table-container'; // Set id to div
   mainContainer.appendChild(divContainer);
   document.body.appendChild(mainContainer); // Append div to body

   // Fetch the data from the API
   fetch(link)
     .then(response => response.json())
     .then(json => {
       // Create the table and append it to the div
       const tableContainer = document.getElementById('table-container');

       // Create table elements dynamically
       const table = document.createElement('table');
       const caption = document.createElement('caption');
       const thead = document.createElement('thead');
       const tbody = document.createElement('tbody');

       // Set table caption
       caption.textContent = 'Todo Details';
       table.appendChild(caption);

       // Create header row
       const headerRow = document.createElement('tr');
       const headerKey = document.createElement('th');
       headerKey.textContent = 'Key';
       const headerValue = document.createElement('th');
       headerValue.textContent = 'Value';
       headerRow.appendChild(headerKey);
       headerRow.appendChild(headerValue);
       thead.appendChild(headerRow);

       // Populate the table body with the fetched data
       for (const key in json) {
         if (json.hasOwnProperty(key)) {
           const row = document.createElement('tr');

           const keyCell = document.createElement('td');
           keyCell.textContent = key;

           const valueCell = document.createElement('td');
           valueCell.textContent = json[key];

           row.appendChild(keyCell);
           row.appendChild(valueCell);
           tbody.appendChild(row);
         }
       }

       // Append thead and tbody to the table
       table.appendChild(thead);
       table.appendChild(tbody);

       // Append the table to the table container
       tableContainer.appendChild(table);
     })
     .catch(error => console.error('Error fetching the data:', error));
}