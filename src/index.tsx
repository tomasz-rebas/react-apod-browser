import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render( 
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);