import React from 'react'
import { Button as UIButton } from '@faststore/ui'
import { usePDP } from "@faststore/core"

function CustomBuyButton(props: any) {
  const context = usePDP()

  console.log("hook PDP", context)
  console.log("override graphql vtex: ", context.data?.product?.customData)

  function handleBuy() {
    console.log("handleBuy")
  }

  return (
    <UIButton
      data-fs-buy-button
      variant="primary"
      onClick={handleBuy}
    >
      Comprar UI
    </UIButton>
  )
}

export default CustomBuyButton