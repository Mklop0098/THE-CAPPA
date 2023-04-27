
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages/Homepage';
import { useEffect, useState } from 'react';

function App() {
  const [top, setTop] = useState(0)

    const handleScroll = (event) => {
      const element = event.currentTarget;
        let position = element.scrollTop;
        setTop(position);
    };
    
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };}, []);


  return (

      <div className='App__wrapper'  id='test' onScroll={handleScroll}>
        <div className="App">
          <Header top={top}/>
          <HomePage />
        </div>
      </div>
  );
}

export default App;
 