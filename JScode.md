#JavaScript code

Here is where we will be creating a single javascript function to be used in our HTML page.  This little funciton will take the two inputs from the user, put them together and change the header of the page. Same as the CSS, I will not be going into detail on this code. Both of those could be a toutorial all their own. 

You will start out with creating a function:
```javascript
function myFunction() {
}
```
Then you will need to create two variables.  These variables will be used to store the values from the input boxes. We will use the document.getElementById("").value method to get the values of the input boxes.    The lines will look like this:
```javascript
    let inputBox1 = document.getElementById("input1").value;
    let inputBox2 = document.getElementById("input2").value;
```
we will create another variable to that will be the combination of the two input boxes.  We will use the + sign to combine the two variables.  The line will look like this:
```javascript
    let combo = '$(inputBox1) + $(inputBox2) = $(inputBox1 + inputBox2)';
```

we will need to set the boxes back to empty. The lines will look like this:
```javascript
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
```

Then we will use the document.getElementById("").innerHTML on the paragraph section to change the text displayed.  The line will look like this:
```javascript
    document.getElementById("result").innerHTML = combo;
```

Then we will 
```javascript
function myFunction() {
    let inputBox1 = document.getElementById("input1").value;
    let inputBox2 = document.getElementById("input2").value;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    let combo = '$(inputBox1) + $(inputBox2) = $(inputBox1 + inputBox2)';
    document.getElementById("result").innerHTML = combo;
}
```
Then we will need to add the function to the button. we will go back to the HTML page and add onclick="myFunction()" the following to the button.  It will look like this:
```html
<button id="button1" onclick="myFunction()">Click to run script</button>
```

This will have completed the JavaScript and HTML code.  Proceed to the next page to see screenshots of the completed code and display.

[<<<Previous](CSSjs.md) || [Home](README.md) || [Next>>>](Completed.md)