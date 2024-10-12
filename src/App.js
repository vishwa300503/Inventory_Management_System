import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InventoryItemForm from './components/InventoryItemForm';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <h1 style={styles.heading}>Inventory Management System</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-inventory" element={<InventoryItemForm />} />
        <Route path="/edit-inventory" element={<InventoryItemForm />} />
        <Route path="/add-supplier" element={<SupplierForm />} />
        <Route path="/supplier-list" element={<SupplierList />} />
      </Routes>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© {new Date().getFullYear()} Inventory Management System</p>
        <p style={styles.footerText}>All Rights Reserved</p>
      </footer>
    </div>
  );
};


const styles = {
  heading: {
    textAlign: 'center',        
    fontSize: '2.5rem',        
    marginBottom: '20px',       
    fontWeight: 'bold',     
  },
  footer: {
    marginTop: '20px',          
    padding: '20px',            
    backgroundColor: '#007bff', 
    color: 'white',             
    textAlign: 'center',        
    borderTop: '1px solid #0056b3', 
    position: 'relative',      
    bottom: '0',                
    left: '0',              
    right: '0',                 
  },
  footerText: {
    margin: '5px 0',           
  },
};

export default App;
