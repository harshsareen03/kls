import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreens from './screens/HomeScreens';
import './App.css'
function App() {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <HomeScreens/>
      </Container>

    </main>
    <Footer/>
    </>
  );
}

export default App;
