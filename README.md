About
===
Implementation of standard Array methods (introduced in ECMAScript 5th edition) and shorthand generics (JavaScript 1.8.5)

Examples
---

```javascript
// #1
Array.filter(document.childNodes, function (element) {
	return element.nodeType === 1;
});
// #2
Array.slice(document.childNodes).filter(function (element) {
	return element.nodeType === 1;
});
```
