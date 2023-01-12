import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { AreaContextProvider } from './context/AreaContext';

function App() {
  return (<>
    <AreaContextProvider>
      <Header />
      <Main />
    </AreaContextProvider>
  </>);
}

export default App;
