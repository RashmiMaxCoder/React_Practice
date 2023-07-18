import {BrowserRouter as Router  ,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page from './Page';

function App(){
  return( 
    <div style={{padding :`50px`}}>
      <h1>Dynamic Routing Demo</h1>
      <Router>
        <Routes>
          <Route exact path ="/home" element={<Home/>}>Home </Route>
          <Route exact path ="/about" element={<About/>}>About </Route>
          <Route path ="/page/:pageId" element={<page/>} >Page</Route>
        </Routes>
      </Router>

    </div>
  );
}
export default App;