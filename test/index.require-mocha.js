const path = require("path");
const Mocha = require("mocha");

(async () => {
    const mocha = new Mocha({
        timeout: 2000
    });

    mocha.addFile(path.join(__dirname, "mocha-case.js"));

    const failures = await Promise.resolve(
        new Promise(resolve => {
            mocha.run(failures => resolve(failures));
        })
    );

    return failures;
})()
    .then(failures => {
        process.exitCode = failures;
    })
    .catch(error => {
        console.log(error);
        process.exitCode = -1;
    })
    .finally(() => {
        process.exit();
    });
