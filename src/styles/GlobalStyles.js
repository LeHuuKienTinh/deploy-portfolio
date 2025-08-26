import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
--color-yellow-500: #d3c631ff ;
--color-green-500: #30dc00ff ;

  /* Indigo */
--priority-high: var(--color-red-700);
--priority-medium: var(--color-yellow-500);
--priority-low: var(--color-green-500);


  &, &.light-mode{
  /* Cyan */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  /* Cyan */
  --color-platinum-1 : #E9E8E6;
  --color-platinum-2 : #D9D7D4;
  --color-platinum-3 : #C5C3BE;
  --color-platinum-4 : #B2B0A9;
  --color-platinum-5 : #9F9C93;
  --color-platinum-6 : #8C887D;
  --color-platinum-7 : #777369;
  --color-platinum-8 : #615E56;
  --color-platinum-9 : #4C4943;
  --color-platinum-10 : #363430;
    /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  --color-cyan-1 : #e6fffb;
  --color-cyan-2 : #b5f5ec;
  --color-cyan-3 : #87e8de;
  --color-cyan-4 : #5cdbd3;
  --color-cyan-5 : #36cfc9;
  --color-cyan-6 : #13c2c2;
  --color-cyan-7 : #08979c;
  --color-cyan-8 : #00474f;
  --color-cyan-9 : #00474f;
  --color-cyan-10 : #002329;

  &.dark-mode{
--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--color-platinum-10 : #E9E8E6;
  --color-platinum-9 : #D9D7D4;
  --color-platinum-8 : #C5C3BE;
  --color-platinum-7 : #B2B0A9;
  --color-platinum-6 : #9F9C93;
  --color-platinum-5 : #8C887D;
  --color-platinum-4 : #777369;
  --color-platinum-3 : #615E56;
  --color-platinum-2 : #4C4943;
  --color-platinum-1 : #363430;

   --color-cyan-10 : #e6fffb;
  --color-cyan-9 : #b5f5ec;
  --color-cyan-8 : #87e8de;
  --color-cyan-7 : #5cdbd3;
  --color-cyan-6 : #36cfc9;
  --color-cyan-5 : #13c2c2;
  --color-cyan-4 : #08979c;
  --color-cyan-3 : #00474f;
  --color-cyan-2 : #00474f;
  --color-cyan-1 : #002329;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

   /* Cyan */
  --color-grey-10 : #e6fffb;
  --color-grey-9 : #b5f5ec;
  --color-grey-8 : #87e8de;
  --color-grey-7 : #5cdbd3;
  --color-grey-6 : #36cfc9;
  --color-grey-5 : #13c2c2;
  --color-grey-4 : #08979c;
  --color-grey-3 : #00474f;
  --color-grey-2 : #00474f;
  --color-grey-1 : #002329;

  

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0s, border 0s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", "Roboto", "Roboto Mono", "Rubik", sans-serif;
  color: var(--color-grey-700);

  transition: color 0s, background-color 0s ;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
//Tablet
@media (max-width: 1200px){

}

@media (max-width: 768px){
  font-size: 56.25%;

}

@media (max-width: 430px){
html{
  font-size: 50%;
}
}
`

export default GlobalStyles

// Thuộc tính	Kích thước màn hình (min-width)
// xs	< 576px (mobile nhỏ)
// sm	≥ 576px
// md	≥ 768px
// lg	≥ 992px
// xl	≥ 1200px
// xxl	≥ 1600px
