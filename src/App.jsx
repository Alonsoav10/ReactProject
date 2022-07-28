//import logo from './logo.svg';
import { useEffect, lazy, Suspense } from 'react';

//Componentes creados
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// BrowserRouter nos da el contexto para poder usar funciones de react router dom

//Estilos se colocan abajo
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemDetailContainer = lazy(() => import('./containers/ItemDetailContainer/ItemDetailContainer'))

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/> 
          <Routes>
            <Route index path='/' element={<ItemListContainer/>} />
            <Route index path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detalle/:id' element={
             <Suspense fallback={<div>Cargando...</div>}>
              <ItemDetailContainer/>
              </Suspense>
              }/>

            <Route path='*' element={<Navigate to = '/'/>}/>
          </Routes>
        </div>
    </BrowserRouter>

  ); 
}

export default App;
