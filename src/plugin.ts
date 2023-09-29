import type { BunPlugin, OnLoadResult } from "bun";
import postcss from "postcss";
import postcssrc from "postcss-load-config";

export const cssPlugin: BunPlugin = {
  name: "PostCSS Loader",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const cssFile = await Bun.file(args.path).text();
      const css = await postcssrc({
        from: args.path,
        to: args.path,
      }).then(({ plugins }) => postcss(plugins).process(cssFile).async());
      return {
        loader: "object",
        exports: {
          default: css.css,
        },
      } satisfies OnLoadResult;
    });
  },
};
