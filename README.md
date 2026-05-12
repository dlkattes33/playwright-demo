# Playwright Demo Automation Project

This project demonstrates UI automation using Playwright Test.  
It includes:

- UI tests (page load, selectors, assertions)
- API + UI integration tests
- Page Object Model (POM) structure
- Playwright Test Runner UI support
- Trace viewer and screenshot capture

## 🧪 Running Tests

Run all tests:
Playwright Demo — UI Automation Project
This project demonstrates modern UI automation using Playwright Test.
It includes cross‑browser testing, trace capture, screenshots, and CI/CD integration with Jenkins.

## 🚀 Features
- Playwright Test Runner
- Chromium, Firefox, WebKit support
- Page Object Model (POM) structure
- HTML reports + JUnit XML
- Trace viewer + screenshot capture
- Jenkins pipeline automation

## 📁 Project Structure
Code
playwright-demo/
│
├── tests/
│   ├── home.spec.ts
│   └── ...
│
├── playwright.config.ts
├── package.json
├── Jenkinsfile
└── test-results/

## 🧪 Running Tests Locally
Install dependencies:

Code
npm ci
Install browsers:

Code
npx playwright install
Run tests:

Code
npx playwright test
View HTML report:

Code
npx playwright show-report

## 🔧 Jenkins Pipeline
The Jenkinsfile performs:

SCM checkout

Install Node.js (Node20 tool)

Install dependencies (npm ci)

Install Playwright browsers

Run tests

Archive:

playwright-report/**

test-results/*.xml