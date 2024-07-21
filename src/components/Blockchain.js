import React, { useState, useEffect } from 'eact';
import Web3 from 'web3';

const Blockchain = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));
    web3.eth.getAccounts().then((accounts) => {
      setAccount(accounts[0]);
    });
  }, []);

  const handleGetBalance = () => {
    web3.eth.getBalance(account).then((balance) => {
      setBalance(balance);
    });
  };

  return (
    <div>
      <h1>Blockchain Integration</h1>
      <p>Account: {account}</p>
      <p>Balance: {balance}</p>
      <button onClick={handleGetBalance}>Get Balance</button>
    </div>
  );
};

export default Blockchain;
