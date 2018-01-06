# Usage on Mac
1. `brew tap ethereum/ethereum`
2. `brew install ethereum`
3. ```geth --testnet --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303"```
4. `npm install -g truffle`
5. `git clone https://github.com/malnakli/ethereum-tutorial.git`
6. `cd ethereum-tutorial/voting`
7. `npm install`
8. ```
truffle console
truffle(default)> web3.personal.newAccount('verystrongpassword')
'ACCOUNT_ADDRESS'
truffle(default)> web3.eth.getBalance('ACCOUNT_ADDRESS')
{ [String: '0'] s: 1, e: 0, c: [ 0 ] }
truffle(default)> web3.personal.unlockAccount('ACCOUNT_ADDRESS', 'verystrongpassword', 15000)

// Replace 'verystrongpassword' with a good strong password.
// The account is locked by default, make sure to unlock it before using the account for deploying and interacting with the blockchain 
```
9. `You can mine some ether by running your geth node by passing an additional option --mine`
10. `truffle migrate`
11. `npm run dev`