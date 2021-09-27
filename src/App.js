import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe  from './components/ContactMe';


function App() {
  return (
    <BrowserRouter>
      <div id="background"></div>
      <Header></Header>
      <main>
        <Route exact path="/">
          <AboutMe></AboutMe>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/contact-me">
          <ContactMe></ContactMe>
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
