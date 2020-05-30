import { Person } from './models';
import { App } from './views/App';
import './styles/app.scss';

const person = Person.buildPerson({
  first: 'John',
  last: 'Doe',
  gender: 'Attack Helicopter',
  education: 'Love University',
  occupation: 'Chief Hapiness Officer',
});

const root = document.getElementById('root');
if (root) {
  const app = new App(root, person);
  app.render();
} else {
  throw new Error('Root element not found');
}
