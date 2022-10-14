import App from './App';
import ReactDOM from 'react-dom';

const injector = (parentElementId, basePath) =>
  ReactDOM.render(<App basePath={basePath} />, document.getElementById(parentElementId));

export default injector;
