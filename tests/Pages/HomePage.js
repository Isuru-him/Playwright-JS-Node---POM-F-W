exports.homePage = class HomePage{

    constructor(page){

        this.page=page;
        this.searchTextBox= page.locator('#small-search-box-form input')
        this.searchBtn=page.locator('#small-search-box-form button')


    }


    async search(EnterText){

        await this.searchTextBox.fill(EnterText)
        await this.searchBtn.click();
    }




}