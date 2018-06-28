# Just learn node, bro

This is an incomplete node app for my buddy Adam to use for learning node development. Most importantly, it highlights his extreme love for Nickelback.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install git from [here](https://git-scm.com/downloads) to check out this source code.
Next, setup node from [here](https://nodejs.org/en/) so you can develop and test node apps locally.

### Verifying Installing

Open up a terminal and make sure you can run the following commands without error:

```
git -v
```

```
node -v
```

## Running the app

First, check out the source code of this app

```
git clone https://github.com/meg23/just-learn-node-adam.git
```

Change directories into 'just-learn-node-adam'. Download all the node libraries from npm

```
npm install
```

This should download a bunch of libraries to a folder called 'node_modules'. Now you can start the dev server

```
DEBUG=adam:* npm start
```
The app should now be visible at http://localhost:3000/ in your web browser. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

