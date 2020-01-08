package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
    private WebDriver webDriver;

    @FindBy(xpath = "//*[@id=\"userSelect\"]/option[3]")
    WebElement option;

    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement loginButton;

    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement logoutButton;

    @FindBy(xpath = "/html/body/div[3]/div/div[2]/div/div[1]/strong/span")
    WebElement nameSpan;

    public LoginPage(WebDriver webDriver){
        this.webDriver=webDriver;
    }

    public void clickOption(){
        this.option.click();
    }

    public void clickSubmit(){
        this.loginButton.click();
    }

    public String getTextLogoutButton(){
        return logoutButton.getText();
    }

    public String getNameSpan(){
        return this.nameSpan.getText();
    }

    public void loginSucces(){
        this.option.click();
        this.loginButton.click();
    }
}
