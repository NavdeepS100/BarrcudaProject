package pageObjects;

import static org.testng.Assert.assertEquals;

import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import cucumber.api.DataTable;

public class Login_OneDrive extends BasePage{
	public @FindBy(className = "form-control") WebElement editTextFeild;
	public @FindBy(xpath = "//input[@type='submit']") WebElement nextButton;
	public @FindBy(xpath = "//input[@type='password']")WebElement passwordEditField;
	public @FindBy(id = "idSIButton9") WebElement singhInButton;
	public @FindBy(xpath = "//span[text()='Upload']") WebElement uploadButton;
	public @FindBy(xpath = "//button[@name='Files']") WebElement ClickonFileButton;
	
	
	public Login_OneDrive() throws IOException {
		super();
	}
	
	public Login_OneDrive getBarracudaLoginPage(String url) throws IOException {
		getDriver().get(url);
		return new Login_OneDrive();
	}
	
	public Login_OneDrive enterUserNameAndPassword(String email, String password) throws Exception {
		driver.switchTo().frame(driver.findElement(By.className("SignIn")));
		sendKeysToWebElement(editTextFeild, email);
		waitAndClickElement(nextButton);
		driver.switchTo().defaultContent();
		sendKeysToWebElement(passwordEditField, password);
		return new Login_OneDrive();
	}
	

	public Login_OneDrive clickOnSigninButton() throws Exception {
	    waitAndClickElement(singhInButton);
		return new Login_OneDrive();
	}
	
	public Login_OneDrive getPageTitle() throws IOException {
	String actualTitle = driver.getTitle();
	System.out.println("Title of the Search Page is:---" + actualTitle);
	String expectedTitle = "My files - OneDrive";
	Assert.assertEquals(expectedTitle,actualTitle);
	return new Login_OneDrive();
	
	}
	
	public Login_OneDrive getPageTitleAndSaveInTextFile() throws IOException {
		String fileName = "title.txt";
		try {
			PrintWriter outputStream = new PrintWriter(fileName);
			outputStream.println(driver.getTitle());
			outputStream.close();
			System.out.println("Done");
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return null;
		
	}
	
	public Login_OneDrive clickUploadButtonAndSelectFile() throws InterruptedException, IOException {
		waitAndClickElement(uploadButton);
		//waitAndClickElement(ClickonFileButton);
		driver.findElement(By.xpath("//button[@name='Files']")).sendKeys("C:\\Users\\navde\\Testing.txt");
		return new Login_OneDrive();
		
	}


}
