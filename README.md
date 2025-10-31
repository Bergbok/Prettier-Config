## Usage

```bash
bun add -d @bergbok/prettier-config
```

```diff
# package.json
+ "prettier": "@bergbok/prettier-config"
```

## Extending

```typescript
// .prettierrc.js / prettier.config.js / .prettierrc.ts / prettier.config.ts / .prettierrc.mjs / prettier.config.mjs / .prettierrc.mts / prettier.config.mts
import baseConfig from '@bergbok/prettier-config';
import type { Config } from 'prettier';  // ts
/** @type {import("prettier").Config} */ // js

const config = {
	...baseConfig,
	semi: false
};

export default config;
```
