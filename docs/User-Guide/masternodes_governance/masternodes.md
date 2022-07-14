---
title: "General Masternodes"
slug: masternodes
sidebar_position: 2
---

### Introduction

This tutorial will guide you through the steps necessary to setup a PCOIN Masternode on a Linux Virtual Private Server (VPS) that is controlled via your local Control wallet.

Setting up a PCOIN masternode requires two separate core wallets:

- 1 core wallet containing the 250,000 PCOIN that are locked as collateral for operating the masternode.
- 1 core wallet running the masternode itself. It must be kept online 24/7 (see additional requirements below).

The collateral wallet can be kept offline and still receive masternode payments.

### Basic requirements:

- Collateral Wallet:
  - It can be any computer running the PCOIN core wallet. It will run the Control wallet and hold the masternode coins.
  - The collateral wallet needs to hold 250,000 PCOIN
- Masternode server:
  - Remote VPS with an OS supporting PCOIN Core Wallet installed, with a fixed IP address and running 24/7
  - Minimum VPS specs: 50 GB of storage space, 2 GB of RAM, 1 dedicated CPU core
  - The latest PCOIN Core wallet release installed on the masternode

:::info
You will need a different IP address for each masternode you plan to host.
:::

### Configuration of your Control wallet

#### Step 1 – Download PCOIN wallet

Download the most recent version of the PCOIN Core wallet [here](https://github.com/pcoinproject/pcoin/releases/latest)

#### Step 2 – Extract and install the wallet

Choose the proper version for your operating system. Extract it, install and run the wallet. After starting the wallet for the first time, it will offer you to make a default PCOIN data directory. Depending on your operating system, the default directory should be similar to:

C:\Users\YourUsername\AppData\Roaming\PCOIN

The above example of default directory is Windows based.

If you choose your own location ensure that you record where that is.

#### Step 3 – Create a Masternode using Creation Wizard

First of all, make sure that you have 250,000 PCOIN in your wallet.

1. Unlock the wallet.
2. Go to “Masternodes” tab.
3. Click “Create Masternode Controller“.
4. Masternode Creation Wizard intro window will open. It just reminds you that you need to have 250,000 PCOIN in your wallet in order to create a Masternode. Just click the “Next” button.
5. Now you need to type the Masternode name as per your wish (i.e. “Masternode01”) and then click “Next” button again.
6. Now you will be asked to type the IP address of your VPS (it might look similar to “182.214.90.12”), and then click “Next” button again.
7. If everything went successful, you should get a message “Master node created!”.
8. Status of the newly created Masternode will be “MISSING”. That is normal in this phase.

#### Step 3 bis - Create a Masternode from the Command line:

1. Download the latest PCOIN wallet release (Skip if you already have it installed)

```
	cd ~ && wget https://github.com/pcoinproject/pcoin/releases/download/v5.5.0/pcoin-5.5.0-x86_64-linux-gnu.tar.gz
	tar -zxvf pcoin-5.5.0-x86_64-linux-gnu.tar.gz && sudo rm -f pcoin-5.5.0-x86_64-linux-gnu.tar.gz
```

2. Open your PCOIN wallet and let it sync (Skip if you already have it installed and synchronized)

```
	cd ~ && cd ~/pcoin-5.5.0/bin && ./pcoind -daemon
```

3. Generate a new PCOIN address and send exactly 250K PCOIN to it

```
	./pcoin-cli getnewaddress
```

If you are sending from within this wallet to the new address then run this command:

```
	./pcoin-cli sendtoaddress ADDRESSfromGETNEWADDRESS 250000
```

4. Get the masternode private key and masternode outputs, Save them to a text document for the upcoming steps:

```
	./pcoin-cli createmasternodekey
	./pcoin-cli getmasternodeoutputs
```

You can now close your PCOIN Control wallet by running the following command:

```
	./pcoin-cli stop
```

5. We need to now add the information above to our "Masternode.conf file"

```
	cd ~/.pcoin
```

Open masternode.conf with your favorite text editor and add in the following:

```
	{Name of Masternode} {VPS IP Address}:22501 {The result of createmasternodekey you saved in the text doc.} {Result of the getmasternodeoutputs} {The Single Digit Number after Masternode Ouputs}
```

Sample Input:

```
	mn1 127.0.0.2:22501 93HaYBVUCYjEMeeH1Y4sBGLALQZE1Yc1K64xiqgX37tGBDQL8Xg 2bcd3c84c84f87eaa86e4e56834c92927a07f9e18718810b92e0d0324456a67c 0
```

** We will get back here to Control wallet little bit later after we setup VPS. **

### VPS Remote wallet installation

These procedures are for a clean server install. If you have an existing installation then some steps may not be required. Performing the steps is unlikely to have any effect on the system. Securing the server has NOT been included in this tutorial. That is your responsibility. Although it’s not required, a great guide can be found [here](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) to assist you.

To be able to access a VPS, you need a software/SSH client like [PuTTY](https://www.putty.org/) for example. You can choose between alternatives as well, but this tutorial will not include installation of such software. After you successfully login to your VPS, follow the further steps.

#### Step 1 – Install most recent security patches

A clean server install will likely need some software updates. Enter the following command which will bring the system up to date:

```shell
sudo apt-get update && sudo apt-get -y upgrade
```

#### Step 2 – Download and extract PCOIN Core wallet for Linux

Enter the following command lines one by one to download and extract PCOIN wallet

:::note
These and later commands are for version 5.5.0. You should replace this with the latest version.
:::

```shell
cd ~ && wget https://github.com/pcoinproject/pcoin/releases/download/v5.5.0/pcoin-5.5.0-x86_64-linux-gnu.tar.gz
tar -zxvf pcoin-5.5.0-x86_64-linux-gnu.tar.gz && sudo rm -f pcoin-5.5.0-x86_64-linux-gnu.tar.gz
```

#### Step 3 – Create the masternode configuration file and populate

Before the node can operate as a masternode a custom configuration file needs to be created. Since we have not loaded the wallet yet, we will create the necessary directories and the configuration file by typing the following command lines one by one:

```shell
mkdir ~/.pcoin && cd ~/.pcoin && sudo apt-get install nano && touch pcoin.conf && nano pcoin.conf
```

This command has created a blank PCOIN configuration file where we will enter our masternode configuration variables. Now we should properly setup configuration settings.

Paste the following configuration settings into the editor (using PuTTY, paste is being done simply by right mouse click):

    rpcuser=<YOUR_OWN_RPC_USERNAME>

    rpcpassword=<YOUR_OWN_RPC_PASSWORD>

    rpcallowip=127.0.0.1

    server=1

    daemon=1

    maxconnections=256

Before you exit the editor, there are 3 parameters that you need to update with your own settings. These are:

- **YOUR_OWN_RPC_USERNAME** – Set this to a custom username. i.e. rpcuser
- **YOUR_OWN_RPC_PASSWORD** – Set this to a STRONG password. i.e. password <– NO!!! Use something more complex for your own safety!
- Now go back to Control wallet in Masternode tab, click on the 3 dots next to Masternode you created few steps above and then click “Info“.
- Now click icon next to “Export data to run the Masternode on a remote server“.
- It will now ask you for a confirmation to export required data to run a Masternode. Click “OK” button.
- Now you will get a message that required info was successfully exported (copied to your clipboard) and now you should paste it in your pcoin.conf file on your VPS under themaxconnections=256 line in pcoin.conf file.
- After all, your pcoin.conf file on your VPS should look like the following:

        rpcuser=root
        rpcpassword=PasswordOfYourChoice
        rpcallowip=127.0.0.1
        server=1
        daemon=1
        maxconnections=256
        masternode=1
        externalip=101.168.87.207
        masternodeaddr=101.168.87.207:22501
        masternodeprivkey=87haGjw6ABVZfZTcMNX5c1E3HUVH4qWcdc823RBDHsGC5P8FohW

Save and exit the editor by pressing CTRL-O and Enter to save and CTRL-X to exit the editor.

### Start your Masternode

#### Step 4 – Load the masternode

With the configuration created we are now ready to load the masternode and sync to the network. Load the masternode by typing the following command:

        cd ~ && cd ~/pcoin-5.5.0/bin && ./pcoind

You will get the message “PCOIN server starting”. To follow the progress until the wallet is fully loaded and synchronized, type:

        tail -f ~/.pcoin/debug.log

Wait until you see the message similar to the following:

    2022-02-10 13:31:01 CMasternodeSync::GetNextAsset – Sync has finished
    2022-02-10 13:31:01 CActiveMasternode::ManageStatus() – not capable: Hot node, waiting for remote activation.

Once you get this message, you are completely synced and masternode is ready to be started. PressCTRL-C to get back to command line.

---

EXTRA STEP ONLY IF YOU DON’T SEE THESE 2 LINES/MESSAGES ANYWHERE:

        ./pcoin-cli getbestblockhash

You will get back hash that will look like this:

    1ab2a12a1a1a121a1212ab1aba121212121ab1a1a12a12121aba1a1abab1212aa1

Paste the number you get after./pcoin-cli reconsiderblockcommand like this:

        ./pcoin-cli reconsiderblock 1ab2a12a1a1a121a1212ab1aba121212121ab1a1a12a12121aba1a1abab1212aa1

Finally, type:

        ./pcoin-cli clearbanned

---

:::tip
Wait for 15 confirmations on the blockchain for transaction with the masternode collateral before proceeding with the next steps below.
:::

Now go back to your Control wallet -> Masternodes -> Click “Start Inactive/s”
Status will change from MISSING -> PRE_ENABLED.

**From the command line:**
If you have a password set on your wallet you will first need to unlock it (90 means it will be unlocked for 90 seconds):

```
./pcoin-cli walletpassphrase YOURPASSWORD 90
```

You can now proceed to start your masternode:

```
startmasternode missing y
```

Now go back to your VPS and type:

    ./pcoin-cli startmasternode local false

If everything went well, you should receive the following message:

```
“Masternode successfully started”
```

Congratulations! You have successfully started your masternode!

ADDITIONAL NOTES:

1. If the output of getmasternodestatus is fine, then you are perfectly fine. But have in mind that it can take up to 2 hours for masternode to change status from PRE_ENABLED to ENABLED in the masternode list.

2. First masternode reward requires a longer waiting period. It usually takes 3-5 days to receive a first masternode reward.

3. You can close the Control wallet, as it is not needed. Only the VPS should be working 24/7.

### Shutting down a Masternode

1. How do I stop running masternode on my VPS and delete masternode from my PCOIN Control wallet?

   - In Control wallet in Masternode tab click on Masternode you wish to shutdown and click “Delete”.

   - Restart the wallet.

   - Your 250,000 coins are now unlocked and spendable.

2. How do I get the 250,000 PCOIN back that I’ve send to my Masternode address at the beginning?

You don’t need to “get it back” as it is already in your wallet.
Being in the different address is not an issue as that’s also your address.

3. Can I use this 250,000 PCOIN normally on my wallet then again, and sell it or stake it normally like before?

Yes! If your wallet is unlocked for staking, it will automatically stake these 250,000 coins and you can spend them at any time.
