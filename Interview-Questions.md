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
