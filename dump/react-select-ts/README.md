# React Select/TypeScript

1. `npm i react-select`
2. `npx create-react-app --template typescript .`
3. `npm install -D tailwindcss postcss autoprefixer`
4. `npx tailwindcss init -p`

---

tailwind.config.js

```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Popular Props

options  
value  
onChange  
placeholder

isMulti - множественный выбор  
isLoading - состояние загрузки  
isSearchable - поиск клавиатурой  
menuIsOpen - самоконтроль состояния меню  
theme - стилизация  
classNamePrefix - стилизация с помощью префикса

---

## Single Select

```tsx
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'south-korea',
    label: 'South Korea',
  },
  {
    value: 'germany',
    label: 'Germany',
  },
  {
    value: 'canada',
    label: 'Canada',
  },
  {
    value: 'japan',
    label: 'Japan',
  },
];

const SingleSelect = () => {
  const [currentCountry, setCurrentCountry] = useState('');

  const getValue = () => {
    return currentCountry ? options.find((option) => option.value === currentCountry) : '';
  };

  const onChangeHandler = (newValue: any) => {
    setCurrentCountry(newValue.value);
  };

  return (
    <>
      <h1 className="mb-3 text-white text-xl font-medium">Choice Select</h1>
      <Select onChange={onChangeHandler} value={getValue()} options={options} />
    </>
  );
};
```

---

## Multiple Select

```tsx
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'south-korea',
    label: 'South Korea',
  },
  {
    value: 'germany',
    label: 'Germany',
  },
  {
    value: 'canada',
    label: 'Canada',
  },
  {
    value: 'japan',
    label: 'Japan',
  },
];

let isMultiple = true;

const MultipleSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>(['canada', 'japan']);

  const getValue = () => {
    if (currentCountries) {
      return isMultiple
        ? options.filter((option) => currentCountries.indexOf(option.value) >= 0)
        : options.find((option) => option.value === currentCountries);
    } else {
      return isMultiple ? [] : '';
    }
  };

  const onChangeHandler = (newValue: any) => {
    setCurrentCountries(isMultiple ? newValue.map((val: any) => val.value) : newValue);
  };

  return (
    <>
      <h1 className="mb-3 text-white text-xl font-medium">Choice Select</h1>
      <Select
        onChange={onChangeHandler}
        value={getValue()}
        options={options}
        isMulti={isMultiple}
        isLoading
      />
    </>
  );
};
```

---

## Типизация

option.interface.ts

```ts
export interface IOption {
  value: string;
  label: string;
}
```

TsSelect.tsx

```tsx
import React, { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { IOption } from './option.interface';

const options: IOption[] = [
  {
    value: 'south-korea',
    label: 'South Korea',
  },
  {
    value: 'germany',
    label: 'Germany',
  },
  {
    value: 'canada',
    label: 'Canada',
  },
  {
    value: 'japan',
    label: 'Japan',
  },
];

const TsSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>(['canada', 'japan']);

  const getValue = () => {
    return currentCountries
      ? options.filter((option) => currentCountries.indexOf(option.value) >= 0)
      : [];
  };

  const onChangeHandler = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map((val) => val.value));
  };

  return (
    <>
      <h1 className="mb-3 text-white text-xl font-medium">Choice Select</h1>
      <Select
        onChange={onChangeHandler}
        value={getValue()}
        options={options}
        placeholder="Choice countries"
        isMulti
      />
    </>
  );
};

export default TsSelect;
```

---

## Кастомные стили

classNamePrefix - добавляет к существующим стилям указанный нами префикс, после чего мы сможем
взаимодействовать со стилями. Для удобства будем использовать SCSS.
Переопределяя стили - везде писать !important

```tsx
<Select classNamePrefix={'styled-select'} />
```

```scss
.styled-select {

  &__control {
    &--menu-is-open {}
  }

  &__value-container {}

  &__input-container {}

  &__indicator-separator {
    display: none !important;
  }

  &__indicators {}

  &__indicator {
    &:hover {}
  }

  &__multi-value {
    &__label {}

    &__remove {
      &:hover {}
    }
  }

  &__menu {
    background-color: #ccc !important;
  }

  &__option {
    &--is-focused {}
  }
}
```

## Базовая анимация при удалении элемета из MultiSelect

1. makeAnimated
2. animatedComponents
3. components={animatedComponents}

Ignore conflict:
 //@ts-ignore
    onChange={onChangeHandler} 

```tsx
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const StyledSelect = () => {
  const [currentCountries, setCurrentCountries] = useState<any>([])

  const getValue = () => {
    return currentCountries 
      ? options.filter((option) => currentCountries.indexOf(option.value) >= 0) 
      : []
  }

  const onChangeHandler = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map(val => val.value)) 
  }

  <Select 
    classNamePrefix={'styled-select'}
    //@ts-ignore
    onChange={onChangeHandler} 
    value={getValue()} 
    options={options} 
    isMulti
    components={animatedComponents}
  />
```

---

## Анимация выпадающего списка

```scss
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.3; 
  }
  100%  {
    opacity: 1;
    transform: scale(1);
  }
}

.styled-select {

  &__menu {
    background-color: #ccc !important;
    animation: scaleIn 0.35s ease-in-out;
}
}
```

