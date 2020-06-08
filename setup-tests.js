import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

// Ignore React Web errors when using React Native
console.error = (message) => message;
