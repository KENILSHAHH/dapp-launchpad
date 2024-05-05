import { mainnet, goerli, polygon, polygonAmoy, polygonZkEvm, polygonZkEvmCardona } from 'wagmi/chains';

const hardhat = {
    id: 31337,
    name: 'Hardhat',
    network: 'localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        public: { http: ['http://127.0.0.1:8545'] },
        default: { http: ['http://127.0.0.1:8545'] },
    },
    /*blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
        default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    },*/
}

export const supportedChains = [
    hardhat,
    mainnet,
    goerli,
    polygon,
    polygonAmoy,
    polygonZkEvm,
    polygonZkEvmCardona
]
