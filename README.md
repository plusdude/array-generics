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
<table>
    <tr>
        <th>Mutator methods</th>
        <th>Accessor methods</th>
        <th>Iteration methods</th>
    </tr>
    <tr>
        <td>pop</td>
        <td>concat</td>
        <td>forEach</td>
    </tr>
     <tr>
        <td>push</td>
        <td>join</td>
        <td>every</td>
    </tr>
    <tr>
        <td>reverse</td>
        <td>slice</td>
        <td>some</td>
    </tr>
    <tr>
        <td>shift</td>
        <td>indexOf</td>
        <td>filter</td>
    </tr>
    <tr>
        <td>sort</td>
        <td>lastIndexOf</td>
        <td>map</td>
    </tr>
    <tr>
        <td>splice</td>
        <td></td>
        <td>reduce</td>
    </tr>
    <tr>
        <td>unshift</td>
        <td></td>
        <td>reduceRight</td>
    </tr>
</table>
