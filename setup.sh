#!/bin/bash


# Backend
mkdir -p backend/routes

# Frontend
mkdir -p frontend/src/components

# Hello-pod
mkdir hello-pod

# Kubernetes YAMLs
mkdir k8s

# Touch base files
touch backend/server.js
touch backend/k8s-client.js
touch backend/routes/start.js
touch backend/routes/pods.js
touch frontend/src/App.jsx
touch frontend/src/components/PodList.jsx
touch frontend/src/components/StartButton.jsx
touch hello-pod/server.js
touch k8s/deployment-backend.yaml
touch k8s/ingress.yaml
touch k8s/role.yaml
touch k8s/serviceaccount.yaml
touch k8s/pod-template.yaml

echo "✅ Folder structure and base files created."
