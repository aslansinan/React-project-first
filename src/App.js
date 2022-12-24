import './App.css';
import User from "./Components/User"
const friends =  [
  {
    id : 1,
    name :"Erdem"
  },
  {
    id :2,
    name :"Osman"
  },
  {
    id:3,
    name :"Erkam"
  }
  ]
function App() {
  return (
    <>
    <User 
      name="Sinan"
      surname="Aslan"
      isLoggedIn={true}
      age ={25}
      frends = {friends} 
      />
    </> 
  );
}

export default App;
