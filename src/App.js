import './App.css';
import React from 'react';
import { DataListProvider } from './DataListContext';
import TableResult from './components/TableResult';
import ModalAddData from './components/ModalAddData';

function App() {
  return (
      <DataListProvider>
        <div className="App">
          <ModalAddData/>
          <TableResult/>
        </div>
      </DataListProvider>
  );
}

export default App;
