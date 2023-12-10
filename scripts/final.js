
const factsElements = document.querySelector('#Facts');

let factsList = [];

const displayFacts = (facts) => {
    factsElements.innerHTML = '';

    facts.forEach(fact => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let displayFactMessage = document.createElement('displayFactMesssage');
        h3.textContent = fact.type;
        displayFactMessage.textContent = fact.text;
        article.appendChild(displayFactMessage);
        article.appendChild(h3);
        factsElements.appendChild(article);
})
};


const getDailyFact = async () => {
    
    const response = await fetch('https://run.mocky.io/v3/74a168a4-ae4a-48f8-bae1-2457d3a380ce')
    if (response.ok) {
        const data = await response.json();

        factsList = data;
        displayFacts(factsList);
        console.log(JSON.stringify(factsList));
    }
};
const reset = () => {
    factsElement.innerHTML = '';
};
const sortBy = () => {
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'Trivia':
            displayFacts(factsList.filter(fact => fact.type.includes('trivia')));
            break;          
        case 'Math':
            displayFacts(factsList.filter(fact => fact.type.includes('math')));
            break;
        case 'Date':
            displayFacts(factsList.filter(fact => fact.type.includes('date')));
            break;
        case 'Year':
            displayFacts(factsList.filter(fact => fact.type.includes('year')));
            break;
            default:
                console.error('Invalid filter value');
    }
};

getDailyFact();

const sortByElement = document.getElementById('sortBy');

sortByElement.addEventListener('change', sortBy);