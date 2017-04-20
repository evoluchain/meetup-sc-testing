# meetup-sc-testing

This project provides a simple setup to get used with truffle testing.

## Init your workspace

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
   
   Known working version:

   ```
   $ VBoxManage --version
   5.1.6r110634
   ```

1. Install [Vagrant](http://www.vagrantup.com/downloads.html)

   Known working version:

   ```
   $ vagrant --version
   Vagrant 1.9.2
   ```

1. Clone this repository

    ```
    $ git clone && cd meetup-sc-testing
    ```

### Creating a Virtual Machine

1. Provision and configure the virtual machine with [NodeJS](nodejs.org) [Truffle](https://github.com/trufflesuite/truffle), and [EthereumJS](https://github.com/ethereumjs/testrpc)

    ```
    $ vagrant up
    ```

### Characteristics of the Virtual Machine

  * **Number of CPU cores**: 2
  * **Amount of RAM memory**: 3GB
  * **Operating system**: Ubuntu 14.04.5 LTS (GNU/Linux 3.13.0-116-generic x86_64)
  * **Shared folder**: the **current directory**(meetup-sc-testing) is mounted on the guest one (i.e., VM) on **/home/vagrant/workspace**
  * **Exposed ports**:
      - **guest**: 8545
      - **host**: 8545

### Connecting to the virtual machine via SSH

    ```
    $ vagrant ssh
    ```

### Shutting down the Virtual Machine

  ```
  $ vagrant halt
  ```
