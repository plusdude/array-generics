About
===
Implementation of the Array methods (ECMAScript 5th edition) with shorthand notation (introduced in JavaScript 1.6)

Example 1:
---
Generic .slice()

```javascript
Array.slice(document.childNodes).filter(function (element) {
	return element.nodeType === 1;
});
```

Example 2:
---
Generic .filter()
```javascript
Array.filter(document.childNodes, function (element) {
	return element.nodeType === 1;
});
```

And even more
---
All instance methods specified in ES5 available as shorthand generics.
