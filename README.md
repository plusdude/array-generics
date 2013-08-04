Implementation of the Array methods (ECMAScript 5th edition) with shorthand notation (introduced in JavaScript 1.6)

Examples
===

```javascript
Array.slice(document.childNodes).filter(function (element) {
	return element.nodeType === 1;
});
```

```javascript
Array.filter(document.childNodes, function (element) {
	return element.nodeType === 1;
});
```
