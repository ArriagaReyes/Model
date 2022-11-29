import '../styles.css';
// import Experience from './experience/Experience';

// const experience = new Experience(document.getElementById('root'));
import ButtonComponent from './shared/Button';

const text = 'Click me!';
const callback = () => {
    console.log('You clicked me!');
}
const className = 'bg-lime-600';

document.getElementById('root').appendChild(new ButtonComponent({ text, callback }).render());
