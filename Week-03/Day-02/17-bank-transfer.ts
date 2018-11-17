"use strict";
export { };

const accounts: any[] = [
  { clientName: "Igor", accountNumber: 11234543, balance: 203004099.2 },
  { clientName: "Vladimir", accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: "Sergei", accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accNum: Number): any {
  for (let i = 0; i < accounts.length; i++) {
    if (accNum === accounts[i].accountNumber) {
      console.log(accounts[i].clientName, accounts[i].balance);
    }
  }
}
// getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(
  obj: any[],
  accNumFrom: number,
  accNumTo: number,
  amount: number
): any {
  if (
    obj.filter(
      e => e.accountNumber === accNumFrom || e.accountNumber === accNumTo
    ).length == 2
  ) {
    obj.forEach(e => {
      if (e.accountNumber === accNumFrom) {
        e.balance -= amount;
      } else if (e.accountNumber === accNumTo) {
        e.balance += amount;
      }
    });
    return obj;
  } else console.log("404 - account not found");
}

transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

console.log(accounts);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
