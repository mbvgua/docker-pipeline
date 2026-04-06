## Simple Deployment Pipeline

This runs a simple CI/Cd pipeline using Github Actions. Actions employed include:
- [actions/checkout](https://github.com/actions/checkout)
- [docker/login-action](https://github.com/docker/login-action)
- [docker/build-push-action](https://github.com/docker/build-push-action)
- [docker/setup-buildx-action](https://github.com/docker/setup-buildx-action)

The action will build a docker container and push it to my dockerhub account on this [repo](https://hub.docker.com/repository/docker/mbvgua/beermapping/general). Any changes made on push will be synchronized.
