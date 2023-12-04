
const factsElements = document.querySelector('#Facts');

let factsList = [];

const displayFacts = (facts) => {
    facts.forEach(fact => {
        let article = document.createElement('article');
        let h3 = document.createElement('hs');
        h3.textContent = fact;
        article.appendChild(article);     
        
    });
};



const getDailyFact = async () => {
    const response = await fetch('https://api.aakhilv.me/');
    if (response.ok) {
        const data = await response.json();
        
        factsList = data;
        displayFacts(factsList);
        console.log(JSON.stringify(factsList));
        //templesElement.innerHTML += "<article>" + templeList.templeName + "<article>"; //his way to display
    }
};