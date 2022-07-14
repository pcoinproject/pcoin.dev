---
title: "Installing the PCOIN Core Wallet"
slug: installing-the-pcoin-core-wallet
sidebar_position: 1
---

### System Requirements

To run the PCOIN Core Wallet, you need a system with the following specificqtions:

- Operating System: Windows, Linux, or MacOS
- CPU: At least 2GHz
- RAM: 2GB (4GB recommended)
- Disk Space: At least 25GB available

### Downloads

The latest version of the Core wallet can be found on (https://pcoin.dev/downloads).

:::info Note
Always download the Core wallet from the official website/Github
:::

### Installation

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<pre>
<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">
    1. Download the latest version of the Core Wallet from https://pcoin.dev/downloads {'\n'}
    2. Run the installer and follow all steps. {'\n'}
    3. Launch the PCOIN Core Wallet. {'\n'}
  </TabItem>

  <TabItem value="mac" label="macOS">
    1. Download the latest version of the Core Wallet from https://pcoin.org/downloads. {'\n'}
    2. Run the installer and Copy the PCOIN App to Applications folder. {'\n'}
    3. Launch the PCOIN Core Wallet. {'\n'}
  </TabItem>

  <TabItem value="linux" label="Linux">
    1. Navigate to the folder where you want to install the PCOIN Core Wallet (for example cd /home/pcoin/pcoin) {'\n'}
    2. Download the latest version of the Core Wallet: get https://github.com/pcoinproject/pcoin/releases/download/v5.x.x/pcoin-5.x.x-xxx** (link from pcoin.dev website)  {'\n'}
    3. Unzip the archive: tar -zxvf pcoin-5.x.x-aarch64-linux-gnu.tar.gz && sudo rm -f pcoin-5.x.x-aarch64-linux-gnu.tar.gz{'\n'}
    4. Navigate to the newly created folder cd pcoin-5.x.x {'\n'}
    5. First install only: Install the Sapling parameters (Keys securing Shield transactions) by running the command ./install-params.sh {'\n'}
    6. Launch the PCOIN server ./pcoind -daemon, or the PCOIN GUI client: ./pcoin-qt {'\n'}
  </TabItem>
</Tabs>
</pre>
```

### Startup / initial synchronisation

The first time you run the Core Wallet, the whole PCOIN blockchain will be downloaded locally and verified. This will take approximately 5 hours with a faast internet connection, and will require approximately 10GB of space on disk.

An empty wallet will also be created (stored in a **wallet.dat** file in the PCOIN data folder).

### Upgrades

The PCOIN Core Wallet is upgraded on a regular basis, in order to deliver new functionalities and fix bugs. There are two main types of releases:

- Mandatory releases: The mandatory releases generally either add functionalities to the wallet or to the network (e.g. cold staking) and/or fix critical issues. They have to be installed by all users before a given date (enforcement date), that is communicated by the developers at the time the release is published.
- Recommended/Optional releases: Optional releases are recommended for everyone but can generally be skipped safely. They either apply to only a subset of users (e.g. fix impacting masternodes only), or fix non-critical issues.

!! NOTE All releases are communicated on the pcoin.org website and on the #important-updates channel of the PCOIN Discord server. It is critical to review them and install all updates before the enforcement block, in order to avoid technical issues that could result in lost PCOINs.

The procedure to upgrade the wallet is similar to an installation and is as easy as:

- Shutdown current version of the wallet.
- Install the new version of the core wallet by following the procedure corresponding to your system.
- Restart the core wallet using the newly installed version.
