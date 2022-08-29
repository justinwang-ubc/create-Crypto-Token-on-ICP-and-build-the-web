import React, { useState } from "react";
import {token,canisterId,createActor} from "../../../declarations/token";
// import {AuthClient} from "@dfinity/auth-client";     // in case you wanna deploy in live icp and have intenet identiy feature 

function Faucet(props) {

  const [isdisabled,setDisable] = useState(false);
  const [buttonText,setText] = useState("Gimme gimme");


  async function handleClick(event) {
    setDisable(true) ;
    //  const authClient = await AuthClient.create();
    //  const identity = await authClient.getIdentity();

    //  const authenticatedCanister =createActor(canisterId,{
    // agentOptions:{
    //   identity ,
    // },
    //  });
    //  await authenticatedCanister.payOut();

    const result = await token.payOut();
    setText(result) ;
    // setDisable(false);


  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free  soulKens here! Claim 10,000 soul coins to your account.</label>
      <p className="trade-buttons">
        <button
         id="btn-payout" 
         onClick={handleClick}
         disabled={isdisabled}
         >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
