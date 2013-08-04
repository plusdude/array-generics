# About
Implementation of standard Array methods (introduced in ECMAScript 5th edition) and shorthand generics (JavaScript 1.8.5) Works in all browsers that supports JavaScript 1.2

## Examples
```javascript
function isElement(element) {
	return element.nodeType === 1;
}

// example #1
console.log(
	// generic .filter()
	Array.filter(document.childNodes, isElement)
);

// example #2
console.log(
	// generic .slice() and standard .filter()
	Array.slice(document.childNodes).filter(isElement)
);
```

## Methods

<table>
    <tr>
        <th>Mutator</th>
        <th>Accessor</th>
        <th>Iteration</th>
        <th>Other</th>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">pop</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">concat</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray">isArray</a></td>
    </tr>
     <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">join</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every">every</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">reverse</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">slice</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some">some</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">shift</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf">lastIndexOf</a></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">splice</a></td>
        <td></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">reduce</a></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift">unshift</a></td>
        <td></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight">reduceRight</a></td>
        <td></td>
    </tr>
</table>
