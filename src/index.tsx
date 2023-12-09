import * as ReactDOM from 'react-dom/client';

import App from './app';

const app = document.getElementById('app');

if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(<App />);
}