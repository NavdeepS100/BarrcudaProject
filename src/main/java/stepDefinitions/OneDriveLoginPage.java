package stepDefinitions;

import java.io.IOException;

import org.testng.Assert;

import com.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class OneDriveLoginPage extends DriverFactory {
	
	@Given("^user navigates to \"([^\"]*)\" website$")
	public void user_navigates_to_website(String url) throws Throwable {
		oneDriveLoginPage.getBarracudaLoginPage(url);
	}

	@When("^user enter\"([^\"]*)\" and \"([^\"]*)\" on OneDrive\\.$")
	public void user_enter_and_on_OneDrive(String email, String password) throws Throwable {
		oneDriveLoginPage.enterUserNameAndPassword(email, password);
	}

	@When("^user click on signinButton$")
	public void user_click_on_signinButton() throws Throwable {
		oneDriveLoginPage.clickOnSigninButton();
		Thread.sleep(6000);
	  
	}

	@Then("^user validate the Page\\.$")
	public void user_validate_the_Page() throws Throwable {
		oneDriveLoginPage.getPageTitle();
		oneDriveLoginPage.getPageTitleAndSaveInTextFile();
	   
	}

	@When("^user click on upload button and click on file\\.$")
	public void user_click_on_upload_button_and_click_on_file() throws Throwable {
	   oneDriveLoginPage.clickUploadButtonAndSelectFile();
	   Thread.sleep(3000);
	}

	@When("^user upload file from drive$")
	public void user_upload_file_from_drive() throws Throwable {
	   
	}

}
