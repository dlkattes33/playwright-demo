pipeline {
  agent any
  tools { nodejs "Node20" }

  stages {
    stage('Install Dependencies') {
      steps { sh 'npm ci' }
    }
    stage('Install Playwright Browsers') {
      steps { sh 'npx playwright install --with-deps chromium' }
    }
    stage('Run Playwright Tests') {
      steps { sh 'npx playwright test' }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
      junit testResults: 'test-results/*.xml', allowEmptyResults: true
    }
  }
}