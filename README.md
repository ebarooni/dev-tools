# Mirror-to-GitLab Workflow Setup Guide

This guide outlines the steps to integrate the mirror-to-GitLab workflow into a new repository.

## Prerequisites
Before proceeding, ensure you have the following:

- A GitHub repository containing the code you want to mirror to GitLab.
- Access to both GitHub and GitLab accounts.

## Setup Instructions

### 1. Generate GitLab Personal Access Token (PAT)
- Navigate to GitLab > User settings > Access Tokens.
- Generate a PAT with at least the `write_repository` scope.

### 2. Add PAT as a Repository Secret
- Go to your GitHub repository's **Settings**.
- Navigate to **Secrets and Variables** under **Actions**.
- Add the generated PAT as a repository secret.
    - Name the secret `GITLAB_MIRROR_TOKEN`.

### 3. Configure Git Identity
- Control git config name and email in your workflow YML file (lines 28-29).
    - Update with appropriate name and email.

### 4. Create GitLab Host Repository
- Create a host repository in GitLab, ideally with the same name as your GitHub repository.

### 5. Add GitLab Host Repository URL as a Repository Secret
- Go to your GitHub repository's **Settings**.
- Navigate to **Secrets and Variables** under **Actions**.
- Add the host repository URL as a repository secret.
  - Name the secret `GITLAB_REPO_URL` (example value -> "https&#58;//gitlab.com/\<USERNAME>/\<PROJECT>.git").

## Additional Notes
- Ensure proper permissions and access controls are set up on both GitHub and GitLab repositories.
- For any assistance or issues, refer to the documentation of GitHub Actions and GitLab.
