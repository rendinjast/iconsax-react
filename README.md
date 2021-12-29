<h1 align="center">iconsax for React and React Native</h1>

<p align="center">
  1000 icons in 6 different styles, total 6000 icons | 
Perfectly balance | 
24px grid-based
<p>

<p align="center">
  <a href="https://iconsax-react.pages.dev/"><strong>Browse icons at site</strong></a>
</p>
<br>
<br>

> ©️ iconsax [github](https://github.com/lusaxweb/iconsax) and
> [official website](https://iconsax.io/) (other format and platform available)

## Installation

### React

```bash
yarn add iconsax-react
# or
npm i iconsax-react
```

### React Native

```bash
yarn add iconsax-react-native react-native-svg
# or
npm i iconsax-react-native react-native-svg
```

## Usage

```jsx
import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { EmojiHappy } from 'iconsax-react';

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
