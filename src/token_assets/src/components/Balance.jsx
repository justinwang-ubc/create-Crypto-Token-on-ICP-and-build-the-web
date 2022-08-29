import React, { useState } from "react";
import { Principal} from "@dfinity/principal" ; 
import {token} from "../../../declarations/token" ;

function Balance() {

  const [inputValue,setInput] = useState("");
  const [balanceResult,setBalance] = useState("");
  const [cryptoSymbol,setSymbol] = useState("");
  const [isHidden,setHidden] = useState(true);

  
  async function handleClick() {
    const principal = Principal.fromText(inputValue);       //convert the data type of inputvalue which user type in into principle data type
    const balance = await token.balanceOf(principal);      // call the backend icp get balance function to get the balance 
    setBalance(balance.toLocaleString());       // update the balance using hook state 
    setSymbol(await token.getSymbol());              // update the crypto symol using backend icp code and hook state 
    setHidden(false);
    
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value ={inputValue}
          onChange = {(event) => setInput(event.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden ={isHidden}>This account has a balance of {balanceResult} {cryptoSymbol}.</p>
    </div>
  );
}

export default Balance;
