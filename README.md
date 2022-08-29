  #   web3 Blockchain: Create my own crypto token called soul coin on the ICP and build a marketplace website 
  I followed a online web development bootcamp taught by Angela Yu to build this project. This proejct was inspired by Curve finance. Curve is what's called an automated market maker. It's really popular and used a lot for people to exchange stable coins and used heavily by people within the sort of web3 blockchain community. 

  the screenshot of the project is shown below. the web can:
  1. Using Moyoko Hashmaps to store Token Blances.
  2. Showing the User's Token on the frontend.
  3. Using the transfer functionality.
  4. Using the shared keyword to create the Faucet functionality.
  5. Persisting Non-Stable Types Using the Pre- and Postupgrade Methods.
  6. Authenticating with the internet identity. 
  
  
  ![Alt text](/src/token_assets/assets/1.jpg ); 
  ![Alt text](/src/token_assets/assets/2.jpg );


# how to run on the local computer 

1. open up a new terminal and start a new local simulated ICP blochain:

```
dfx start 
```

2. install all the package required that's inside the package.json file:

```
npm install
```

3. build our canister and install it onto this locally running ICP blockchain:

```
dfx deploy
```
4. run the script so that can see the front end of the web on port localhost:8080:

```
npm 
```




# Check your Balance

1. Find out your principal id:

```
dfx identity get-principal
```

2. Save it somewhere.

e.g. My principal id is: y6j6f-hlrnd-l4exe-64c3x-ouxsm-q26yg-vioc7-byruv-tcgrt-rszu6-mae
2vxsx-fae


3. Format and store it in a command line variable:
```
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

4. Check that step 3 worked by printing it out:
```
echo $OWNER_PUBLIC_KEY
```

5. Check the owner's balance:
```
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

# Charge the Canister


1. Check canister ID:
```
dfx canister id token
```

2. Save canister ID into a command line variable:
```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:
```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:
```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

# Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```
dfx deploy --network ic
```

2. Check the live canister ID:
```
dfx canister --network ic id token
```

3. Save the live canister ID to a command line variable:
```
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

4. Check that it worked:
```
echo $LIVE_CANISTER_KEY
```

5. Transfer some tokens to the live canister:
```
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```

6. Get live canister front-end id:
```
dfx canister --network ic id token_assets
```
7. Copy the id from step 6 and add .raw.ic0.app to the end to form a URL.
e.g. zdv65-7qaaa-aaaai-qibdq-cai.raw.ic0.app
