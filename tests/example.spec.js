// @ts-check
const { test, expect } = require('@playwright/test');
import { homePage } from './Pages/HomePage';



test('myFirstTest', async({page})=>{

  const hp = new homePage(page);

  await page.goto('https://demo.nopcommerce.com/');
  await hp.search('laptop');
  await page.pause()



})


