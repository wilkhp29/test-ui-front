module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/components/**/*.jsx", "./src/pages/**/*.jsx"],
  },
  theme: {
    zIndex: {
      "-1000": "-1000",
    },
  },
};
