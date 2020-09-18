# Development
- `yarn start`
- `yarn pack` optional

# Deployment
- `yarn build`

## Github Action


- Update the version in your project's package.json file (e.g. 1.2.3)
- Commit that change (git commit -am v1.2.3)
- Tag your commit (git tag v1.2.3). Make sure your tag name's format is v*.*.*. Your workflow will use this tag to detect when to create a release
- Push your changes to GitHub (git push && git push --tags)
- https://github.com/samuelmeuli/action-electron-builder


# bugs

- log level not defined

# ref

- https://github.com/samuelmeuli/action-electron-builder
- https://www.electron.build/#quick-setup-guide
