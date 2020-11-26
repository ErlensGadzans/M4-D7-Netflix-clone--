import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import ModalForm from "./components/Modal"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ShowDetails from "./components/ShowDetails"
import OnlyMovies from "./components/OnlyMovies"
import {FormControl, Button, Form, Nav, Container, CommentArea} from "react-bootstrap"


function App() {
  return (
   <>
   <Router>
      <Navbar title="Netflix" />
      <Route path="/" exact component={MovieList} />
      <Route path="/onlymovies" exact component={OnlyMovies}/>
      <Route
            path="/details/:id"
            render={(props) => (
              <Container className="px-5 mt-5">
                <ShowDetails {...props} />
                {/* <CommentArea {...props} /> */}
              </Container>
            )}
          />
      <Route path="/" exact component={MyFooter} />
   </Router>
   </>

  )}

  export default App;