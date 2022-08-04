---
id: deploying-your-own-pcoin-netwok
title: Deploying your own PCOIN network
sidebar_label: Deploying your own PCOIN network
---

A concise guide to configuring seed nodes, miners as well as main-net and test-net networks.

## Seed Node Configuration

Seed nodes are trusted nodes that help new nodes connect to the rest of the network. You can still technically have a network work without seed nodes. But, if you don't have seed nodes preconfigured. You need to use the `addnode` command via RPC or config file.

To set up and configure seed nodes for your new network. You need to configure the node with the instructions from /contrib/seeds. Note that the markdown file in the repository mentions curling for pcoin's seed nodes; however, in our case. We want to set up custom seed nodes. Thus, ignore the contents of that `README.md`.

To begin, set up several VPSes on any cloud hosting provider. Once you configure those new VPSes, you can modify the nodes_main.txt and nodes_test.txt.

```
# nodes_main.txt
VPS.IP.1
VPS.IP.2
VPS.IP.3
```

Once you complete this, you can then have the seed nodes hardcoded into your network. It would be best if you run the python script in /contrib/seeds, which then hardcodes the seeds into the /src/chainparamsseeds.h file.

```shell
cd contrib/seeds
python3 generate-seeds.py . > ../../src/chainparamsseeds.h
```

## Network Configuration

You need all the VPSes to be set up and configured as full nodes. Assuming that you have a new fork and your new source hardcoded in /src/chainparamsseeds.h committed to git. You can configure each node on each VPS as you would for any other full node.

```shell
git clone https://github.com/MyAwesomeBitcoinFork --depth 1 --branch master
# Make sure to have dependencies installed
./autogen.sh
./configure
make
make install
```

Upon configuration of the network, any IP assigned to nodes_main.txt should be run as a mainnet node while any IP assigned to nodes_test.txt should run as a testnet node.

```shell
# If the IP is for the mainnet
pcoind

#If the IP is for the testnet
pcoind -testnet
```

## Miner Configuration

Setting up a full node to mine transactions is a necessity for actual data to be submitted to the network. Elsewise, if a new node were to connect and submit a transaction. Nothing would happen. Mining in pcoin is an adversarial process. That decentralized and adversarial process is part of what secures the ledger. After you've successfully begun mining, wait a while, and you should be able to see the balance with the getwalletinfo command.

To start the mining process, you need to configure the full node to mine with the generatetoaddress command.

```shell
pcoin-cli getnewaddress # Copy this address
pcoin-cli generatetoaddress 10 "youraddress"
```

After that, you can view if blocks are getting mined with the getblockcount command. And you can get your wallet balance with the getwalletinfo command.

```shell
# Confirm that blocks are getting mined
pcoin-cli getblockcount

# Confirm that funds are in your full node's wallet
pcoin-cli getwalletinfo
```

## Verifying Blocks

In a new network, there is only one block, the genesis block. The genesis block must follow the same consensus rules as all other blocks created afterwards. Though in the software, it appears set in stone, it is arbitrarily when the block verifies as valid. The genesis block must have a matching hash in the definition of the chain (in the case of pcoin), as that is a requirement.

In src/chainparams.cpp, there are functions to create the genesis block. Note that the function static CBlock CreateGenesisBlock() hash a signature pszTimestamp to create the genesis block. It may be a good idea to update this genesis block before mining and creating blocks in your network so that it's unique in comparison to the PCOIN network.

```cpp
// Located on line 56 in src/chainparams.cpp
static CBlock CreateGenesisBlock(uint32_t nTime, uint32_t nNonce, uint32_t nBits, int32_t nVersion, const CAmount& genesisReward)
{
    const char* pszTimestamp = "BTC Block 737457 0000000000000000000745bc51b5f4ae27325b3190c3d62fa0f31b98abec889d";
    const CScript genesisOutputScript = CScript() << ParseHex("04ec898508cf743f1492241c2b3af3ab77e69f721088063609cdbd8c8cffe39b4ec5a505bbd5548eedcf3f4121884b38da05c8d51ae31bb36d050c00bc025eb5f5") << OP_CHECKSIG;
    return CreateGenesisBlock(pszTimestamp, genesisOutputScript, nTime, nNonce, nBits, nVersion, genesisReward);
}
```
