import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
import CustomBuyButton from '../CustomBuyButton';
import { PriceCustom } from '../PriceCustom';

const ProductDetailsWithCustomButton = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    BuyButton: { Component: CustomBuyButton },
    ProductPrice: { Component: PriceCustom },
  },
})

export default ProductDetailsWithCustomButton;
