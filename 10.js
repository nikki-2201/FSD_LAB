class BankAccount {
    constructor(accountHolder, balance = 0) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  
    transfer(account, amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        account.deposit(amount);
      } else {
        console.log("Insufficient funds for transfer");
      }
    }
  }

  const account1 = new BankAccount("Alice", 1000);
  const account2 = new BankAccount("Bob", 500);
  
  account1.deposit(500);  
  account1.withdraw(100); 
  account1.transfer(account2, 300); 
  
  console.log(account1.balance);  
  console.log(account2.balance);  
  