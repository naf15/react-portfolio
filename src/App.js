import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe  from './components/ContactMe';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Route exact path="/">
          <AboutMe></AboutMe>
        </Route>
        <Route exact path="/porfolio">
          <Porfolio></Porfolio>
        </Route>
        <Route exact path="/contact-me">
          <ContactMe></ContactMe>
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
