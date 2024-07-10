# NPM Basic Commands

### 1. `npm init`

Initializes a new npm project and creates a `package.json` file.

```javascript
npm init # interactive mode
npm init -y # accept default values
```

### 2. `npm install`

Installs all the dependencies listed in `package.json`.

```javascript
npm install # installs all dependencies
npm install <package_name> # installs a specific package
npm install <package_name>@<version> # installs a specific version of a package
npm install <package_name> --save-dev # installs a package as a dev dependency
npm install <package_name> --global # installs a package globally
npm install --production # installs only production dependencies
```

### 3. `npm uninstall`

Removes a package.

```javascript
npm uninstall <package_name> # removes a package
npm uninstall <package_name> --save-dev # removes a package from dev dependencies
```

### 4. `npm update`

Updates all packages to the latest version within the specified range in `package.json`.

```javascript
npm update # updates all packages
npm update <package_name> # updates a specific package
```

### 5. `npm run`

Runs a script defined in the `scripts` section of `package.json`.

```javascript
npm run <script_name> # runs a specific script
npm run # lists all available scripts
```

# NPM Advanced Commands

### 6. `npm ci`

Installs dependencies from the `package-lock.json` file. It is faster and more reliable than `npm install` for CI environments.

```javascript
npm ci # clean install based on package-lock.json
```

### 7. `npm audit`

Analyzes the dependency tree to identify security vulnerabilities.

```javascript
npm audit # lists security vulnerabilities
npm audit fix # attempts to fix vulnerabilities
npm audit fix --force # forcefully applies updates, may break dependencies
```

### 8. `npm outdated`

Lists packages that are outdated.

```javascript
npm outdated # shows outdated packages
```

### 9. `npm dedupe`

Reduces duplication in the dependency tree by consolidating dependencies.

```javascript
npm dedupe # deduplicates packages
```

### 10. `npm link`

Links a local package for development purposes.

```javascript
npm link # links the current package globally
npm link <package_name> # links a globally installed package to the current project
```

# Publishing Commands

### 11. `npm publish`

Publishes a package to the npm registry.

```javascript
npm publish # publishes the package
npm publish --access public # publishes a public package
npm publish --access restricted # publishes a private package
```

### 12. `npm version`

Bumps the version number in `package.json` and creates a git tag.

```javascript
npm version <new_version> # sets a specific version
npm version major # increments the major version
npm version minor # increments the minor version
npm version patch # increments the patch version
```

### 13. `npm unpublish`

Removes a package from the npm registry.

```javascript
npm unpublish <package_name> --force # unpublishes a package
```

# Configuration Commands

### 14. `npm config`

Manages npm configuration settings.

```javascript
npm config set <key> <value> # sets a configuration value
npm config get <key> # gets a configuration value
npm config delete <key> # deletes a configuration value
npm config list # lists all configuration settings
```

### 15. `npm cache`

Manages the npm cache.

```javascript
npm cache clean --force # clears the npm cache
npm cache verify # verifies the npm cache integrity
```

# Miscellaneous Commands

### 16. `npx`

Executes binaries from npm packages without globally installing them.

```javascript
npx <command> # runs a command from a package
```

### 17. `npm ls`

Lists installed packages in a tree structure.

```javascript
npm ls # lists all installed packages
npm ls <package_name> # lists a specific package and its dependencies
```

### 18. `npm bin`

Displays the path to the npm binaries.

```javascript
npm bin # shows the local binaries path
npm bin -g # shows the global binaries path
```

### 19. `npm doctor`

Runs a series of checks to diagnose potential issues with your npm setup.

```javascript
npm doctor # runs diagnostic checks
```

### 20. `npm rebuild`

Rebuilds native addons from npm packages.

```javascript
npm rebuild # rebuilds all packages
npm rebuild <package_name> # rebuilds a specific package
```

# Workspace Commands

### 21. `npm workspaces`

Manages workspaces in a monorepo setup.

```javascript
npm workspaces <command> # runs a command in the context of all workspaces
npm workspaces run <script> # runs a script across all workspaces
```
