beforeEach(() => {
    jasmine.addMatchers({
        toContainText: () => {
            return {
                compare: (actual: any, expectedText: any) => {
                    let actualText = actual.textContent;
                    return {
                        pass: actualText.indexOf(expectedText) > -1,
                        get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
                    };
                }
            };
        }
    });
});
