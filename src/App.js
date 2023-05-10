
import { Route, Routes } from 'react-router-dom';

import Join from './section/Join';
import Header from './section/Header';
import Message from './section/Message';



function App() {
  return (
    <div >
  <Header/>
  <Routes>

<Route path='/' element={<h1 style={{textAlign:"center"}}>HOME</h1>}/>
<Route path='/join' element={<Join/>}/>
<Route path ='/message' element={<Message/>}/>


</Routes>
  
     
    </div>
  );
}

export default App;
