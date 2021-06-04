import React from "react";
const PremiumCardHandler = (useSelector) => {
    return useSelector((state) => state.getProduct);
};

export default PremiumCardHandler;