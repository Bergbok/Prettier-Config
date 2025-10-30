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
import bergbokConfig from "@bergbok/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
	...bergbokConfig,
	semi: false,
};

export default config;
```
