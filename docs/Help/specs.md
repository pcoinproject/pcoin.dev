---
title: PCOIN Core Specification
sidebar_label: Specification
sidebar_position: 3
---

## Ports

| Network | PCOIN P2P | PCOIN RPC |
| ------- | --------- | --------- |
| Mainnet | 22501     | 22502     |
| Testnet | 22503     | 22504     |
| Regtest | 22505     | 22506     |

:::tip
For ZMQ use 28332
:::

## PUBKEY_ADDRESS / pubKeyHash

| Network | Decimal | Hex | Symbol |
| ------- | ------- | --- | ------ |
| Mainnet | 55      | 37  | P      |
| Testnet | 117     | 75  | p      |
| Regtest | 117     | 75  | p      |

## SCRIPT_ADDRESS / scriptHash

| Network | Decimal | Hex | Symbol |
| ------- | ------- | --- | ------ |
| Mainnet | 78      | 4E  | Y      |
| Testnet | 140     | 8C  | y      |
| Regtest | 140     | 8C  | y      |

## STAKING_ADDRESS

| Network | Decimal | Hex | Symbol |
| ------- | ------- | --- | ------ |
| Mainnet | 63      | 3F  | S      |
| Testnet | 73      | 49  | W      |
| Regtest | 73      | 49  | W      |

## SECRET_KEY / wif

| Network | Decimal | Hex |
| ------- | ------- | --- |
| Mainnet | 212     | D4  |
| Testnet | 239     | EF  |
| Regtest | 239     | EF  |

## BIP32 - bech32 - netmagic

| Network | EXT_PUBLIC_KEY | EXT_SECRET_KEY | bech32       | netmagic |
| ------- | -------------- | -------------- | ------------ | -------- |
| Mainnet | 0488B21E       | 0488ADE4       | ps           | 92a12b5c |
| Testnet | 043587CF       | 04358394       | ptestsapling | 4a2c27d9 |
| Regtest | 043587CF       | 04358394       | ptestsapling | 1bd461b1 |
