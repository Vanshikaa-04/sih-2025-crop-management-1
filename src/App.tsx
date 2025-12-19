import './App.css'
import {Header} from "./components/organisms/Header/Header.tsx";
import {Footer} from "./components/organisms/Footer/Footer.tsx";
import {Card} from "./components/atoms/Card/Card.tsx";

/**
 * The main App component that serves as the root of the application.
 * It renders the Header and Footer components.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
   return(
       <>
           <Header/>
           <Card/>
           <Footer/>
       </>
   )
}
export default App;
