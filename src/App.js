import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';


// on the login page once you've logged in with spotify page, we have our code that's inside of our url, every time we access this page, we want to get that code from our url
// this is going to get the portion of our code after the question mark. It's going to retrurn an object. 'code' is going to get us the url param that is called code. If we have a code, then we want to render a new component. 
const code = new URLSearchParams(window.location.search).get('code')


function App() {
  return (
    // if we have a code then render out our Dashboard component, otherwise, render login component
    code ? <Dashboard code={code} /> : <Login />
  );
}

export default App;
