import BookList from './pages/BookList';
import BookCreate from './pages/BookCreate';
import BookEdit from './pages/BookEdit';
import BookDelete from './pages/BookDelete';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create" element={<BookCreate />} />
        <Route path="/edit/:id" element={<BookEdit />} />
        <Route path="/delete/:id" element={<BookDelete />} />
      </Routes>
    </>
  );
}

export default App;