import '../styles.css';
import axios from 'axios';
import Experience from './experience/Experience';

const experience = new Experience(document.getElementById('root'));

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

window.get = () => {
    axios.get('http://localhost:6969/api/repository')
    .then(({ data }) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}