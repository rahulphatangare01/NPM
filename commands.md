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
