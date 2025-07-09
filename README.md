# SmartCube QA Automation Assessment

This project is a QA automation framework built with [Playwright & JS](https://playwright.dev/) and Node.js for testing the SmartCube web application Assessment.

## 📦 Tech Stack

- Playwright (`@playwright/test`)
- Node.js (v18+ required)
- Moment.js (for timestamp handling)
- GitHub Actions (for CI/CD)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
1. git clone https://github.com/linktoahmed/smartCube.git
    cd smartcube
2. Install dependencies
    npm install

🧪 Running Tests
Run all tests
    npx playwright test
Run a specific test file
    npx playwright test tests/my-test.spec.js

🔄 CI/CD with GitHub Actions
This project includes a GitHub Actions workflow to run tests:

On push or PR to main/master

On schedule (daily at 3 PM Riyadh time) Just FYI project-juice-shop link gets down randomly so test cases might fail

Manually via the GitHub UI

See .github/workflows/playwright.yml for details.

✅ Requirements
Node.js v18+

npm (comes with Node.js)

Git (for cloning the repo)

🙋‍♂️ Support
If you face issues setting it up, feel free to contact me.