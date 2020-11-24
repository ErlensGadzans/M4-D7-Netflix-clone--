import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import ModalForm from "./components/Modal"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ShowDetail from "./components/ShowDetail"
import OnlyMovies from "./components/OnlyMovies"


function App() {
  return (
   <>
   <Router>
      <Navbar title="Netflix" />
      <Route path="/" exact component={MovieList} />
      <Route path="/onlymovies" exact component={OnlyMovies}/> 
      <Route path="/" exact component={MyFooter} />
   </Router>
   </>

  )}

  export default App;