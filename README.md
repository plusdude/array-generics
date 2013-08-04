# About

Implementation of standard Array methods (introduced in ECMAScript 5th edition) and shorthand generics (JavaScript 1.8.5)

## Examples

```javascript
function isElement(element) {
	return element.nodeType === 1;
}
var children;

// example #1 
// using shorthang .filter()
children = Array.filter(document.childNodes, isElement);

// example #2
// using shorthand .slice() and standard .filter()
children = Array.slice(document.childNodes).filter(isElement);
```
## Methods

The following methods available in standard and shorthand notation

### Mutator

* pop
* push
* reverse
* shift
* sort
* splice
* unshift

### Accessor

* concat
* join
* slice
* indexOf
* lastIndexOf
* 

### Iteration

* forEach
* every
* some
* filter
* map
* reduce
* reduceRight
