import type { StoreProductRoot } from "@faststore/api";

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      console.log("env", process.env.EVERTON_TESTE)
      return "My item id: " + root.itemId;
    },
  },
};

export default productResolver;


