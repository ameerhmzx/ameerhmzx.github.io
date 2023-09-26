/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"], theme: {
    extend: {
      boxShadow: {
        "inner-uniform": "inset 0 0 2px 4px rgba(0, 0, 0, 1)",
        "uniform": "0 0 8px 1px rgba(0, 0, 0, 1)",
      },
      "animation": {
        "gradient-xy": "gradient-xy 3s ease infinite",
      },
      "keyframes": {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        "sans": ["MonaSans, sans-serif", {
          fontVariationSettings: "\"wdth\" 120",
        }],
      },
    },
  }, plugins: [require("@tailwindcss/typography")],
};
