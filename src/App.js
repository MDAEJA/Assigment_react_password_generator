// import logo from './logo.svg';
import './App.css';
import Password from './components/Password';

function App() {
  return (
   <>
   <div style={{padding:'20px 20px'}}>
    <h1 style={{textAlign:'center' ,textDecoration:'underline',fontStyle:'italic'}}>Password Generator </h1>
   </div>
   <div>
    <Password></Password>
   </div>
   </>
  );
}

export default App;
