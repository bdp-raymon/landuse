module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: "layers",
    layers: ["utilities"],
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-rtl")],
}
