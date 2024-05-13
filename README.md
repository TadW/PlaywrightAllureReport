

## Playwright run tests

* First time run Playwright test from the file for a creating new account

```
 npx playwright test  ./tests/register.spec.ts
 ```

* Skip the test register.spec.ts from tests folder tests

<img src=screenshots/registerTestSkip.png>

* Run Playwright tests from folder tests ithout UI mode

```
 npx playwright test 
```
* Run Playwright test using chromium with UI mode
```
npx playwright test --project=chromium --headed
```
  
## Allure Report with Playwright [Videos & Traces]
* Install Allure Report
```
npm install --save-dev allure-commandline
```
```
npm install --save-dev allure-playwright
```
* Add config allure to playwright.config.ts file 
```
reporter: [['html'], ['allure-playwright']],
```

* Run command for create Allure report 
```
 npx allure serve allure-results
```

<img src=screenshots/allure_report.png>
<img src=screenshots/allure_reportOverview.png>
<img src=screenshots/allure_reportTraceVideo.png>


## Playwright Test Report
* Run command for create Playwright report
```
 npx playwright show-report 
 ```

<img src=screenshots/playwright_report.png>
<img src=screenshots/playwright_reportTestFail.png>
<img src=screenshots/playwright_reportTraceVideo.png>
<img src=screenshots/playwright_reportLoginPage.png>
<img src=screenshots/playwright_reportLoginPagePassword.png>
<img src=screenshots/playwright_reportLoginPageUsername.png>



<img src=screenshots/login.png>

