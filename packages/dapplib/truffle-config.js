require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area strategy blame dash spice hole impulse light army ghost'; 
let testAccounts = [
"0x04c6daf8307f108ba3d0f3958d11e03106d115cde2edf23efb69a7466cad34a2",
"0xbbbec453aafab77d755bbf831480823b997ff2e7c86ffc2e07cd30db36c30c9b",
"0x447722cc541aae0aae17376e6ba116082616afc04d3cd89151a00ce8440dfd58",
"0x4aac7c20008d7b62d31c9d4ebc5994d5780c9a001c0cf0417c5bfc4c45db24b0",
"0x3b3c187fe49ed6f6c8372efae1e77d4ef8b5d4f4670d78e6e57d4f28e015ae86",
"0xa6e8ae00299eb1193a408c990c3568d47cd315862e08e820e3832e124b29468b",
"0x6dc76361a11ea717557a43a7dc0fc71b06a11e023664acbe48da2e90201132de",
"0xf2d10569a3087debfd33cf4b2f9ac1d621c05e93e408c69120e3cc3fad388a53",
"0x4e0baf69976994780570c69bd58a05ffad78769f74a518f649da59eebdafb183",
"0x92471debec7f5a718bc93adcb744b18b4af31312778d1cf7c8f77c90e7ad1c21"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

