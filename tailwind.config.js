/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      textColor: {
        "primary": "#C92071",
        "secondary": "#B5B6F2",
        "tertiary": "#991956",
        "error": "#EE4266",
        "sucess": "#52CA76",
        "warning": "#F6AA1C",
        "light-gray": "#8F8F8F",
        "light-gray-2": "#CCCCCC",
        "light-gray-3": "#F5F5F5",
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666"
      },
      backgroundColor: {
        "primary": "#C92071",
        "secondary": "#B5B6F2",
        "tertiary": "#991956",
        "error": "#EE4266",
        "sucess": "#52CA76",
        "warning": "#F6AA1C",
        "light-gray": "#8F8F8F",
        "light-gray-2": "#CCCCCC",
        "light-gray-3": "#F5F5F5",
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666"
      }
    },
  },
  plugins: [],
}

