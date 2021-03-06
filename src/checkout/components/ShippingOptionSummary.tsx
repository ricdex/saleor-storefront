import * as React from "react";

import { Money } from "@components/containers";

import { Checkout_shippingMethod } from "../types/Checkout";

const ShippingOptionSummary: React.FC<{
  shippingMethod: Checkout_shippingMethod;
}> = ({ shippingMethod: { name, price } }) => (
  <p>
    {`${name} | +`}
    <Money defaultValue="0" money={price} />
  </p>
);

export default ShippingOptionSummary;
