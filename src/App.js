
import './App.css';
import { Vegetables } from './components/Vegetables';
import { Banners } from './components/banners';
import { Categories } from './components/categories';
import { Footer } from './components/footer';
import Fruits from './components/fruits';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Message } from './components/message';
import { Process } from './components/process';
import { Title } from './components/title';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Categories/>
      <Title name='Fruits'/>
      <Fruits/>
      <Banners/>
      <Title name="Vegetebles"/>
      <Vegetables/>
      <Process/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
