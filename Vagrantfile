# -*- mode: ruby -*-
# vi: set ft=ruby :

plugins = ["vagrant-vbguest", "vagrant-docker-compose"]
installed = false

plugins.each do |plugin|
  unless Vagrant.has_plugin? plugin 
    system ("vagrant plugin install #{plugin}")
    puts "Plugin #{plugin} installed!"
    installed = true
  end
end

if installed
  puts "Dependencies installed, restarting vagrant ..."
  exec "vagrant #{ARGV.join(' ')}"
end

Vagrant.configure("2") do |config|

  config.vm.box = "trusty-server-cloudimg-amd64"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"
  config.vm.box_download_checksum = "efc2bb8b23eccf6806ad93eb97b7e3b7a75131a821ede35f38c7dad77b8c30d8"
  config.vm.box_download_checksum_type = "sha256"

  config.vm.network "forwarded_port", guest: 8545, host: 8545

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # Share the current directory on the host machine with the guest one on
  # /home/vagrant/workspace 
  config.vm.synced_folder ".", "/home/vagrant/workspace"

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = false
    # Customize the amount of memory on the VM
    vb.customize ["modifyvm", :id, "--memory", "3072"]
    # Customize the number of CPU cores (vCPUs) on the VM
    vb.customize ["modifyvm", :id, "--ioapic", "on", "--cpus", 2]
    vb.name = "meetup-sc-testing"
  end
  
  config.vm.provision "shell", inline: <<-SHELL
     apt-get update -yq 
     apt-get install -y build-essential curl htop git python-software-properties
     # install pip and supervisor
     curl https://bootstrap.pypa.io/get-pip.py | sudo -H python
     pip install supervisor
     mkdir -p /etc/supervisor/conf.d/ /var/log/supervisor/ /var/log/ethereumjs-testrpc/
     chown -R vagrant:vagrant /var/log/supervisor/ /var/log/ethereumjs-testrpc/
     # install nodejs, truffle, and ethereumjs
     curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
     apt-get install nodejs
     npm install -g express
     npm install -g truffle
     npm install -g ethereumjs-testrpc
  SHELL

  # config.vm.provision "shell", 
  #   privileged: false,
  #   run: "always",
  #   inline: <<-SHELL
  #   supervisord -n -c /home/vagrant/workspace/supervisord.conf &
  # SHELL

  # Install Docker
  # config.vm.provision :docker # 

  # Install Docker Compose, version 1.11.2
  # config.vm.provision :docker_compose, compose_version: "1.11.2"

  config.vm.post_up_message = "
           This machine provides a computing environment with 
              * NodeJS (v6.10.2) and npm (3.10.10)              
              * Truffle (v3.2.1) - a development framework for Ethereum
              * EthereumJS TestRPC (v3.0.3)

           Execute: 
             * vagrant ssh to connect to the virtual machine, 
             * vagrant halt to shut down it, and 
             * vagrant destroy to delete it

           The project directory on the virtual machine is: 
               /home/vagrant/workspace"
end
