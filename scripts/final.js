
const factsElements = document.querySelector('#Facts');

let factsList = { };

const displayFacts = (facts) => {
    factsElements.innerHTML = '';
    
    facts.forEach(fact => {
        let article = document.createElement('article');
        let displayFactMessage = document.createElement('displayFactMesssage')
        displayFactMessage.textContent = fact.text;
        article.appendChild(displayFactMessage);
        factsElements.appendChild(article);
})
};


const getDailyFact = async () => {
    //let address = 'http://numbersapi.com/random/trivia?json'
    let address = sortBy()
    
    //sortBy()
    const response = await fetch(address)
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
            address = 'https://run.mocky.io/v3/eb1fc748-260d-45bc-852a-86cf19e5c3b2'
            return address;
            
        case 'Math':
            address = 'https://run.mocky.io/v3/a284546c-8741-4789-8bf5-77820b5547e7'
            return address
            
        case 'Date':
            address = 'https://run.mocky.io/v3/00d9923e-5f13-4f01-8b84-beb6f5c7aacf'
            return address
        case 'Year':
            address = 'https://run.mocky.io/v3/3b0d5240-a41d-4420-bd4e-8fa2a7507ac3'
            return address
        default:
            address = 'https://run.mocky.io/v3/eb1fc748-260d-45bc-852a-86cf19e5c3b2'
            return address;
    }
};

getDailyFact();

const sortByElement = document.getElementById('sortBy');

sortByElement.addEventListener('change', sortBy);