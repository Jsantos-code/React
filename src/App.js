import './App.css';
import MyButton from './components/Button/Button.jsx';
import AboutPage from './pages/About/About.jsx';
import Profile from './components/Profile/Profile.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import ShoppingList from './components/ShoppingList/ShoppingList.jsx';
import RoutesApp from './Routes.jsx';
import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx';

function App() {
  let content;
  let isLoggedIn = true;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div className="App">
      <Header />
      <RoutesApp />
        <h1>Hello, React!</h1>
        <div>
          {content}
        </div>
        <Profile />
        <MyButton />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
