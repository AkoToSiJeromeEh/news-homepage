export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "900px",
        Desktop: "1440px",
      },
      
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": " hsl(5, 85%, 63%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue" : " hsl(233, 8%, 79%)",
        "dark-grayish-blue" : "hsl(236, 13%, 42%)",
        
      },
      fontFamily: {
        'inter-sans': ['Inter', 'sans-serif'],
      },
      

      
    },
  },
  plugins: [],
};