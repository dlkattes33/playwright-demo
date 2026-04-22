pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
            args '-u root'
        }
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

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
            post {
                always {
                    junit 'test-results/results.xml'
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
