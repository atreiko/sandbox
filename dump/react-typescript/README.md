# React/TypeScript

`npx create-react-app --template typescript .`

---

## Tailwind with Create React App

https://tailwindcss.com/docs/guides/create-react-app

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

tailwind.config.js
```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Fake Store API

`https://fakestoreapi.com/`

