import Header from './component/Header';
import Section from './component/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        name="About Me"
        content="I am keen to learn and experience new Technologies" />

      <Section
        name="Contact Me" 
        content="Email: lim_keith@yahoo.com.sg" />
    </div>
  );
}

export default App;
