# UI Test Framework POC for [DexCom](https://dexcom.com/)

Used: Selenium WebDriver 4, Jest, Node.js LTS, Javascript,
Visual Studio 2022, Visual Studio Code.
## Usage

Install NPM packages

```sh
npm install
npm install -g jest
```

Start the UI tests using:

```sh
jest
```

## Folder structure


* `__tests__` - tests folder. The test name: Login_smoke.spec.js
* `config` - Configuration JSON for tests. Locators JSON.
* `pages` - Page Object models.
* `utils` - Selenium Helpers.
* `2nd Test\API Testing` - Answers on the 2nd test. 