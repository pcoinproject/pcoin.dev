# PCOIN Core

## Setup

PCOIN Core is the original PCOIN client and it builds the backbone of the network. However, it downloads and stores the entire history of PCOIN transactions; depending on the speed of your computer and network connection, the synchronization process can take anywhere from a few hours to a day or more. Thankfully you only have to do this once.

## Running

The following are some helpful notes on how to run PCOIN Core on your native platform.

### Unix

Unpack the files into a directory and run:

- `bin/pcoin-qt` (GUI) or
- `bin/pcoind` (headless)

If this is the first time running PCOIN Core (since v5.0.0), you'll need to install the sapling params by running the included `install-params.sh` script, which copies the two params files to `$HOME/.pcoin-params`

### Windows

Unpack the files into a directory, and then run pcoin-qt.exe.

### macOS

Drag PCOIN-Qt to your applications folder, and then run PCOIN-Qt.

## Building

The following are developer notes on how to build PCOIN Core on your native platform. They are not complete guides, but include notes on the necessary libraries, compile flags, etc.

- [Dependencies](./Building/dependencies.md)
- [macOS Build Notes](./Building/build-osx.md)
- [Unix Build Notes](./Building/build-unix.md)
- [Windows Build Notes](./Building/build-windows.md)
- [Gitian Building Guide](./Building/gitian-building/)

## Development

- [Developer Notes](./Development/developer-notes.md)
- [Multiwallet Qt Development](./Development/multiwallet-qt.md)
- [Release Notes](./Development/release-notes.md)
- [Release Process](./Development/release-process.md)
- [Translation Process](./Development/translation_process.md)
- [Unit Tests](./Development/unit-tests.md)
- [Unauthenticated REST Interface](./Development/REST-interface.md)
- [Dnsseed Policy](./Development/dnsseed-policy.md)

### Miscellaneous

- [Files](./Miscellaneous/files.md)
- [Fuzz-testing](./Miscellaneous/fuzzing.md)
- [Reduce Memory](./Miscellaneous/reduce-memory.md)
- [Tor Support](./Miscellaneous/tor.md)
- [Init Scripts (systemd/upstart/openrc)](./Miscellaneous/init.md)
