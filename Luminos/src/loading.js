import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loader from './components/Loader';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

const App = () => {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const handleRouteChange = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Simule um tempo de carregamento de 2 segundo
      };
  
      window.addEventListener('routeChangeStart', handleRouteChange);
      return () => {
        window.removeEventListener('routeChangeStart', handleRouteChange);
      };
    }, []);
  
    return (
      <Router>
        {loading && <Loader />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  };