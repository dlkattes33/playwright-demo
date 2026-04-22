pipeline {
    agent any

    tools {
        nodejs 'Node20'   // Updated to use your new Node version
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
            post {
                always {
                    junit 'test-results/results.xml'
                    archiveArtifacts artifacts: 'test-results/html/**', fingerprint: true
                    archiveArtifacts artifacts: 'test-results/**', fingerprint: true
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
