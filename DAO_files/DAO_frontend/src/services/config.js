let config = {}
let environment = "local"
if (environment == "local") {
    config = {
        frontendurl:'http://localhost:3000',
        backendurl:'http://localhost:5000/',
        DCXRPC_URL: "https://mainnetcoin.d-ecosystem.io/",
        DCXCHAIN_ID: 5272,
        DCXCHAIN_HEX_ID: '0x1498',
        DCX_SYMBOL: "DCX",
        DCX_BLOCKEXPLORER: "https://mainnet-explorer.d-ecosystem.io",
        DCX_NETWORK_NAME: 'D-Chain',
        DCX_DECIMAL: 18,
    }
}
else if (environment == "demo") {
    config = {
        frontendurl:'http://54.221.80.30',
        backendurl:'http://54.221.80.30:3000/',
        DCXRPC_URL: "https://mainnetcoin.d-ecosystem.io/",
        DCXCHAIN_ID: 5272,
        DCXCHAIN_HEX_ID: '0x1498',
        DCX_SYMBOL: "DCX",
        DCX_BLOCKEXPLORER: "https://mainnet-explorer.d-ecosystem.io",
        DCX_NETWORK_NAME: 'D-Chain',
        DCX_DECIMAL: 18,
    }
}
else if (environment == "live") {
    config = {
        frontendurl:'https://cuptoken.trade',
        backendurl:'https://api.cuptoken.trade',
        DCXRPC_URL: "https://mainnetcoin.d-ecosystem.io/",
        DCXCHAIN_ID: 5272,
        DCXCHAIN_HEX_ID: '0x1498',
        DCX_SYMBOL: "DCX",
        DCX_BLOCKEXPLORER: "https://mainnet-explorer.d-ecosystem.io",
        DCX_NETWORK_NAME: 'D-Chain',
        DCX_DECIMAL: 18,
    }

}

export default config;