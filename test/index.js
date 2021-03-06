const assert = require("assert");

describe("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            this.skip();
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it("should return -1 when the value is not present - 2", function() {
            assert.equal([1, 2, 3].indexOf(4), 0);
        });
    });
});
