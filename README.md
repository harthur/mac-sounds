# mac-sounds

mac-sounds is a library for playing the default Mac OS X sounds from node:

```javascript
var sound = require("mac-sounds");

sound('submarine');
```

Takes a callback as a second argument:

```javascript
sound('pop', function(err) {
  if (err) throw err;
})
```

## install

```
npm install mac-sounds
```

## the sounds

basso,
blow,
bottle,
frog,
funk,
glass,
hero,
morse,
ping,
pop,
purr,
sosumi,
submarine,
tink

Only tested on OS X 10.6

