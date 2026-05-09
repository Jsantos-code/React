import './App.css';
import Header from './components/Header/Header.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import Profile from './components/Profile/Profile.jsx'; 
import MyButton from './components/Button/Button.jsx';
import ShoppingList from './components/ShoppingList/ShoppingList.jsx';
import Footer from './components/Footer/Footer.jsx';
// import AdminPanel from './components/AdminPanel/AdminPanel.jsx'; 
// import AboutPage from './pages/About/About.jsx'; 
// import RoutesApp from './Routes.jsx'; 

function App() {
  let content;
  let isLoggedIn = false;
  if (isLoggedIn) {
    content = <Profile />;
  } else {
    content = <LoginForm />;
  }
  

  return (
    <div className="App">
      <Header />
      
      <h1>Hello!</h1>
      <div> {content} </div>
      
      <MyButton />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
