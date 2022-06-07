---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
slug: /
---

# PCOIN Core integration/staging repository

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/pcoinproject/pcoin?color=%230a80ab&cacheSeconds=3600)](https://github.com/pcoinproject/pcoin/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/pcoinproject/pcoin?color=%2313b9f6&cacheSeconds=3600)](https://github.com/pcoinproject/pcoin/releases)

:::tip Contributions
PCOIN welcomes contributions from anyone.
:::

:::tip
Currently, the PCOIN is in development and would benefit from contributions in the form of writing code, user testing, documentation, and community support
:::

## What is PCOIN?

TODO

## Development Process

The master branch is regularly built and tested, but it is not guaranteed to be completely stable. [Tags](https://github.com/pcoinproject/pcoin/tags) are created regularly from release branches to indicate new official, stable release versions of PCOIN Core.

The contribution workflow is described in [CONTRIBUTING.md](https://github.com/pcoinproject/pcoin/blob/master/CONTRIBUTING.md)

## Automated Testing

Developers are strongly encouraged to write [unit tests](https://github.com/pcoinproject/pcoin/blob/master/src/test/README.md) for new code, and to submit new unit tests for old code. Unit tests can be compiled and run (assuming they weren't disabled in configure) with: make check. Further details on running and extending unit tests can be found in [/src/test/README.md](https://github.com/pcoinproject/pcoin/blob/master/src/test/README.md).

There are also regression and integration tests, written in Python. These tests can be run (if the test dependencies are installed) with: test/functional/test_runner.py`

The CI (Continuous Integration) systems make sure that every pull request is built for Windows, Linux, and macOS, and that unit/sanity tests are run automatically.

## Manual Quality Assurance (QA) Testing

Changes should be tested by somebody other than the developer who wrote the code. This is especially important for large or high-risk changes. It is useful to add a test plan to the pull request description if testing the changes is not straightforward.

## License

PCOIN Core is released under the terms of the MIT license. See [COPYING](https://github.com/pcoinproject/pcoin/blob/master/COPYING) for more information or see https://opensource.org/licenses/MIT.

## Please take some time to read the following, this is for your own safety!

:::danger Warning
DO NOT give your private keys to anyone. No one from the PCOIN project will ever ask you for your private keys, only you can have access to them as they control your funds. If you give your private keys to someone else, you just gave them all your PCOINs.
:::

:::danger Warning
Transactions cannot be reverted or cancelled. On a decentralized blockchain, there's no way to revert/stop transactions, please make sure to check as many times as possible that you're sending the funds to the correct address.
:::

:::caution
ALWAYS make backups, any wallet, or important data (private keys) must be backed up in a secure manner. It's up to the user to choose which backup method will be used.
:::

:::caution
PCOIN is open source software, provided as-is with no warranty.
:::

:::caution
PCOIN Core is considered beta software. We make no warranties or guarantees of its security or stability.
:::
