# LINUX setup

## Please, download Node.js LTS version for your OS :

https://nodejs.org/en/download/

On Linux, you may want to use terminal commands. So you may need these packages installed :
For a Debian-like OS (Ubuntu, Kubuntu etc...) :

sudo -s
apt-get update
apt-get install curl
apt-get install build-essential
apt-get install libssl-dev

If we want the LTS today's version 6.x for this meetup, we'll need the following command (adapt #.x for other version) :

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

And then, install Node.js :

apt-get install nodejs

In this case, no need to install npm as it will be installed with nodejs package.

Node.js modules :

We then may need different Node.js modules (note that with the following commands we install these modules globally. Removing "-g" allows to install locally) :

npm install -g fs
npm install -g web3
npm install -g solc

## TestRPC

We'll use the local and efficient node "TestRPC" :
https://github.com/ethereumjs/testrpc

npm install -g ethereumjs-testrpc

To check a module's version :

npm -g list moduleName

e.g. : npm -g list solc

## Truffle

https://github.com/trufflesuite/truffle

npm install -g truffle

To check Truffle's version :

truffle version

## Launch your work space :
testrpc
truffle test