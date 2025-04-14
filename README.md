<h1 align="center">iconsax for React and React Native</h1>

<p align="center">
  1000 icons in 6 different styles, total 6000 icons | 
Perfectly balance | 
24px grid-based
<p>

<p align="center">
  <a href="https://iconsax.erfan.ee/"><strong>Browse icons at site</strong></a>
</p>
<br>
<br>

## Installation

### React

```bash
yarn add iconsax-reactjs
# or
npm i iconsax-reactjs
```

### React Native

```bash
yarn add iconsax-react-nativejs react-native-svg
# or
npm i iconsax-react-nativejs react-native-svg
```

## Usage

```jsx
import React from 'react';
//import icon. for React Native import from 'iconsax-react-nativejs'
import { EmojiHappy } from 'iconsax-reactjs';

const Example = () => {
  // then use it as a normal React Component
  return <EmojiHappy />;
};
```

You can configure Icons with inline props:

```jsx
<EmojiHappy color="#eee" variant="Bulk" size={54} />
```

## Props

| Prop      | Type                                                | Default        | Note                   |
| --------- | --------------------------------------------------- | -------------- | ---------------------- |
| `color`   | `string`                                            | `currentColor` | css color              |
| `size`    | `number` `string`                                   | 24px           | size={24} or size="24" |
| `variant` | `Linear` `Outline` `TwoTone` `Bulk` `Broken` `Bold` | `Linear`       | icons styles           |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

[MIT](./LICENSE)
