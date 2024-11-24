
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageStocks from './components/ManageStocks';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/stockManagement" element={<Dashboard />} />
          <Route path="/stockManagement/ManageStocks" element={<ManageStocks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;