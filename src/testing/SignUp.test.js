const { Builder, By, Key, until } = require('selenium-webdriver');

describe('SignUp Component', () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/sign-up'); 
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should sign up successfully with valid credentials', async () => {
    await driver.findElement(By.id('userName')).sendKeys('TestUser');
    await driver.findElement(By.id('mobileNumber')).sendKeys('1234567890');
    await driver.findElement(By.id('email')).sendKeys('test@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.css('button[type="submit"]')).click();

    
  });

  it('should show error message for invalid email', async () => {
    await driver.findElement(By.id('email')).sendKeys('invalidemail');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.css('button[type="submit"]')).click();

  
  });

  
});
