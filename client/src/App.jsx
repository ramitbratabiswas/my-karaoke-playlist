import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'

export const App = () => {
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='accordion'>
        <Accordion />
      </div>
    </>
  );
}

export default App;
