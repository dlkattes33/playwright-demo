⭐ Playwright Automation Framework
A modular, scalable UI + API automation framework built with Playwright Test.
Designed to demonstrate real‑world automation architecture, CI/CD integration, and best practices for modern SDET workflows.

🚀 Features
Cross‑browser execution (Chromium, Firefox, WebKit)

Page Object Model (POM) structure

Reusable fixtures & selectors

API + UI integration tests

HTML reports + JUnit XML

Trace viewer, screenshots, and video capture

Jenkins pipeline support

Configurable test environments

📁 Project Structure
Code
playwright-demo/
│
├── e2e/                 # End‑to‑end test suites
├── fixtures/            # Reusable test fixtures (auth, context, API clients)
├── pages/               # Page Object Model classes
├── tests/               # UI + API integration tests
│
├── playwright-html/     # Playwright HTML report output
├── static/              # Report assets
│
├── playwright.config.ts # Global Playwright configuration
├── Jenkinsfile          # CI pipeline
├── package.json
└── README.md
🧪 Running Tests Locally
Install dependencies:

Code
npm ci
Install Playwright browsers:

Code
npx playwright install
Run the full test suite:

Code
npx playwright test
Run in UI mode:

Code
npx playwright test --ui
View the HTML report:

Code
npx playwright show-report
🔧 Jenkins Pipeline Overview
The included Jenkinsfile performs:

SCM checkout

Node.js setup (Node20)

Dependency installation (npm ci)

Playwright browser installation

Test execution

Archiving artifacts:

playwright-report/**

test-results/*.xml

This pipeline is optimized for parallel execution and CI‑friendly reporting.

🧱 Design Principles
Modularity: POM + fixtures keep tests clean and maintainable

Reusability: Shared utilities for selectors, API clients, and environment config

Traceability: Every failure includes trace, screenshot, and logs

CI‑Ready: Zero‑config Jenkins integration

Scalability: Supports parallel runs and multi‑browser execution

📌 Tech Stack
Playwright Test (TypeScript)

Node.js

Jenkins

HTML Reporter / JUnit XML

📄 Future Enhancements
Add API‑only test suite

Add environment‑based config switching

Add GitHub Actions workflow

Add test data factory utilities