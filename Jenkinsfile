pipeline {
  agent any

  tools {
    nodejs "Node20"
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
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Archive Results') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'test-results/*.xml', allowEmptyArchive: true
        junit testResults: 'test-results/*.xml', allowEmptyResults: true
      }
    }
  }
}
