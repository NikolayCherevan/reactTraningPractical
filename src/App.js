
import { Route, BrowserRouter } from 'react-router-dom';
import s from './App.module.scss';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';

function App(props) {

  return (
    <BrowserRouter>
      <section className={s.content_wrapper}>
        <Header />
        <Navbar />
        <div className={s.main}>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
