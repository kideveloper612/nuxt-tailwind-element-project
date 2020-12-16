/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          default: "var(--green-default)",
          olive: "var(--green-olive)"
        },
        blue: {
          default: "var(--blue-default)",
          light: "var(--blue-light)"
        },
        red: {
          default: "var(--red-default)"
        },
        oragne: {
          default: "var(--orange-default)"
        },
        background: {
          default: "var(--background-default)",
          search: "var(--background-search)"
        },
        border: {
          card: "var(--border-card)"
        }
      },
      width: {
        "search-box": "240px",
        "contact-button": "150px",
        "search-contact": "420px",
        "card-image": "50px"
      },
      height: {
        "card": "90px"
      },
      margin: {
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
      },
      boxShadow: {
        "card": "0px 0px 20px rgba(223, 223, 223, 0.15)"
      },
      borderRadius: {
        "card": "20px"
      },
      gap: {
        "card": "30px"
      },
      fontSize: {
        "group-name": "22px",
        "card-name": "20px",
        "card-caption": "14px",
      },
      lineHeight: {
        "card-name": "23px",
        "card-caption": "16px",
        "footer": "19px"
      },
      minWidth: {
        "card": "270px",
        "head-comp": "270px",
      },
      scale: {
        "102": "1.02"
      }
    },
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    }
  },
  variants: {},
  corePlugins: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
