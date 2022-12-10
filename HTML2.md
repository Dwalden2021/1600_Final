# Adding Buttons and Input boxes

First, we will add a input box to the body of page. We will be using the "input" tag. We will give each input an id. The code will look like this:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Welcome to my Page</h1>
        <label>Input 1</label>
        <input id="input1" placeholder="type a few word">
        <label>Input 2</label>
        <input id="input2" placeholder="type a another word">
        <p>Please use the button below:</p>
    </body>
```

###Button
Next, we will add a button to the body section of the page as well as a label "Click Me".  The button will be a submit button.  The code will look like this:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Welcome to my Page</h1>
        <label>Input 1</label>
        <input id="input1" placeholder="type a few word">
        <label>Input 2</label>
        <input id="input2" placeholder="type a another word">
        <p>Please use the button below:</p>
        <label>Click Me</label>
        <button id="button1">Click to run script</button>
    </body>
```

Last, we will add an empty paragraph tag named "result" to bottom of the body.  We will use this to display the results of the script.  The code will look like this:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Welcome to my Page</h1>
        <label>Input 1</label>
        <input id="input1" placeholder="type a few word">
        <label>Input 2</label>
        <input id="input2" placeholder="type a another word">
        <p>Please use the button below:</p>
        <label>Click Me</label>
        <button id="button1">Click to run script</button>
        <p id="result"></p>
    </body>
</html>
```
[<<<Previous](HTML1.md) || [Home](README.md) || [Next>>>](CSSjs.md)