# Remix & Graphql

## run remix app

```sh
pnpm --filter my-remix-app dev
```

or

```sh
npx nx dev my-remix-app
```

## /dev/null

Redirecting standard output to ‘/dev/null’: `command > /dev/null`
Redirecting standard error to ‘/dev/null’: `command 2> /dev/null`
Redirecting both output and error to ‘/dev/null’: `command >/dev/null 2>&1`

## Typescript

### can't find module error

After adding "type":"module" to package.json, node will use the esm resolution to resolve your imports, which means it starts to treat all '.js' files as es modules. In this case, you have to add the '.js' or any other file extensions explicitly in your import statements.

```ts
// this will not work anymore
import { Button } from './Button'

// instead you have to write the extensions manually
import { Button } from './Button.js'
```

In TypeScript, use the '.js' extension in import statements. TypeScript recognizes the 'module' resolution and will keep the '.js' extension in compiled files. But be sure to add following rules in tsconfig.json

```json
"moduleResolution": "Bundler",
```

### isolatedModules

If this flag is set to true, following codes will cause errors.

1. references to const enum members. can't reference to a const enum declared in another file.

- Solution: don't use const enum.

1. non-module files: files without import and export statements.

- Solution: make sure all files are js modules.

1. exports of non-value identifiers. Such as export a type or an interface.

- Solution: don't export non-value identifiers.
