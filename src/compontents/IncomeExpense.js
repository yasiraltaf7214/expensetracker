import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpense =()=>{
  
  const {transcations}=useContext(GlobalContext);

  const amounts=transcations.map(transcation=>transcation.amount);
  
  const incomes=(amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0)).toFixed(2);
  const expenses=(amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${incomes}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenses}</p>
        </div>
      </div>
    );
};

export default IncomeExpense;