pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-node-app'
        KUBECONFIG = '/root/.kube/config' // Update as per your Jenkins agent
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/dv19980105/new-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image("${IMAGE_NAME}").inside {
                        sh 'npm install'
                        echo "Skipping tests"
                    }
                }
            }
        }

        stage('Push Image to Registry') {
            steps {
                script {
                    // For local K3d registry or Docker Hub
                    sh "docker tag ${IMAGE_NAME} myregistry.localhost:5001/${IMAGE_NAME}:latest"
                    sh "docker push myregistry.localhost:5001/${IMAGE_NAME}:latest"
                }
            }
        }

        stage('Deploy to K3d') {
            steps {
                script {
                    sh "kubectl apply -f k8s/deployment.yaml"
                    sh "kubectl apply -f k8s/service.yaml"
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    sh "kubectl get pods"
                    sh "kubectl get svc"
                }
            }
        }
    }
}
