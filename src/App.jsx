import  NavBar  from './components/NavBar';
import  ItemListContainer  from './components/ItemListContainer';
import  CartWidget  from './components/CartWidget';

function App() {
  const cartItemCount = 1;
  return (
    <>
      <NavBar/>
      <CartWidget itemCount={cartItemCount} />
      <ItemListContainer greeting="Hola, somos La Provence" />
    </>
  );
}

export default App;