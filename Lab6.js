const fetchData = async () => {
    try {
        const response = await fetch('https://brianobruno.github.io/cats.json')
        return await response.json();
    } catch(error) {
        console.error('Error fetching') 
        throw error;

        
    }
};


const display = async () => {
    try {
        const data = await fetchData();
        const sortedData = data.facts.sort((a, b) => a.factId - b.factId);
        const table = document.querySelector('#output tbody')

        sortedData.forEach(fact => {

            const row = document.createElement('tr');
            row.innerHTML = `<td>${fact.factId}</td><td>${fact.text}</td>`;
            table.appendChild(row)
            
        });
    } catch(error){
        console.error('Error: ', error)

}}

