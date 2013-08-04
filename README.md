About
===
Implementation of the Array methods specified in ECMAScript 5th edition and shorthand generics introduced in JavaScript 1.6

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
