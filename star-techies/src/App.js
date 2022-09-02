
import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;

//https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=04012efa-cb90-4d62-bf69-8f5172f89c86
