---
title: "PCOIN Governance"
slug: pcoin-governance
sidebar_position: 1
---

PCOIN is a DAO (Decentralized Autonomous Organization); it has no employees, no management, only community members who got together to advance the project.

Although a significant portion of the work is done by volunteers, a monthly budget of 86'400 PCOIN is allocated to proposals submitted by the community and voted upon by masternode owners (1 masternode = 1 vote).

PCOIN creates a new block every 60 seconds; each of these blocks create 10 new PCOINs, with 2 PCOIN for any treasury proposals (5 PCOIN go to a masternode owner, 5 PCOIN go to the staker who wrote the block).

Rules of the road:

- Anyone can submit a proposal to the network (submission costs 50 PCOIN).
- It is a good practice to post a pre-proposal on the PCOIN [Github Discussions](https://github.com/pcoinproject/pcoin/discussions) (to obtain feedback from the community) prior to submitting the proposal to the network.
- To be funded, a proposal has to receive a 'yes' vote from at least 10% of the masternodes.
- If the total amount of funded proposals is above 86'400, proposals with the most 'yes' votes are funded first.

### Creating a proposal using the pcoin-cli command line client or the debug console

Once the proposal is ready, you will need to submit it to the network so that masternode owners can vote on it. This is done via the core wallet that will be paying the 50 PCOIN fee.

:::caution
Please review the status of the current budget cycle prior to submitting the proposal. Make sure masternode owners will have enough time to vote on the proposal, and that there is enough budget in the next cycle to accommodate it.
:::

Once you're ready to submit, run the following commands, either using the pcoin-cli command line client or the debug console:

1. Obtain the next superblock (starting block) number:
   ```
   getnextsuperblock
   ```
2. Prepare the Proposal
   ```
   preparebudget < name of proposal > < Forum link > < number of payments > < starting superblock > < payment address > < Amount per payment >
   ```
3. Record the preparation hash
4. Submit the proposal to the network
   ```
   submitbudget < name of proposal > < Forum link > < number of payments > < starting superblock > < payment address > < amount per payment > < preparation hash >
   ```
5. Record the voting hash; add it to the forum post along with voting options, using the below template:
   ```
   Proposal Name: < Proposal Name >
   hash= < voting hash >
   To vote yes:
   “mnbudgetvote many < vote hash > yes”
   To vote no:
   “mnbudgetvote many < vote hash > no”
   To check the status
   "getbudgetinfo < name of proposal >”
   ```
