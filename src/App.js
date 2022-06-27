
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
        <Header />
        <ItemListContainer />
        <ItemCount stock='5' />
    </div>
  );
}

export default App;
