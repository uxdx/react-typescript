import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import AdminPage from './pages/Adminpage';
import MainPage from './pages/Mainpage';
import './style.scss';

function App() {
  return (
    // <AdminPage></AdminPage>
    // <Provider store={}>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    // </Provider>
  );
}

export default App;
