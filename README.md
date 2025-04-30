# Kubernetes Demo Project

This project serves as a hands-on exploration of Kubernetes deployments and pod management using the Kubernetes API and client-node interactions. It's designed to deepen your understanding of Kubernetes architecture, resource definitions, and operational workflows.

## Project Overview

The repository includes:

- **`backend/`**: A simple backend service containerized for deployment.
- **`frontend/`**: A frontend application to interact with the backend.
- **`hello-pod/`**: Basic pod configurations for initial testing.
- **`k8s/`**: Kubernetes manifests for deployments, services, and other resources.
- **`setup.sh`**: A script to set up the Kubernetes environment and deploy resources.
- **`skaffold.yaml`**: Configuration for Skaffold to streamline the development workflow.

## Prerequisites

- Install [kubectl](https://kubernetes.io/docs/tasks/tools/) and [Skaffold](https://skaffold.dev/docs/install/).
- Docker Desktop installed and running.
- Kubernetes cluster enabled via Docker Desktop.
- Ingress NGINX controller installed (see [official guide](https://kubernetes.github.io/ingress-nginx/deploy/)).

## Getting Started

1. **Deploy with Skaffold**:
   ```bash
   skaffold dev
   ```

## Learning Objectives

- Understand Kubernetes deployment structures.
- Interact with the Kubernetes API for pod management.
- Utilize Skaffold for continuous development and deployment.
- Gain practical experience with Kubernetes manifests and resource configurations.

