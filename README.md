# Experiments with Pre-Release Automation

This experimental project demonstrates different approaches to automating the creation and deletion of package pre-release versions. We explored two main methods to achieve this: automating the process during pull requests and managing releases manually via GitHub's GUI.

## Approaches to Pre-Release Version Management

### 1. Automating Pre-Releases Through Pull Requests

This approach involves automating pre-release management during a pull request lifecycle using GitHub Actions. The following actions are configured for this approach:

1. **Create a Pre-Release Version on Pull Request Open**  
   Automatically publishes a pre-release version when a pull request is opened and a "pre-release" label is added.  
   *Action file*: `.github/workflows/pre-release.yml`

2. **Update the Pre-Release Version on Pull Request Branch Update**  
   Automatically updates the pre-release version when the pull request's branch is updated with new commits.  
   *Action file*: `.github/workflows/pre-release.yml`

3. **Delete the Pre-Release Version on Pull Request Merge**  
   Automatically deletes the pre-release version when the pull request is merged into the main branch.  
   *Action file*: `.github/workflows/delete-pre-releases-on-pr-merge.yml`

### 2. Managing Pre-Releases Through GitHub GUI

This approach involves manually managing pre-releases through the GitHub GUI and automating the related actions using GitHub Actions:

1. **Create a Pre-Release Version on Pre-Release Creation**  
   Automatically publishes a version when a pre-release is created using the GitHub GUI.  
   *Action file*: `.github/workflows/publish-pre-release.yml`

2. **Delete the Pre-Release Version on Pre-Release Deletion**  
   Automatically deletes the package version when its corresponding pre-release is deleted through the GitHub GUI.  
   *Action file*: `.github/workflows/delete-release.yml`

You can choose to use either of these approaches, or even combine them based on your specific needs.

## Things To Change Before Adding To Your Repo

Before integrating these GitHub Actions into your repository, make sure to update the configurations in the action files based on your repository's context:

1. **Scope**  
   Update the scope in the following files:
   - `.github/workflows/delete-pre-releases-on-pr-merge.yml`
   - `.github/workflows/pre-release.yml`
   - `.github/workflows/publish-pre-release.yml`

2. **Package Name**  
   Replace the placeholder package name in these files:
   - `.github/workflows/delete-pre-releases-on-pr-merge.yml`
   - `.github/workflows/delete-release.yml`
   - `.github/workflows/pre-release.yml`

3. **GitHub API Requests**  
   Modify the GitHub API request URLs in your action files according to your organization and package setup ([GitHub API Reference](https://docs.github.com/en/rest/packages/packages?apiVersion=2022-11-28#delete-package-version-for-an-organization)):

   - Replace `api.github.com/user/packages/npm/sem-release-experiments/versions` with  
     `api.github.com/orgs/ORG/packages/PACKAGE_TYPE/PACKAGE_NAME/versions`
     
   - Replace `api.github.com/user/packages/npm/sem-release-experiments/versions/$ID_TO_DELETE` with  
     `api.github.com/orgs/ORG/packages/PACKAGE_TYPE/PACKAGE_NAME/versions/PACKAGE_VERSION_ID`
