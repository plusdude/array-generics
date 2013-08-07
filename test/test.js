(function (describe, it, expect) {
    /*jshint browser:true, maxlen:95*/
    "use strict";

    describe("Array.slice(elements[, begin[, end]])", function () {
        var arrayLike = { 0: "a", 1: "b", 2: "c", 3: "d", length: 4 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.slice(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.slice(arrayLike);
                expect(result.length && result instanceof Array).toBe(true);
            });
            it("DOM NodeList", function () {
                var result = Array.slice(document.childNodes);
                expect(result.length && result instanceof Array).toBe(true);
            });
        });

        describe("begin", function () {
            it("Integer", function () {
                var result = Array.slice(arrayLike, 2);
                expect(result).toEqual(["c", "d"]);
            });
            it("-Integer", function () {
                var result = Array.slice(arrayLike, -2);
                expect(result).toEqual(["c", "d"]);
            });
            it("Infinity", function () {
                var result = Array.slice(arrayLike, Infinity);
                expect(result).toEqual([]);
            });
            it("-Infinity", function () {
                var result = Array.slice(arrayLike, -Infinity);
                expect(result).toEqual(["a", "b", "c", "d"]);
            });
            it("NaN", function () {
                var result = Array.slice(arrayLike, NaN);
                expect(result).toEqual(["a", "b", "c", "d"]);
            });
        });

        describe("end", function () {
            it("Integer", function () {
                var result = Array.slice(arrayLike, 0, 2);
                expect(result).toEqual(["a", "b"]);
            });
            it("-Integer", function () {
                var result = Array.slice(arrayLike, 0, -2);
                expect(result).toEqual(["a", "b"]);
            });
            it("Infinity", function () {
                var result = Array.slice(arrayLike, 0, Infinity);
                expect(result).toEqual(["a", "b", "c", "d"]);
            });
            it("-Infinity", function () {
                var result = Array.slice(arrayLike, 0, -Infinity);
                expect(result).toEqual([]);
            });
            it("NaN", function () {
                var result = Array.slice(arrayLike, 0, NaN);
                expect(result).toEqual([]);
            });
        });
    });

    describe("Array.indexOf(elements, searchElement[, fromIndex])", function () {
        var arrayLike = { 0: "a", 1: "b", 2: "a", length: 3 };
        var searchElement = "a";

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.indexOf(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.indexOf(arrayLike, searchElement);
                expect(result).toBe(0);
            });
            it("DOM NodeList", function () {
                var result = Array.indexOf(document.childNodes, document.firstChild);
                expect(result).toBe(0);
            });
        });

        describe("fromIndex", function () {
            it("Integer", function () {
                var result = Array.indexOf(arrayLike, searchElement, 2);
                expect(result).toBe(2);
            });
            it("-Integer", function () {
                var result = Array.indexOf(arrayLike, searchElement, -2);
                expect(result).toBe(2);
            });
            it("Infinity", function () {
                var result = Array.indexOf(arrayLike, searchElement, Infinity);
                expect(result).toBe(-1);
            });
            it("-Infinity", function () {
                var result = Array.indexOf(arrayLike, searchElement, -Infinity);
                expect(result).toBe(0);
            });
            it("NaN", function () {
                var result = Array.indexOf(arrayLike, searchElement, NaN);
                expect(result).toBe(0);
            });
        });
    });

    describe("Array.lastIndexOf(elements, searchElement[, fromIndex])", function () {
        var arrayLike = { 0: "a", 1: "b", 2: "a", length: 3 };
        var searchElement = "a";

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.lastIndexOf(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement);
                expect(result).toBe(2);
            });
            it("DOM NodeList", function () {
                var result = Array.lastIndexOf(document.childNodes, document.firstChild);
                expect(result).toBe(0);
            });
        });

        describe("fromIndex", function () {
            it("Integer", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement, 2);
                expect(result).toBe(2);
            });
            it("-Integer", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement, -2);
                expect(result).toBe(0);
            });
            it("Infinity", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement, Infinity);
                expect(result).toBe(2);
            });
            it("-Infinity", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement, -Infinity);
                expect(result).toBe(-1);
            });
            it("NaN", function () {
                var result = Array.lastIndexOf(arrayLike, searchElement, NaN);
                expect(result).toBe(0);
            });
        });
    });

    describe("Array.forEach(elements, callback[, thisObject])", function () {
        var arrayLike = { 0: "a", 1: "b", length: 2 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.forEach(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var called = false;
                Array.forEach(arrayLike, function () {
                    called = true;
                });
                expect(called).toBe(true);
            });
            it("DOM NodeList", function () {
                var called = false;
                Array.forEach(document.childNodes, function () {
                    called = true;
                });
                expect(called).toBe(true);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.forEach(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array (does not execute)", function () {
                var called = false;
                Array.forEach(new Array(2), function () {
                    called = true;
                });
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.every(elements, callback[, thisObject])", function () {
        var arrayLike = { 0: "a", 1: "b", length: 2 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.every(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.every(arrayLike, function (item) {
                    return "string" === typeof item;
                });
                expect(result).toBe(true);
            });
            it("DOM NodeList", function () {
                var result = Array.every(document.childNodes, function (item) {
                    return "ltr" === item.dir;
                });
                expect(result).toBe(false);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.every(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array (does not execute)", function () {
                var called = false;
                Array.every(new Array(2), function () {
                    called = true;
                });
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.some(elements, callback[, thisObject])", function () {
        var arrayLike = { 0: "a", 1: "b", length: 2 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.some(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.some(arrayLike, function (item) {
                    return "number" === typeof item;
                });
                expect(result).toBe(false);
            });
            it("DOM NodeList", function () {
                var result = Array.some(document.childNodes, function (item) {
                    return "ltr" === item.dir;
                });
                expect(result).toBe(true);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.some(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array (does not execute)", function () {
                var called = false;
                Array.some(new Array(2), function () {
                    called = true;
                });
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.filter(elements, callback[, thisObject])", function () {
        var arrayLike = { 0: "a", 1: "b", 2: true, length: 3 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.filter(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.filter(arrayLike, function (item) {
                    return "string" === typeof item;
                });
                expect(result).toEqual(["a", "b"]);
            });
            it("DOM NodeList", function () {
                var result = Array.filter(document.childNodes, function (item) {
                    return item.dir === "ltr";
                });
                expect(result).toEqual([document.documentElement]);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.filter(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array (does not execute)", function () {
                var called = false;
                Array.filter(new Array(2), function () {
                    called = true;
                });
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.map(elements, callback[, thisObject])", function () {
        var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.map(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.map(arrayLike, function (item) {
                    return item.toUpperCase();
                });
                expect(result).toEqual(["A", "B", "C"]);
            });
            it("DOM NodeList", function () {
                var result = Array.map(document.childNodes, function (item) {
                    return item.dir ? item.dir : undefined;
                });
                expect(result).toEqual([undefined, "ltr"]);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.map(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array (does not execute)", function () {
                var called = false;
                Array.map(new Array(2), function () {
                    called = true;
                });
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.reduce(elements, callback[, initialValue])", function () {
        var arrayLike = { 0: ["a"], 1: ["b"], 2: ["c"], length: 3 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.reduce(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.reduce(arrayLike, function (prev, next) {
                    return prev.concat(next);
                });
                expect(result).toEqual(["a", "b", "c"]);
            });
            it("DOM NodeList", function () {
                var result = Array.reduce(document.childNodes, function (prev, next) {
                    prev.push(next.dir ? next.dir : undefined);
                    return prev;
                }, []);
                expect(result).toEqual([undefined, "ltr"]);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.reduce(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array with no initial value (throws)", function () {
                function noValue(args) {
                    return Array.reduce(new Array(2), function () {});
                }
                expect(noValue).toThrow();
            });
            it("Empty array with initial value (does not execute)", function () {
                var called = false;
                Array.reduce(new Array(2), function () {
                    called = true;
                }, {});
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.reduceRight(elements, callback[, initialValue])", function () {
        var arrayLike = { 0: ["a"], 1: ["b"], 2: ["c"], length: 3 };

        describe("elements", function () {
            it("Undefined/Null (throws)", function () {
                function noElements() { return Array.reduceRight(); }
                expect(noElements).toThrow();
            });
            it("Array-like", function () {
                var result = Array.reduceRight(arrayLike, function (prev, next) {
                    return prev.concat(next);
                });
                expect(result).toEqual(["c", "b", "a"]);
            });
            it("DOM NodeList", function () {
                var result = Array.reduceRight(document.childNodes, function (prev, next) {
                    prev.push(next.dir ? next.dir : undefined);
                    return prev;
                }, []);
                expect(result).toEqual(["ltr", undefined]);
            });
        });

        describe("callback", function () {
            it("Not a function (throws)", function () {
                function noCallback() {
                    return Array.reduceRight(arrayLike, /function/);
                }
                expect(noCallback).toThrow();
            });
            it("Empty array with no initial value (throws)", function () {
                function noValue(args) {
                    return Array.reduceRight(new Array(2), function () {});
                }
                expect(noValue).toThrow();
            });
            it("Empty array with initial value (does not execute)", function () {
                var called = false;
                Array.reduceRight(new Array(2), function () {
                    called = true;
                }, {});
                expect(called).toBe(false);
            });
        });
    });

    describe("Array.isArray(elements)", function () {
        var arrayLike = { 0: "a", 1: "b", 2: "c", 3: "d", length: 4 };

        describe("elements", function () {
            it("Undefined/Null (false)", function () {
                var result = Array.isArray(null);
                expect(result).toBe(false);
            });

            it("ArrayLike (false)", function () {
                var result = Array.isArray(arrayLike);
                expect(result).toBe(false);
            });

            it("NodeList (false)", function () {
                var result = Array.isArray(document.childNodes);
                expect(result).toBe(false);
            });

            it("Array (true)", function () {
                var result = Array.isArray(new Array(2));
                expect(result).toBe(true);
            });
        });
    });

}(this.describe, this.it, this.expect));
