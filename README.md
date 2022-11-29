# Webpack Demo App

Diving into webpack fundamentals through this freeCodeCamp tutorial: https://www.youtube.com/watch?v=MpGLUVbqoYQ.

# Notes

1. Imports failing with Webpack unable to resolve modules

- FIX: Use full paths including file extension when specifying an import
- e.g. `import { alertMessageIsValid } from "./utility-functions";` vs `import { alertMessageIsValid } from "./utility-functions.js";`

2. Default webpack command will take care of building the dependency hierarchy (that's it's main purpose)

- Generates a single minified dist/main.js file as default (this can be controlled through config)
- Alternative is to manually include files and manually ensure that dependencies are correctly loaded at the `<script>` level

3. Couple new concepts in trying to build a vanilla JS enum construct

- ```{javascript}
  export const MessagePriorities = Object.freeze({
    High: Symbol("high"),
    Medium: Symbol("medium"),
    Low: Symbol("low"),
  });
  ```

- `Symbol` makes the reference globally unique and regardless of the text description `Object.freeze` makes the object immutable `.description` provides access to stringified version `MessagePriorities.High.description`

4. Source Maps

- https://blog.teamtreehouse.com/introduction-source-maps
- https://webpack.js.org/configuration/devtool/
- https://github.com/webpack/webpack/tree/main/examples/source-map

5. Loaders

- https://webpack.js.org/loaders/
- https://webpack.js.org/concepts/loaders/#using-loaders

6. Modules and Import/Exports

- https://webpack.js.org/api/module-methods/
