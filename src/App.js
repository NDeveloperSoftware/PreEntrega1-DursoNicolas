import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const greetings = '¡Hola! Bienvenido a nuestra tienda en línea.';

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting} />
    </>
  );
}
export default App;
