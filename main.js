const listaTopicos = document.querySelector('.topics__list');

function gerarCards(arr) {
    arr.forEach(element => {
        listaTopicos.innerHTML += `
        <li class="list__topic ${element.category.toLowerCase()}">
            <div class="topic__text">
                <img src="${element.icon}" alt="icone de reacao">
                <p>${element.category}</p>
            </div>
            <p class="topic__numbers">
                <strong class="reaction-number">${element.score} </strong>/ 100
            </p>
        </li>
        `;
    });
}

function buscarDados() {
    try {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                gerarCards(data);
            });
    } catch (error) {
        console.log(error);
    }
}

buscarDados();