pragma solidity ^0.4.24;

contract bank {
    // Declare a state variable to store the balance of the bank account
    int bal = 0;

    // Function to deposit money into the bank account
    function deposit_money(int amt) public {
        // Add the deposit amount to the current balance
        bal += amt;
    }

    // Function to withdraw money from the bank account
    function withdraw(int amt) public {
        // Subtract the withdrawal amount from the current balance
        bal -= amt;
    }

    // Function to get the current balance of the bank account
    function getBalance() public view returns (int) {
        // Return the current balance
        return bal;
    }
}
