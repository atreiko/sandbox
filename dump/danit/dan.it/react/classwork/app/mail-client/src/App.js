import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;