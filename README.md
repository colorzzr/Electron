# Electron
Electron Learning Folder

# Note

`exports` and `function` are the same thing but cannot use exports function as normal js function.

export.function is the Nodejs style with the application of `document` and `addEventListener`.

while the `function` is Javascript and Html supported in the Html atrribute `onclick`.

NOTE that

the `console.log` would only show up in the index.js(entry for electron) not show up in html script file.

And also, cos the electron and the html/js are running seperately so you cannot directly use `exports` to

output the function or variable. instead, using remote as the export API:

```

const remote = require('electron').remote;
const main = remote.require(`./index.js`);

```

### One more thing!

Dont include both electron entry and html/js in the html file