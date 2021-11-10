import { Card } from '@mui/material';
import './App.css';
import RecipeReviewCard from './components/catalogo/cards/cards';
import Catalogo from './components/catalogo/catalogo';
import FormContacto from './components/form/form';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/navbar/navbar"

function App() {
  return (  
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <RecipeReviewCard/>
      <FormContacto/>
      <ItemListContainer greeting="¡Hola Usuario!"/>  
    </div>
  );
}

export default App;
