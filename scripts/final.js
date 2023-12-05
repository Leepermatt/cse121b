
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
            address = 'http://numbersapi.com/random/trivia?json'
            return address;
            
        case 'Math':
            address = 'http://numbersapi.com/random/math?json'
            return address
            
        case 'Date':
            address = 'http://numbersapi.com/random/date?json'
            return address
        case 'Year':
            address = 'http://numbersapi.com/random/year?json'
            return address
        default:
            address = 'http://numbersapi.com/random/trivia?json'
            return address;
    }
};

getDailyFact();

const sortByElement = document.getElementById('sortBy');

sortByElement.addEventListener('change', sortBy);