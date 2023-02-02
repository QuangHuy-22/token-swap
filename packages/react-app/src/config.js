import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x41701c3dc503A52cb17bdbB718D2f0eE12aF7707"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Z3l2E87xZNWlbsPShHPYljpQ0jS5GE5U",
  },
};