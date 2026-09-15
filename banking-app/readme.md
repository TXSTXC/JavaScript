This banking APP is set up to mimic an extremely basic and generic banking experience. I initially created this without following the main specification as I was not actually aware this was part of the project later on!
However, I have now since gon eback in and spent a fair bit of time uplifting it to match the specification and to look far cleaner than it did originally.

----- Login Page: -----
This page has a simple UI that allows for a Username and Password to be entered by the user.
Once both fields are entered, they can either login, or create an account with the corresponding input.

Create Account:
This stores their input into a userAccount Object, then into a higher array (userAccounts), whilst simultaneously creating a random account number and sort code.
This is then stored in local storage.

Login:
The login button looks at the userAccounts array to see if the entered Username and Password match against an Object within the userAccounts array.
If yes > loads the main page > populates account data onto the screen.
If no > pops an error message to say that the details do not match.

Safety:
I have error messages if fields are not complete or matching on both create account and login.

----- Accounts Page -----

Once logged in, you will see the account information populated on the screen; this includes a base balance of £0 to start.
There is both a Transfer and Deposit button that are fully functioning.

Deposit:
Ability to enter a value and description.
This is then stored into an Object within the userAccount.history array.
If the value is more than £10,000, an error message is popped to prompt the user to head in to a branch for deposit over that value.

Transfer:
Same logic applies as above for deposit, it just not reduces the total account balance.
If the user tries to transfer more than the available balance, it pops a message to alert them.

You are able to see the account history at the bottom of the page which is pulled from an array within the userAccount Object.
This includes the transfer / deposit amount, inclusive with a '_' or '+', depending on the type.
It also includes a template literal to show the date of the transaction with the values.

Logout:
I included a logout button at the bottom of the page so users could also navigate back top the main login page, just in case for testing purposes, a different account was needing to be accessed.
