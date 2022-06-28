import React from 'react';
import './App.css';
import Header from './compontents/Header';
import Balance from './compontents/Balance';
import IncomeExpense from './compontents/IncomeExpense';
import TrancactionList from './compontents/TransactionList';
import AddTransaction from './compontents/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TrancactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
