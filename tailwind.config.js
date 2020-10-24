module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-rtl")],
}
