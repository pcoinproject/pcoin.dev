---
title: "Staking with PCOIN Core Wallet"
slug: staking-core-wallet
sidebar_position: 1
---

Staking with the PCOIN Core Wallet requires very little setup.

### Step-by-step setup

1. Launch PCOIN Core Wallet & make sure it is synchronized

2. Make sure the PCOIN you have in your wallet have at least 600 confirmations; this can be checked by hovering/clicking on any transaction in the core wallet

3. Unlock your core wallet for staking

- In the PCOIN Command line Wallet, run:

```
pcoin-cli walletpassphrase YourWalletPassPhrase 9999999 true
```

- In the PCOIN QT Wallet, click on Wallet Locked/Staking Only, enter your password and confirm

4. Confirm that staking is active by checking the status of the icon on top of the core wallet

Staking status can also be checked using the following command line:

```
./pcoin-cli getstakingstatus
```

5. Enjoy your staking rewards, that will appear as transactions in your core wallet
