import gas3 from 'gas3'
import web3Wallet from 'web3-wallet'

let instance;

export function getWeb3() {
  const pk = localStorage.getItem('pk');
  const url = localStorage.getItem('url');

  if (pk && url) {
    const wallet = web3Wallet.wallet.fromPrivateKey(pk);
    instance = gas3(web3Wallet.create(wallet, url));
    return instance;
  }
}
