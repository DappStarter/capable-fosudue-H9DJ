require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note often unveil install casual flock gesture'; 
let testAccounts = [
"0x781f0b4cf125ded4e58fe5b2c7de6d19c00449c9d3c22dbfcf0b0e16e1c8c5fa",
"0xd49103ce231d51bd4bbaf3cdbfd101b0ca033f2b4573c2557d22030c3bcf6146",
"0xf3ab04e80353ac1ecc28f836acd471ae9cbd77fb38a421ce1dac9e9090bbe99a",
"0xae2d2ca125b6bcc78cf4cf9126f72b836f02b089d7bb40d4e89ddf35f1869b0d",
"0x3dd8c389fe9bb7e220644589321f238a87c559c04bb1132b54c747d05aecd396",
"0xd29a50d517d18b2c27efd6bec71ec86be6d123f49d425145cd5b9e9d66316f6b",
"0xacc78c06bd6b1326db5e5423641af33d208b505274af560bfe1d35daa7b71ac1",
"0xe69153c01e7eb423d550d48044fd521958868b7b3e4213398232151a93232a22",
"0x7a9e22e270994cdb52a02d1e0a99398773caec8f833e9c059904198fd4faeb61",
"0x2b00dc054f8bf009fc4f5bbe255e892751e4596a87358615187ee03046034e8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


