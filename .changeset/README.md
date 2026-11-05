# Changesets

This folder is managed by [changesets](https://github.com/changesets/changesets). Every change that should cut a release needs a changeset: run `bunx changeset`, pick the semver bump, and describe the change. The release workflow opens a "version packages" PR that applies pending changesets; merging it versions, tags, and publishes `@omnidotdev/herald` to the Manifold registry.
