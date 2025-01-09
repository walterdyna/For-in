let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
    {
        name: "Alex Dyna",
        ddd:"27",
        phone: "99964-7264",
        email: "alexdyna@gmail.com",
        street: "Rua, Nelson Barbosa",
        number: "2",
        city: "Vila Velha",
        state: "ES"
    },

    {
        name: "Quezia Dyna ",
        ddd:"27",
        phone: "99861-5111",
        email: "queziacastelo@gmail.com",
        street: "Rua, Nelson Barbosa",
        number: "2",
        city: "Vila Velha",
        state: "ES"
    },

    {
        name: "Eduardo Dyna",
        ddd:"27",
        phone: "99687-7074",
        email: "eduardodynaa@gmail.com",
        street: "Rua, C",
        number: "SN",
        city: "Vila Velha",
        state: "ES"
    }
]
function search() {
    const query = input.value.toLowerCase(); // Texto de busca em minúsculas
    let results = ""; // Armazenar os resultados encontrados

    for (const contact of contacts) {
        // Verifica se o texto de busca está presente em qualquer valor do objeto
        const contactValues = Object.values(contact).map(value => value.toString().toLowerCase());
        if (contactValues.some(value => value.includes(query))) {
            results += `Contato encontrado:<br>
            Name: ${contact.name}<br>
            Telefone: ${contact.phone}<br>
            E-mail: ${contact.email}<br>
            Endereço: ${contact.street}<br>
            Número: ${contact.number}<br>
            Cidade: ${contact.city}<br>
            Estado: ${contact.state}<br><br>`;
        }
    }

    if (results) {
        p.innerHTML = results; // Exibe todos os resultados encontrados
    } else {
        p.innerHTML = "Contato não encontrado"; // Mensagem caso nenhum contato seja encontrado
    }
}
