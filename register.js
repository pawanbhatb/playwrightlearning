class RegisterPage{
    constructor(){
        this.firstName=page.locator("//input[@placeholder='First Name']")
        this.lastName=page.locator("//input[@placeholder='Last Name']")
        this.email=page.locator("//input[@type='email']")
        this.phone=page.locator("//input[@class='form-control ng-pristine ng-invalid ng-invalid-required ng-valid-pattern ng-touched']")
        this.gender=page.locator("//input[@ng-model='radiovalue' and @value='Male']")





    }
    
}



