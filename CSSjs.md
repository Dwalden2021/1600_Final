# Connecting Javascript and using a little internal CSS

Now that we have a basic page, we can add some Javascript and CSS to it.  We will be using the "script" tag to add the Javascript.  We will also be using the "style" tag to add the CSS.  The code will be added to the bottom of the body and it will look like this:
```html
<script src="script.js"></script>
```

We will add a little bit of internal CSS to make the page look a little nicer.  The code be between the "head" and "style" tags.  It will look like this:
```html
 <style>
        body {
            background-color: #f0f0f0;
            width: 50%;
            margin: auto;
        }
        h1 {
            color: #0000ff;
            padding: 10px;
        }
        p {
            color: #ff0000;
            padding: 10px;
        }
        label {
            color: #000000;
            padding: 5px;
        }
</style>
```

All that this does is change the background color of the page, the color of the text, and add a little bit of padding to the text.  It also center everything in the middle of the page so that it is not all crammed over to the left.

#### The final code will look like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <style>
        body {
            background-color: #f0f0f0;
            width: 50%;
            margin: auto;
        }
        h1 {
            color: #0000ff;
            padding: 10px;
        }
        p {
            color: #ff0000;
            padding: 10px;
        }
        label {
            color: #000000;
            padding: 5px;
        }
    </style>
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
        <script src="script.js"></script>
    </body>
</html>
```

[<<<Previous](HTML2.md) || [Home](README.md) || [Next>>>](JScode.md)