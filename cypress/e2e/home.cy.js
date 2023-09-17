import homePage from "../../Pages/HomePage"
import mp3Page from "../../Pages/Mp3PayerPage"
import cartCheckout from "../../Pages/CartCheckout";
import TestConstants from '../fixtures/test_data/test_constants.json';
import CartCheckout from "../../Pages/CartCheckout";

describe('ecommence test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const getRandom = Math.floor(Math.random() * 50000)
  it('should be able to view mp3 page ', () => {
    homePage.shopChategory()
    homePage.mp3PlayerPage()
    mp3Page.pageHeader().should('have.text', TestConstants.mp3Header)

  


    // cy.get('#button-confirm').click()
  })

  it("should be able to add a product to chart", () => {
    homePage.shopChategory()
    homePage.mp3PlayerPage()
    mp3Page.selectProduct()
    mp3Page.viewCart()
    mp3Page.cartItem().should('exist').and('contains.text', TestConstants.cartItem)
  })

  it("should be able to checkout item", () => {
    homePage.shopChategory()
    homePage.mp3PlayerPage()
    mp3Page.selectProduct()
    cartCheckout.viewCheckout()
    cartCheckout.selectCheckout()
    cartCheckout.firstNameInput(TestConstants.firstName)
    cartCheckout.lastNameInpput(TestConstants.lastName)
    cartCheckout.emailInput(`anthonyss@gmail${getRandom}.com`)
    cartCheckout.telephoneInput(TestConstants.telephone)
    cartCheckout.passwordInput(TestConstants.password)
    cartCheckout.confirmPasswordInput(TestConstants.confirmPassword)
    cartCheckout.companyInput(TestConstants.company)
    cartCheckout.address1Input(TestConstants.address1)
    cartCheckout.address2Input(TestConstants.address2)
    cartCheckout.cityInput(TestConstants.city)
    cartCheckout.postCode(TestConstants.postCode)
    cartCheckout.uncheckNewsLetter()
    cartCheckout.newLetter().should('not.be.checked')
    cartCheckout.checkAccount()
    cartCheckout.accountAgree().should('be.checked')
    cartCheckout.checkAgree()
    cartCheckout.Agree().should('be.checked')
    cartCheckout.buttonSave()
    cartCheckout.orderHeader().should('have.text', TestConstants.confirmOrder)
    cartCheckout.buttonConfirm()
    cartCheckout.successfulOrder().should('have.text', TestConstants.successfulOrder)
  })
})