const { Builder, By, Key, until } = require('selenium-webdriver');

describe('SignIn Component', () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/sign-in');
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should sign in successfully with valid credentials', async () => {
    await driver.findElement(By.id('email')).sendKeys('mali@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('mali@123');
    await driver.findElement(By.tagName('form')).submit();

    // Wait for the page to redirect after successful sign-in
    await driver.wait(until.urlIs('http://localhost:3000/'), 5000);

    // Check if sign-in was successful by verifying the current URL
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toEqual('http://localhost:3000/');
  });

  it('should show error message for invalid email', async () => {
    await driver.findElement(By.id('email')).sendKeys('yali@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('123');
    await driver.findElement(By.tagName('form')).submit();

    // Wait for the error message to appear
    await driver.wait(until.elementLocated(By.className('root')), 5000);

    // Check if error message is displayed
    const errorMessage = await driver.findElement(By.className('root')).getText();
    expect(errorMessage).toContain('Something went wrong in the sign in process.');
  });
});
