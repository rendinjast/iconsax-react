const cc = require('camelcase');
const path = require('path');
const fs = require('fs').promises;
const existsSync = require('fs').existsSync;
const fetchIcon = require('./fetchIcon');
const generateIcons = require('./generateIcons');

// Paths
const rootDir = path.resolve();
const IconsDir = path.join(rootDir, 'icons');
const packagesDir = path.join(rootDir, 'packages');
const packages = ['react', 'react-native'];

const space = () => console.log('-----------------------------');
const main = async () => {
  try {
    // 1. fetching icon form svg files
    space();
    console.log('1. fetching icon files');
    const icons = await fetchIcon(IconsDir);
    console.log(icons);

    space();
    packages.forEach(async (p) => {
      const srPath = path.join(packagesDir, `iconsax-${p}`, 'src');

      // 2. generating meta-data file
      console.log(`----- generating meta-data file -> ${p}`);
      const categories = icons.categories.map((cat) => {
        const icons = cat.icons.map((i) => {
          if (i.match(/^\d/)) {
            i = 'I' + i;
          }
          return cc(i.replace('.svg', ''), { pascalCase: true });
        });
        return { ...cat, icons };
      });
      await fs.writeFile(
        path.join(rootDir, 'meta-data.json'),
        JSON.stringify({ variants: icons.variants, categories }),
      );

      // 3. cleaning old icons
      console.log(`----- cleaning old icons -> ${p}`);

      // const isDirectory = stat.isDirectory();
      const exist = existsSync(srPath);
      if (exist) {
        await fs.rm(srPath, {
          recursive: true,
          force: true,
        });
      }
      await fs.mkdir(srPath);

      // 4. generating icons
      // await generateIcons['react-native'](icons);
      await generateIcons[p](icons);
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
main();
