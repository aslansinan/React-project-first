import './App.css';
import User from "./Components/User"

function App() {
  return (
    <>
    <User name="Sinan" surname="Aslan" isLoggedIn={true} age ={25} />
    </>
  );
}

export default App;
