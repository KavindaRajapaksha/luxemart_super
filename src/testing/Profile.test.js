const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Profile Page', function() {
  let driver;

  before(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build();
  });

  it('should update user profile', async function() {
    // Navigate to the Profile page
    await driver.get('http://localhost:3000/profile'); 

    // Find and interact with page elements
    await driver.findElement(By.id('userName')).sendKeys('NewUserName');
    await driver.findElement(By.id('email')).sendKeys('new@example.com');

    // Click the edit button
    await driver.findElement(By.xpath('//span[text()="Edit"]')).click();

    // Wait for profile update
    await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "Profile updated successfully")]')), 5000);

    // Assert profile update success message
    const successMessage = await driver.findElement(By.xpath('//*[contains(text(), "Profile updated successfully")]')).getText();
    assert.strictEqual(successMessage, 'Profile updated successfully');

    // Logout
    await driver.findElement(By.xpath('//p[text()="Sign out"]')).click();
    // Assert that the user is navigated to the sign-in page or any other appropriate page
    // For simplicity, this assertion may vary based on your application's behavior
    const signInPageUrl = await driver.getCurrentUrl();
    assert.strictEqual(signInPageUrl, 'http://localhost:3000/sign-in'); // Update with your expected URL
  });

  after(async function() {
    await driver.quit();
  });
});
