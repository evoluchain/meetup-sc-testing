# meetup-sc-testing

17 Mar 2017 Meetup
This project provides a simple setup to get used with truffle testing.

## Init your work space

### `https://nodejs.org/en/`

Go to this site and download the LTS version (so everyone will have the same version) for your OS.

If you are on GNU/Linux you may need to also install "npm".
`sudo apt install npm`

### `https://github.com/trufflesuite/truffle`

#### `npm install -g truffle`

Will install Truffle globally.
You may use `sudo` depending on your system setup.

#### `truffle version`

Check your Truffle version.

### `https://github.com/ethereumjs/testrpc`

Will use Testrpc as a local node which will provide Ethereum blocks and accounts, and instantaneous tests responses.

#### `npm install -g ethereumjs-testrpc`

You may use `sudo` depending on your system setup.

## check your work space

### `node --version`

Check your node install is ok.

### `npm --version`

Check your npm install is ok.

### `testrpc`

Version should be >= EthereumJS TestRPC v3.0.3

### `truffle --version`

Version should be >= Truffle v3.2.1
