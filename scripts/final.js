
const factsElements = document.querySelector('#Facts');

let factsList = [];
let factButton1 = 'null'
let factButton2 = 'null'
let apiCount = 0
//document.addEventListener("DOMContentLoaded", () => {
// getElements();
//});

const getElements = () => {
    factButton1 = document.getElementById("button1");
    factButton1 = document.getElementById('button2');
    console.log("factButton1: ", factButton1);
    console.log("factButton2: ", factButton2);


    if (factButton1) {
        factButton1.addEventListener('click', () => {
            getDailyFact("1");
        });
    }

    if (factButton2) {
        factButton2.addEventListener('click', () => {
            getDailyFact("2");
        });
    }
};
const displayFacts = (facts) => {
    factsElements.innerHTML = '';
    facts.forEach(fact => {

        
        let article = document.createElement('article');
        let factButton1 = document.createElement('factButton1');
        factButton1.textContent = fact;
        let factButton2 = document.createElement('factButton2');
        factButton2.textContent = fact;
        article.appendChild(factButton1);
        article.appendChild(factButton2);
        factsElements.appendChild(article);
})
};


const getDailyFact = async () => {
    const response = await fetch(`https://meowfacts.herokuapp.com/?count=85`);

    if (response.ok) {
        const data = await response.json();

        factsList = data;
        displayFacts(factsList);
        console.log(JSON.stringify(factsList));
        apiCount += 1;

        let index = factsList.findIndex((fact) => {
            const loweredFact = fact.toLowerCase();
            return loweredFact.includes("feces") || loweredFact.includes("https://www.youtube.com/watch?v=gc5m0agc_ei");
        });

        if (index != -1 && apiCount < 6) {
            getDailyFacts(numFacts);
        }

    }
    apiCount = 0;
    displayFacts();
};

const reset = () => {
    factsElement.innerHTML = '';
};


getDailyFact();