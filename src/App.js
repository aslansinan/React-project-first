import './App.css';
const name =  "Sinan";
const surname =  "Aslan";
const isLoggedIn = false;
function App() {
  return (
    <>
    <h1>{isLoggedIn 
      ? `Benim adım ${name}, soyadım ${surname}`
      : 'giriş yapmadınız'}</h1>
    </>
  );
}

export default App;
