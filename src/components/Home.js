
import '../App.css';
import Navbar from './navbar'
import Description from './description';
import Aboutus from './aboutus';
import Work from './work';
import Connect from './connect';
import Footer from './footer';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <Aboutus/>
      <Work/>
      <Connect/>
      <Footer/>
    
      

    </div>
  );
}

export default Home;