// server.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import startRoute from './routes/start.js';
import stopRoute from './routes/stop.js'
import podsRoute from './routes/pods.js';
import {Request, Response } from 'express';
import crypto from "crypto";
import {k8sApi, namespace} from "./k8s-client";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/start', startRoute);
app.use('/api/stop', stopRoute)
app.use('/api/pods', podsRoute);

// Healthcheck
app.get('/api/healthz', (_req: Request, res: Response) => {
    res.status(200).send('OK');
});



// Start server
app.listen(PORT, async () => {
    console.log(`🚀 Backend server screaming on http://localhost/api`);

    // await startPodIGuess();
});


async function startPodIGuess() {
    try {
        // Step 1: Generate a random 4-letter code
        const code = crypto.randomBytes(2).toString('hex').toUpperCase(); // e.g. "A1B2"
        const podName = `pod-${code.toLowerCase()}`;

        // Step 2: Define Pod manifest
        const podManifest = {
            metadata: {
                name: podName,
                labels: {
                    app: 'hello-pod',
                    code: code,
                },
            },
            spec: {
                containers: [
                    {
                        name: 'hello-container',
                        image: 'nginx:alpine',
                        ports: [{containerPort: 3000}],
                        env: [{name: "CODE", value: code}],
                    },
                ],
                restartPolicy: 'Never',
            },
        };

        // Step 3: Create Pod
        await k8sApi.createNamespacedPod({namespace: namespace, body: podManifest});

        // Step 4: (Later) Create Service and Ingress here (placeholder for now)

    } catch (error) {
        console.error('Error creating pod:', error);
    }
}