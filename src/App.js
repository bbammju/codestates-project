import {Route, Routes, BrowserRouter} from 'react-router-dom'
import AlbumContent from './pages/content';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AlbumContent />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
