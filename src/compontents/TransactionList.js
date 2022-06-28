import React, { useContext} from "react";
import {GlobalContext} from '../context/GlobalContext';
import Transaction from "./Transaction";

const TrancactionList = () => {
  const {transcations}=useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transcations.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  );
};

export default TrancactionList;
