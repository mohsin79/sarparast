module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        blue: { 400: "var(--blue_400)" },
        blue_gray: { 100: "var(--blue_gray_100)", 900: "var(--blue_gray_900)" },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          700: "var(--gray_700)",
          900: "var(--gray_900)",
          "700_33": "var(--gray_700_33)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_03": "var(--gray_900_03)",
        },
        green: { 500: "var(--green_500)", a700: "var(--green_a700)" },
        indigo: {
          300: "var(--indigo_300)",
          "900_26": "var(--indigo_900_26)",
          a200: "var(--indigo_a200)",
        },
        light_blue: {
          100: "var(--light_blue_100)",
          "100_00": "var(--light_blue_100_00)",
        },
        orange: { 300: "var(--orange_300)" },
        pink: {
          50: "var(--pink_50)",
          600: "var(--pink_600)",
          a100: "var(--pink_a100)",
        },
        red: { 600: "var(--red_600)", "600_01": "var(--red_600_01)" },
        teal: { a700: "var(--teal_a700)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 4px 16px 5px #0f105626" },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #b9ebff00,#b9ebff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
