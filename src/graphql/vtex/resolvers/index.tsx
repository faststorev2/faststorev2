import { default as StoreProductResolver } from "./product";
import { default as StoreSearchResultResolver } from "./search";

const resolvers = {
  ...StoreProductResolver,
  ...StoreSearchResultResolver
};

export default resolvers;