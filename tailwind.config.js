module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-rtl")],
}
