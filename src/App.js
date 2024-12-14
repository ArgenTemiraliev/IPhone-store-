import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/navbar/Navebar'
import ShopPage from './pages/shop/ShopPage';
import CardPage from './pages/card/CardPage';
import ShopContextProvaider from './context/shop-context/Shop-context';

function App() {
  return (
    <div className="App"> 
    <ShopContextProvaider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ShopPage/>} />
        <Route  path='/card' element={<CardPage/>}/>
      </Routes>
     </Router>
    </ShopContextProvaider>
     </div>
  );
}

export default App;
