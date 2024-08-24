/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        "custom-purple":
          "0 4px 6px -1px rgba(119, 71, 255, 0.1), 0 2px 4px -1px rgba(119, 71, 255, 0.06)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};