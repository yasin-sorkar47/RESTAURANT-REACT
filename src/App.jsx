import CardProvider from './data/CardProvider';
import Banner from './sections/Banner/Banner';
import Main from './sections/Main/Main';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import './style/style.scss';

function App() {

  return (
    <>
    <CardProvider>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </CardProvider>
    </>
  )
}

export default App
