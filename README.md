# Atom Learning Component library

This package is one part of the Atom Learning design system

## Versioning

The project follows the SemVer standard [Semantic Versioning](https://semver.org/spec/v2.0.0.html) to make using the library easy. SemVer uses the `MAJOR`.`MINOR`.`PATCH` notation to identify changes with `MAJOR` representing breaking changes that are not backwards compatible, `MINOR` representing new features / non-breaking additions and `PATCH` representing fixes.

It is also a requirement to use [Semantic commits](https://www.conventionalcommits.org/en/v1.0.0/) as each tag will translate to a different type of version upgrade. For example:

- Commits with a `breaking change` will be associated with a major release.
- Commits with type 'feat' will be associated with a minor release.
- Commits with type 'fix' will be associated with a patch release.

_Note:_ The `precommit` hooks will prevent commits that don't have the required tag prefixed to the message

Versioning happens automatically when a feature branch gets merged into `main`. [semantic-release](https://github.com/semantic-release/semantic-release) is employed to calculate the new version number by running through all the new commits and their commit message tag. Once the new version is calculated, it updates the package.json and automatically updates the `CHANGELOG.md`. Then it proceeds to publish the new version both in `GitHub` and `npm`.

_Note:_ Once a branch gets merged into `main`, it is automatically published, therefore `main` always needs to be in a pristine state. For that reason, following the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) model, all work needs to happen into a branch, and `main` is locked

### Purpose

- To ensure that each version is marked clearly and can be consumed without any issues
- To reduce the amount of manual effort required to publish a new version
- To help enforce the selected standards and frameworks, and reduce the room for human error

### Tools

- [Semantic-release](https://github.com/semantic-release/semantic-release)
- Plugins:
  - `@semantic-release/commit-analyzer` - checks commits messages for the required tags
  - `@semantic-release/release-notes-generator` - creates/updates the release notes
  - `@semantic-release/npm` - publishes version to `npm`
  - `@semantic-release/github` - publishes version to `GitHub Releases`
- `husky` - precommit hook to prevent incomplete commit messages

### How to setup (To be removed once process is setup)

- https://dev.to/joshaguilar/fully-automating-npm-package-releases-3k7e
- https://github.com/semantic-release/semantic-release/blob/master/docs/usage/installation.md#installation
