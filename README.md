# [Superyay](https://github.com/scottsword/superyay) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/scottsword/superyay/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/scottsword/superyay.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/scottsword/superyay)

Superyay is a nice way to warn contributors that they aren't using the desired version of Node.js or npm.

## Installation
`npm install superyay`


## Configuration
Superyay's configuration is simply stored in your project's `package.json` file. When using this tool, both the Node.js version & npm version are **required** and must be stored in the *engines* property (per node standard). If you would like to display a link with your warning add a property `superyay` to with the nested value `link`. 
```bash
# package.json configuration
{
  ...,
  "engines": {
    "node": "6.10.2",
    "node": "5.5.1"
  },
  "superyay": {
    "link": "https://awesome.wiki"
  }
}
```

## Usage
```bash
# package.json scripts prepend example
{
  ...,
  "scripts": {
    "deploy": "superyay webpack blah blah"
  }
}
```

```bash
# run directly in your project via bin
./node_modules/.bin/superyay
