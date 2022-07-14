---
title: "PCOIN Command Line Core Wallet"
slug: command-line-core-wallet
sidebar_position: 2
---

### Description of the pcoind Server Process

The process to launch the PCOIN Core Wallet in command line is called pcoind and can be found in the bin folder of the pcoin core wallet.

The base command to launch the pcoin core wallet is:

    pcoin-5.5.0/bin/pcoind -daemon

The pcoind process accepts multiple command line options, that can be listed (along with their description) using the following command:

    pcoind --help

When no options are specified, the pcoind process will use default values for all parameters (such as date folder, log file, etc.), or the ones specified in the pcoin.conf file.

The pcoind server logs all its activities in the following file:

    $PCOIN_HOME/debug.log

### Start the pcoind process automatically when the server starts

1. Create a service file

   sudo nano /etc/systemd/system/PCOIN.service

2. Copy the following to the newly created PCOIN.service file. The elements in purple are to be modified according to the version of PCOIN, your path, and your username:

```
[Unit]
Description=PCOIN_MN
After=network.target [Service]
User=pcoin
ExecStart=/home/pcoin/pcoin-5.5.0/bin/./pcoind -daemon
ExecStop=/home/pcoin/pcoin-5.5.0/bin/./pcoin-cli stop
TimeoutSec=15min
Type=forking
Restart=on-failure
PrivateTmp=true
ProtectSystem=full
NoNewPrivileges=true
PrivateDevices=true
[Install]
WantedBy=default.target
```

3. Activate the service

```
sudo systemctl enable PCOIN
```

3. Start it

```
sudo systemctl start PCOIN
```

### Client Process

The process to access the PCOIN Core Wallet in command line is called pcoin-cli and can be found in the bin folder of the pcoin core wallet.

The following command line lists all the available options, sorted by theme:

    pcoin-5.5.0/bin/pcoin-cli help

The help function can also be used to access the documentation page for a particular command line option. For example the following returns the help page for the **getinfo** command:

    pcoin-5.5.0/bin/pcoin-cli help getinfo

### Useful commands

- **pcoin-cli walletpassphrase MypassPhrase 999**: unlocks the wallet for 999 seconds (for spending and staking)
- **pcoin-cli walletpassphrase MypassPhrase 9999999 true**: unlocks the wallet for 9999999 seconds (for staking only)
- **pcoin-cli getstakingstatus**: Displays all details pertaining to staking (helpful to debug staking issues)
- **pcoin-cli sendtoaddress "PMJRSsuU9zfyrvxVaAEFQqK4MxZg6vgeS6" 1.5**: Sends 1.5 PCOIN to address PMJRSsuU9zfyrvxVaAEFQqK4MxZg6vgeS6
