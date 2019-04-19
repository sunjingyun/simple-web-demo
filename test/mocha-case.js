const assert = require("assert");

describe("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
            assert.equal([1, 2, 3].indexOf(4), -1);
            assert.equal([1, 2, 3].indexOf(4), -1);
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        // it("should return -1 when the value is not present - 2", function() {
        //     assert.equal([1, 2, 3].indexOf(4), -1);
        //     assert.equal([1, 2, 3].indexOf(4), -1);
        //     assert.equal([1, 2, 3].indexOf(4), 0);
        //     assert.equal([1, 2, 3].indexOf(4), -1);
        // });

        // function sleep(duration) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             return resolve();
        //         }, duration);
        //     });
        // }

        // it("should return -1 when the value is not present - 3", async function() {
        //     await sleep(100000000);

        //     assert.equal([1, 2, 3].indexOf(4), -1);
        //     assert.equal([1, 2, 3].indexOf(4), -1);
        //     assert.equal([1, 2, 3].indexOf(4), 0);
        //     assert.equal([1, 2, 3].indexOf(4), -1);
        // });

        // it("should return -1 when the value is not present - 4"),
        //     function() {
        //         assert.equal(-1, [1, 2, 3].indexOf(5));
        // };
    });
});
