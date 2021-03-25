import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render( 
    <Router>
        <Routes/>
    </Router>,
    document.getElementById('root')
);