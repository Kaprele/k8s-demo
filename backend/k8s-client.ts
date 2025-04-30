import * as k8s from '@kubernetes/client-node';

const kc = new k8s.KubeConfig();
kc.loadFromDefault(); // This automatically loads from ~/.kube/config or in-cluster config

// API clients
export const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
export const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
export const k8sNetworkingApi = kc.makeApiClient(k8s.NetworkingV1Api);

export const namespace = 'k8s-demo';
export const ingressName = 'dynamic-game-ingress';

