---
title: "Masternodes And Governance"
slug: masternodes-and-governance
description: "Discover the PCOIN Governance model and get started with your Masternode"
---

# Masternodes

PCOIN has a two-tier network of nodes, with the first tier including common wallets and staking nodes and the second comprised of masternodes. Masternodes support voting on PCOIN budget proposals as well as experimenting with the future addition of special features, such as instant transactions. They also strengthen the overall network through incentivized software updates and online availability.

Unlike for PCOIN stakers, who receive rewards at random, masternode income is more predictable. PCOIN produces a new standard block on average every minute. (There is also a superblock made roughly once per month that pays for budget items that have been voted on by the masternodes.) Each block makes a single masternode payment. The masternode paid by any given block is selected from a deterministic list of all masternodes, and the paid masternode is moved to the back of the list after the payment. Each payment is 5 PCOIN.

You can estimate your annual returns over a period of time by dividing that time in minutes by the estimated number of masternodes to get the number of payments and then multiplying that by 5 to get the number of PCOIN. For example, for around 1000 masternodes over 30 days, your masternode will earn approximately (minutes/masternodes)x5 = (30x24x60/1000)x5 = 216 PCOIN.

## Requirements for Running a PCOIN Masternode

To run a masternode, you will need 250,000 PCOIN. Exactly 250,000 PCOIN must be sent in a single transaction output (called a UTXO) to an address you control. The private key for this address will be used to sign the one-time transaction that starts the masternode after the masternode software is running (more on that below).

Running a masternode requires running masternode software, which is an online PCOIN wallet specially configured to be a masternode. It must be continuously running, without a break of more than two hours, or it will be penalized through a delay in its ability to get a next payment.

This masternode software can either be outsourced, using a service like Allnodes or nodehub.io, or self-hosted. Outsourcing the masternode software is a popular choice for many, as it removes the technical burden of running and maintaining the online masternode software and can be acquired for only $5-10/month.

Self-hosting requires more technical knowledge and responsibility, but gives greater control. And it helps PCOIN because it is beneficial to the network to have as many independent entities as possible managing masternode software. Hosting a masternode requires a single-processor computer with a recommended minimum of 2 GB RAM, 50 GB disk space, and 2 TB of monthly data.

A good source for this computer is a Virtual Private Server (VPS) purchased from providers like Vultr, Digital Ocean, or others. After acquiring a VPS, you will need to download and install the latest PCOIN wallet, set the configuration file pcoin.conf for masternode operation, and run pcoind, the PCOIN daemon. This software, the first time it is run, will take several hours to sync the blockchain, and after that have minimal maintenance.

With the masternode software running and up to date on the blockchain, you will then create a transaction that starts the masternode.
