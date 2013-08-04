# About
Implementation of standard Array methods (introduced in ECMAScript 5th edition) and shorthand generics (JavaScript 1.8.5)

## Examples
```javascript
function isElement(element) {
	return element.nodeType === 1;
}
var children;

// example #1 
// using generic .filter()
children = Array.filter(document.childNodes, isElement);

// example #2
// using generic .slice() and array .filter()
children = Array.slice(document.childNodes).filter(isElement);
```

### Methods
All the following methods (except isArray) available in standard and generic shorthand notation:

<table>
    <tr>
        <th>Mutator</th>
        <th>Accessor</th>
        <th>Iteration</th>
        <th>Other</th>
    </tr>
    <tr>
        <td>*[pop](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.6)*</td>
        <td>.concat()</td>
        <td>.forEach()</td>
        <td>.isArray()</td>
    </tr>
     <tr>
        <td>.push()</td>
        <td>.join()</td>
        <td>.every()</td>
        <td></td>
    </tr>
    <tr>
        <td>.reverse()</td>
        <td>.slice()</td>
        <td>.some()</td>
        <td></td>
    </tr>
    <tr>
        <td>.shift()</td>
        <td>.indexOf()</td>
        <td>.filter()</td>
        <td></td>
    </tr>
    <tr>
        <td>.sort()</td>
        <td>.lastIndexOf()</td>
        <td>.map()</td>
        <td></td>
    </tr>
    <tr>
        <td>.splice()</td>
        <td></td>
        <td>.reduce()</td>
        <td></td>
    </tr>
    <tr>
        <td>.unshift()</td>
        <td></td>
        <td>.reduceRight()</td>
        <td></td>
    </tr>
</table>
