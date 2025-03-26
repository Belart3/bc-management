module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          rotate: "rotate 8s linear infinite",
          "bounce-twist": "bounceTwist 1s infinite ease-in-out",
          grow: "grow linear",
          "infinite-scroll": "infinite-scroll 20s linear infinite",
        },
        keyframes: {
          bounceTwist: {
            "0%, 100%": { transform: "translateY(0) rotate(0)" },
            "50%": { transform: "translateY(-10px) rotate(10deg)" },
          },
          rotate: {
            "0%": { transform: "rotate(0deg) scale(10)" },
            "100%": { transform: "rotate(360deg) scale(10)" },
          },
          grow: {
            "0%": { opacity: "0.5", scale: "0.8" },
            "50%": { opacity: "1", scale: "1" },
            "100%": { opacity: "0.5", scale: "0.8" },
          },
          "infinite-scroll": {
            to: { transform: "translateX(calc(-100% - 56px))" },
          },
        },
      },
    },
  };
  
