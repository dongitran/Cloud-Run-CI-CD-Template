# Cloud Run CI/CD Template

This is a simple template to deploy a Node.js application to Google Cloud Run using CI/CD through GitHub Actions.

## Repository Structure

- `.github/workflows/cloudrun.yml`: Configuration file for the GitHub Actions CI/CD workflow.
- `Dockerfile`: Dockerfile to build the Node.js application image.
- `package.json`: File describing the application's information and dependencies.

## CI/CD Workflow

The workflow is configured to perform the following steps:
1. **Checkout code**: Fetch the source code from the repository.
2. **Set up Google Cloud SDK**: Install and configure the Google Cloud SDK for deployment.
3. **Build Docker image**: Build the Node.js application image.
4. **Configure Docker and push image**: Configure and push the image to the Container Registry.
5. **Deploy to Google Cloud Run**: Deploy the application to Google Cloud Run.

## Usage

1. Fork this repository into your GitHub account.
2. Configure the secrets (`GCLOUD_AUTH`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_GROUP_DEPLOYMENTS`) in Settings > Secrets to use during the CI/CD process.
3. Modify and add features to your Node.js application.
4. Commit and push new code to your repository. GitHub Actions will automatically deploy upon changes.

## Notifications

Upon successful or failed deployment, notifications will be sent to a Telegram channel to report the outcome.

### Success
Notifications will display successful deployment information.

### Failure
Notifications will inform about any encountered errors during deployment.

---

If you have any questions or suggestions, please feel free to open an issue or pull request. Contributions are highly welcomed.

