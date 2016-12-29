#### Webpack-CLi-for-real
*(`webpack-cli-fin`)*

**Let's get started:**

1. Create entry
2. Write some JS
3. Run `webpack --entry [relative path] --output-file [relative path]`
4. `node [path to output file]`

**Questions:**
- *How can we make bundling our code easier?*
- *How can we make running our code easier?*

*`git co webpack-modules`*

#### Webpack-CLi
*(`webpack-cli`)*
**Let's get started:**

1. Create entry
2. Write some JS
3. Run Webpack

**Questions:**
- *What happens when we run `webpack`?*
- *How do we know if this is even working?*

*`git co webpack-cli-fin`*

#### Local Webpack 
*(`webpack-npm`)*
  - `npm i -D webpack` - *install Webpack locally as a dev dependency*
  - npm scripts - *run scripts local to our app subvert some global dependencies*

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack"
},
```
  - `npm run webpack`