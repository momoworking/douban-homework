import BookContainer from './components/bookContainer';
import './App.css';
import MockData from './mockData';

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <BookContainer books={MockData} />
      </div>
    </div>
  );
}

export default App;
