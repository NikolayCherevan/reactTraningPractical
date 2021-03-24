
import './App.css';
import Footer from './Footer';
import Header from './Header';

import Navbar from './Navbar'
import Profile from './Profile';
function App() {
  return (
    <section className = "content-wrapper">
      <Header />

      <Navbar />
      <Profile />

      <Footer />
    </section>
  );
}

export default App;
