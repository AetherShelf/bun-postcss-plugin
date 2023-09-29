# bun-postcss-plugin

`bun-postcss-plugin` is a [PostCSS](https://postcss.org/) plugin for [Bun](https://bun.sh/) that enables importing CSS files directly in your JavaScript files. Once imported, the plugin processes the CSS using PostCSS, and returns the processed CSS as a string which can be injected into your document or utilized however you see fit.

## Installation

```bash
bun install bun-postcss-plugin --save-dev
```

## Getting Started

Add the plugin to your preload in your `bunfig.toml`

```toml
preload = [ "bun-postcss-plugin" ]
```

and your `tsconfig.json` types field

```yaml yaml is used here to allow comments in JSON
{
  "compilerOptions": {
    // ...
    "types": [
        // ...
        "bun-postcss-plugin"
    ]
  }
}
```

Then you can import css files in your code directly as such

```js
// Import your CSS
import styles from './styles.css';

// Your CSS is now processed and ready to use!
console.log(styles);  // Logs processed CSS as a string
```

## Configuration

`bun-postcss-plugin` will use the standard `postcss.config.js` file, like many other projects do.