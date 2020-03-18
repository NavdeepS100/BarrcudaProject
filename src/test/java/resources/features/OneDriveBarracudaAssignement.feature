Feature: Search Job in Proquest Application


Scenario Outline: Search Job on Proquest Webpage.
	Given user navigates to "<url>" website
	When user enter"<email>" and "<password>" on OneDrive.
	And user click on signinButton
	Then user validate the Page.
	When user click on upload button and click on file.
	And user upload file from drive
	
	Examples:
	|                     url						| 		email	             |    password    	     	|
	| https://onedrive.live.com/about/en-us/signin/ | 	Navdeepsingh100@gmail.com|	 Test!00	    |
	
	
