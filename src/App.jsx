//import logo from './logo.svg';

//Componentes creados
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

//Estilos se colocan abajo
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <NavBar/> 
     <ItemListContainer/>
    </div>
  ); 
}

export default App;
