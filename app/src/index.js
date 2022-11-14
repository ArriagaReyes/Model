import '../styles.css';
import axios from 'axios';
import Experience from './experience/Experience';

//const experience = new Experience(document.getElementById('root'));

class Document {
    constructor(name) {
        const element = document.createElement('div');
        element.innerText = name;
        return element;
    }
}

let repositories = [];
let list;

window.addEventListener('load', () => {
    list = document.getElementById('repositories');

    console.log(list);

    axios.get('http://localhost:6969/api/repository')
    .then(({ data }) => {
        // create a list of repositories and add it to the DOM via list
        console.log(data);
        data.api.repositories.forEach((value) => {
            repositories.push(value);
            list.appendChild(new Document(value.name));
        });
    })
    .catch((error) => {
        console.log(error);
    });
});

window.post = (name) => {
    axios.post('http://localhost:6969/api/repository', {
        name
    })
    .then(({ data }) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}