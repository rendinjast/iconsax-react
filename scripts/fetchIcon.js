const path = require('path');
const fs = require('fs');

const { readdirSync } = fs;

const rootDir = path.resolve();

const IconsDir = path.join(rootDir, 'icons');
// does not matter witch variant(Linear, Outline, TwoTone,...) folder
// cause all of them have similar icon name
const categoriesDir = path.join(IconsDir, 'Linear');

const fetchIcon = async () => {
  const variants = readdirSync(IconsDir);

  const _categories = readdirSync(categoriesDir);
  const categories = _categories.map((x) => {
    const icons = readdirSync(path.join(categoriesDir, x));
    return { name: x, icons };
  });
  return { variants, categories };
};

module.exports = fetchIcon;
