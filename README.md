# Fully Decentralised Online Voting Application
This is my first built Dapp on the Ethereum Blockchain.


## Dependencies

The following prerequisites are to be installed to use this project:

- NPM (To run the development server): https://nodejs.org
- Truffle (To deploy the smart contracts on the blockchain): https://github.com/trufflesuite/truffle
- Ganache (The local ethereum blockchain to be run): http://truffleframework.com/ganache/
- Metamask (The browser extension to view & execute transactions): https://metamask.io/
- Any Web Browser (To access the dapp and vote): https://www.google.com/chrome/ (Google Chrome is preferred as Metamask is bit unstable in other browsers)


## Usage

Below is the complete list of steps that can be followed to download, install, and run the project:

- $ git clone https://github.com/DMishra-22/election
- $ cd election
- $ npm install
- Open the Ganache GUI client. Quickstart or create a workspace to restore saved blockchain on each login.
- $ truffle migrate --reset (The election smart contract has to be migrated each time ganache is restarted)
- Unlock and connect metamask to the local Etherum blockchain provided by Ganache.
- Import any account provided by ganache.
- $ npm run dev
- Visit this URL in your browser: http://localhost:3000

The Dapp has also been deployed on IPFS. It can be directly accessed on the web at: https://gateway.ipfs.io/ipfs/QmPfXexwLLGTThw7ek2j25fTULwtG5RBMGufQ1h4xNCKmo/

Thanks for visiting in!
