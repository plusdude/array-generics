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
