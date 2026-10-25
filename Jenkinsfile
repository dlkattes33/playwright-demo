pipeline {
  agent any
  tools { nodejs "Node20" }
  environment { CI = 'true' }
  
  stages {
    stage('Install Dependencies') {
      steps { sh 'npm ci' }
    }
    stage('Install Playwright Browsers') {
      steps { sh 'npx playwright install --with-deps chromium firefox' }
    }
    stage('Run Playwright Tests') {
      steps { sh 'npx playwright test' }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'playwright-html/**, test-results/**', allowEmptyArchive: true
      junit testResults: 'test-results/*.xml', allowEmptyResults: true
    }
  }
}