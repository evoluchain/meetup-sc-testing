# meetup-sc-testing

17 Mar 2017 Meetup
This project provides a simple setup to get used with truffle testing.

## Init your work space

- https://nodejs.org/en/download/
 Go to this site and download the  L T S version (so everyone will have the same version) for your  O S.
 If you are on  G N U/ Linux you may need to also install "npm" ( > sudo apt install npm).

- https://github.com/trufflesuite/truffle
 We will install  Truffle globally :
npm install -g truffle
 Check your  Truffle version :
truffle version

- https://github.com/ethereumjs/testrpc
 We will use  Testrpc as a local node which will provide  Ethereum blocks and accounts, and instantaneous tests responses :
npm install -g ethereumjs-testrpc

## check your work space
 How to launch your local node (you may need to use this command as  Root) :
testrpc
How to launch  Truffle :
truffle test
