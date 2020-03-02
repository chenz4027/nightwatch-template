module.exports = {
  "@tags": ["google"],
  "Google search"(browser) {
    const mainQuery = "Elon Mask";
    const mainQueryInputSelecter = 'input[name="as_q"]';
    const languageDropdownOpenerSelector = "#lr_button";
    const languageDropdownValueSelector = ".goog-menuitem[value='lang_it']";

    browser
      .url("https://www.google.ca/advanced_search")
      .setValue(mainQueryInputSelecter, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValueSelector)
      .saveScreenshot("tests_output/google.png");
  }
};
