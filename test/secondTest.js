const {Builder, By, Key} = require(`selenium-webdriver`);
const assert = require(`assert`);
const should = require(`chai`).should();

describe("add anouther todo test", () =>
    it("success anouther add todo in app", async () => {
    
        let driver = await new Builder()
            .forBrowser("chrome")
            .build();
        await driver
            .get("https://lambdatest.github.io/sample-todo-app/");
        await driver
            .findElement(By.id("sampletodotext"))
            .sendKeys("adasdasdas", Key.RETURN);
        let todoText = await driver
            .findElement(By.xpath("//li[last()]"))
            .getText()
            .then(value => value);
        //assert with node assertion
        assert.strictEqual(todoText, "adasdasdas");
        //assert using chai
        todoText.should.equal("adasdasdas1")

        await driver.quit();
    })
);
