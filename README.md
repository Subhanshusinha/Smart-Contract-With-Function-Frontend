# Simple Bank Smart Contract

This project demonstrates a basic Ethereum smart contract for a simple bank account, along with a web interface to interact with the contract.

## Overview

The project consists of a Solidity smart contract with three main functions and a frontend application to interact with these functions. Users can deposit money, withdraw money, and check their balance.

## Smart Contract

The `Bank` contract includes the following functions:

1. `deposit_money(int amt)`: Deposits the specified amount into the account.
2. `withdraw(int amt)`: Withdraws the specified amount from the account.
3. `getBalance()`: Returns the current balance of the account.

## Frontend

The frontend is a simple HTML page with JavaScript that uses Web3.js to interact with the smart contract.

### Features

- Connect to MetaMask or other Web3 providers
- Deposit money into the account
- Withdraw money from the account
- Display the current account balance

## Project Structure

  plaintext

      ├── contracts/
      │   └── Bank.sol
      ├── src/
      │   ├── index.html
      │   └── app.js
      └── README.md

## Setup

1. Deploy the `Bank` smart contract to an Ethereum network.
2. Update the `address` variable in `app.js` with your deployed contract address.
3. Ensure you have MetaMask or another Web3 provider installed in your browser.
4. Open `index.html` in a web browser.

## Usage

1. Click the "Connect" button to connect your Web3 provider.
2. Enter an amount in the input field.
3. Click "Deposit" to deposit money or "Withdraw" to withdraw money.
4. The current balance will be displayed on the page.

## Technologies Used

- Solidity (v0.4.24)
- HTML
- JavaScript
- Web3.js
- jQuery

## Help

If you encounter any issues or have questions, feel free to reach out to the contributors.

## Authors

  - Subhanshu sinha and - subhanshu.sinha667@gmail.com 

## License

This project is licensed under the MIT License - see the LICENSE file for details.
