export const availableCoupons = {
  all: {
    code: "HOLIDAY15",
    description: "15% off entire order",
    discountType: "percentage",
    amount: 15,
    applicableProducts: "all",
    minOrder: 100,
    maxDiscount: 75,
  },

  shipFree: {
    code: "SHIPFREE",
    description: "Free shipping",
    discountType: "percentage",
    amount: 20,
    applicableProducts: [1],
    minOrder: 0,
    maxDiscount: 50,
  },
};
