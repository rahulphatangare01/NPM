# NPM Interview Questions

## Medium Level Questions

### 1. What is NPM, and why is it used?

- npm is the default package manager for the JavaScript runtime environment Node.js.

- It is used to install, share, and manage dependencies in Node.js projects. npm makes it easy to manage the packages and modules required for a project, ensuring consistency and version control.

### 2. How do you initialize a new npm project?

- To initialize a new npm project, you use the `npm init` command. This command creates a `package.json` file, which contains metadata about the project and its dependencies.

```javascript
npm init
```

For a quicker setup with default options, you can use:

```javascript
npm init -y
```

### 3. What is the purpose of the package.json file?

several purposes of `package.json` file :

- **Metadata**: Contains information about the project (name, version, description, etc.).
- **Dependencies**: Lists the packages the project depends on.
- **Scripts**: Defines scripts that can be run using npm, such as test, start, build, etc.
- **Versioning**: Specifies the version of the project and its dependencies.

### 4. How do you install a specific version of a package?

To install a specific version of a package, use the npm install command followed by the package name and the desired version.

```javascript
npm install <package_name>@<version>
```

For example, to install version 1.0.0 of the lodash package:

```javascript
npm install lodash@1.0.0
```

### 5. How can you update all dependencies in a project to their latest versions?

To update all dependencies to their latest versions, you can use the `npm update` command. This updates the packages to the latest version that matches the version range specified in the `package.json`.

```javascript
npm update
```

To forcefully update to the latest versions, you can use:

```javascript
npm install <package_name>@latest
```

### 6. Explain the difference between dependencies and devDependencies.

**dependencies**: These are the packages required for the application to run. They are specified in the `dependencies` section of `package.json` and are installed when running `npm install`.
**devDependencies**: These are the packages needed only for development (e.g., testing frameworks, build tools). They are specified in the devDependencies section of `package.json` and can be installed using `npm install --save-dev`

### 7. How can you prevent installing optional dependencies?

To prevent installing optional dependencies, you can use the `--no-optional` flag with the `npm install` command.

```javascript
npm install --no-optional
```

### 8. What is the purpose of npm ci, and how is it different from npm install?

`npm ci` (continuous integration) is used to install dependencies from the `package-lock.json` file.
It ensures a clean slate by removing the existing `node_modules` directory and installing
dependencies exactly as specified in `package-lock.json`. This guarantees reproducible builds.

In contrast, npm install installs dependencies based on `package.json` and updates the `package-lock.json` file if there are changes in the dependency tree.

### 9. How do you uninstall a package?

To uninstall a package, use the npm uninstall command followed by the package name.

```javascript
npm uninstall <package_name>
```

### 10. What is the npm link command used for?

`npm link` is used to symlink a package folder. It allows you to develop a package locally and use it in other projects without needing to publish it to the npm registry. This is useful for development and testing.

To link a package, navigate to the package directory and run:

```javascript
npm link
```

## Advance Level Questions

### 1. How does npm handle version conflicts when two packages depend on different versions of the same dependency?

npm uses a nested dependency tree to handle version conflicts. When two packages depend on different versions of the same dependency, npm installs each version in a way that satisfies both packages. If the versions are incompatible, npm will install multiple versions of the dependency, each in its own node_modules directory within the respective package directory that requires it.

### 2. What is the purpose of `package-lock.json` and how does it differ from `package.json`?

`package-lock.json` is automatically generated and updated by npm. It ensures that the exact version of every installed package is recorded, providing a snapshot of the entire dependency tree. This file guarantees that subsequent installations produce the same dependency tree, ensuring reproducibility across different environments.

`package.json` specifies the project's metadata and dependency ranges, but package-lock.json captures the exact versions of all dependencies, making sure the installed dependencies are consistent.

### 3. How can you create and publish a private package to npm?

To create and publish a private package to npm, you need an npm account with access to private package publishing. In your package.json, set the private field to true:

```javscript
{
  "name": "my-private-package",
  "version": "1.0.0",
  "private": true,
  "main": "index.js"
}
```

Then, log in to your npm account using:

```javascript
npm login
```

Finally, publish the package:

```javascript
npm publish --access restricted
```

### 4. What is the `npm shrinkwrap` command and when would you use it?

`npm shrinkwrap` generates a `npm-shrinkwrap.json` file, which locks down the dependency tree similarly to `package-lock.json`, but is used explicitly to share the dependency tree with end users. It ensures that the exact versions of dependencies are installed.

You would use `npm shrinkwrap` for projects where you need to ensure a specific, reproducible set of dependencies, particularly for deployed applications where consistency is critical.

### 5. Explain the differences between npm and yarn.

**Performance**: Yarn is generally faster than npm due to its parallel installation process and caching mechanism.
**Deterministic Installs**: Yarn uses a yarn.lock file to ensure deterministic dependency resolution, similar to npm's package-lock.json, but Yarn was designed with this feature from the start.
**Offline Mode**: Yarn can install dependencies offline if they have been installed previously.
**Security**: Yarn checks for integrity using checksums to ensure that installed packages haven't been tampered with.
**Monorepo Support**: Yarn has built-in support for managing monorepos using workspaces, whereas npm added similar features later.

### 6. How do you handle scoped packages in npm?

Scoped packages are a way to group related packages under a common namespace. A scoped package name starts with @, followed by the scope name and a slash, and then the package name.

To install a scoped package:

```javascript
npm install @scope/package-name
```

To publish a scoped package, you need to ensure the name field in package.json includes the scope:

```javascript
{
  "name": "@scope/package-name",
  "version": "1.0.0"
}
```

Then, publish it using:

```javascript
npm publish --access public
```

Or for private scoped packages:

```javascript
npm publish --access restricted
```

### 7. What is the role of `npx` in the npm ecosystem?

`npx` is a tool that comes with npm (version 5.2.0 and later) that allows you to execute binaries from npm packages without installing them globally. It simplifies running commands from locally or remotely installed packages.

For example, to run the create-react-app command without installing it globally:

```javascript
npx create-react-app my-app
```

### 8. How do you configure npm to use a different registry?

You can configure npm to use a different registry by running the following command:

```javascript
npm config set registry <registry_url>
```

To reset to the default registry:

```javascript
npm config delete registry
```

### 9. What are peer dependencies and how are they different from regular dependencies?

Peer dependencies are a way to specify that a package depends on a certain version of another package, but it does not directly include it in its dependencies. Instead, the consuming project must install the specified version.

This is useful for plugins or libraries that need to ensure compatibility with a particular version of a framework or library used by the parent project.

In `package.json`, peer dependencies are defined like this:

```javascript
{
  "peerDependencies": {
    "react": "^16.0.0"
  }
}

```

### 10. How can you audit and fix vulnerabilities in your npm packages?

npm provides a built-in tool to audit and fix vulnerabilities in your project's dependencies. To audit your packages, run:

```javascript
npm audit
```

This command will output a list of vulnerabilities found in your project. To fix these vulnerabilities, you can use:

```javascript
npm audit fix
```
