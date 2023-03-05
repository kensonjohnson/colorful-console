# Gathered Explainations

## [Console Methods](https://developer.mozilla.org/en-US/docs/Web/API/console "MDN Documentation")

| Name                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert "MDN Documentation")                 | Log a message and stack trace to console if the first argument is `false`.                                                                                                                                                                                                                                                                                       |
| [console.clear()](https://developer.mozilla.org/en-US/docs/Web/API/console/clear "MDN Documentation")                   | Clear the console.                                                                                                                                                                                                                                                                                                                                               |
| [console.count()](https://developer.mozilla.org/en-US/docs/Web/API/console/count "MDN Documentation")                   | Log the number of times this line has been called with the given label.                                                                                                                                                                                                                                                                                          |
| [console.countReset()](https://developer.mozilla.org/en-US/docs/Web/API/console/countReset "MDN Documentation")         | Resets the value of the counter with the given label.                                                                                                                                                                                                                                                                                                            |
| [console.debug()](https://developer.mozilla.org/en-US/docs/Web/API/console/debug "MDN Documentation")                   | Outputs a message to the console with the log level `debug`.                                                                                                                                                                                                                                                                                                     |
| [console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/console/dir "MDN Documentation")                       | Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.                                                                                                                                                                                     |
| [console.dirxml()](https://developer.mozilla.org/en-US/docs/Web/API/console/dirxml "MDN Documentation")                 | Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.                                                                                                                                                                                                                             |
| [console.error()](https://developer.mozilla.org/en-US/docs/Web/API/console/error "MDN Documentation")                   | Outputs an error message. You may use [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions "MDN Documentation") and additional arguments with this method.                                                                                                                                                  |
| [console.group()](https://developer.mozilla.org/en-US/docs/Web/API/console/group "MDN Documentation")                   | Creates a new inline [group](https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console "MDN Documentation"), indenting all following output by another level. To move back out a level, call `groupEnd()`.                                                                                                                            |
| [console.groupCollapsed()](https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed "MDN Documentation") | Creates a new inline [group](https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console "MDN Documentation"), indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `groupEnd()`. |
| [console.groupEnd()](https://developer.mozilla.org/en-US/docs/Web/API/console/groupEnd "MDN Documentation")             | Exits the current inline [group](https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console "MDN Documentation").                                                                                                                                                                                                                      |
| [console.info()](https://developer.mozilla.org/en-US/docs/Web/API/console/info "MDN Documentation")                     | Informative logging of information. You may use [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions "MDN Documentation") and additional arguments with this method.                                                                                                                                        |
| [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log "MDN Documentation")                       | For general output of logging information. You may use [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions "MDN Documentation") and additional arguments with this method.                                                                                                                                 |
| [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/console/table "MDN Documentation")                   | Displays tabular data as a table.                                                                                                                                                                                                                                                                                                                                |
| [console.time()](https://developer.mozilla.org/en-US/docs/Web/API/console/time "MDN Documentation")                     | Starts a [timer](https://developer.mozilla.org/en-US/docs/Web/API/console#timers "MDN Documentation") with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.                                                                                                                                                     |
| [console.timeEnd()](https://developer.mozilla.org/en-US/docs/Web/API/console/timeEnd "MDN Documentation")               | Stops the specified [timer](https://developer.mozilla.org/en-US/docs/Web/API/console#timers "MDN Documentation") and logs the elapsed time in milliseconds since it started.                                                                                                                                                                                     |
| [console.timeLog()](https://developer.mozilla.org/en-US/docs/Web/API/console/timeLog "MDN Documentation")               | Logs the value of the specified [timer](https://developer.mozilla.org/en-US/docs/Web/API/console#timers "MDN Documentation") to the console.                                                                                                                                                                                                                     |
| [console.timeStamp()](https://developer.mozilla.org/en-US/docs/Web/API/console/timeStamp "MDN Documentation")           | Adds a marker to the browser performance tool's timeline (Chrome or Firefox).                                                                                                                                                                                                                                                                                    |
| [console.trace()](https://developer.mozilla.org/en-US/docs/Web/API/console/trace "MDN Documentation")                   | Outputs a [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#stack_traces "MDN Documentation").                                                                                                                                                                                                                                              |
| [console.warn()](https://developer.mozilla.org/en-US/docs/Web/API/console/warn "MDN Documentation")                     | Outputs a warning message. You may use [string substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions "MDN Documentation") and additional arguments with this method.                                                                                                                                                 |

&nbsp;
&nbsp; |

## [String Substitution](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions "MDN Documentation")

| Type    | Symbol   | Explaination                                                                                                                                                             |
| :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| String  | %s       | Outputs a string.                                                                                                                                                        |
| Integer | %i or %d | Outputs an integer. Number formatting is supported, for example console.log("Foo %.2d", 1.1) will output the number as two significant figures with a leading 0: Foo 01. |
| Object  | %o or %O | Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.                                                                  |
| Float   | %f       | Outputs a floating-point value. Formatting is supported, for example console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10.                  |

**Precision formatting doesn't work in Chrome.**

&nbsp;
&nbsp;

## [Styles and Decorations](<https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters> "Link to Wikipedia")

### Styles

| Type       | Add      | Remove   |
| :--------- | :------- | :------- |
| Reset      | \x1b[0m  | N/A      |
| Bright     | \x1b[1m  | \x1b[22m |
| Dim        | \x1b[2m  | \x1b[22m |
| Italic     | \x1b[3m  | \x1b[23m |
| Underscore | \x1b[4m  | \x1b[24m |
| Double     | \x1b[21m | \x1b[24m |
| Reverse    | \x1b[7m  | \x1b[27m |
| Hidden     | \x1b[8m  | \x1b[28m |
| Strike     | \x1b[9m  | \x1b[29m |

&nbsp;
&nbsp;

## [Colors](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors "Link to Wikipedia")

### [Built-in (ANSI) Colors](https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit "Link to Wikipedia")

| Colors  | Foreground | Background | BrightFG | BrightBG  |
| :------ | :--------- | :--------- | :------- | :-------- |
| Black   | \x1b[30m   | \x1b[40m   | \x1b[90m | \x1b[100m |
| Red     | \x1b[31m   | \x1b[41m   | \x1b[91m | \x1b[101m |
| Green   | \x1b[32m   | \x1b[42m   | \x1b[92m | \x1b[102m |
| Yellow  | \x1b[33m   | \x1b[43m   | \x1b[93m | \x1b[103m |
| Blue    | \x1b[34m   | \x1b[44m   | \x1b[94m | \x1b[104m |
| Magenta | \x1b[35m   | \x1b[45m   | \x1b[95m | \x1b[105m |
| Cyan    | \x1b[36m   | \x1b[46m   | \x1b[96m | \x1b[106m |
| White   | \x1b[37m   | \x1b[47m   | \x1b[97m | \x1b[107m |
| Default | \x1b[39m   | \x1b[49m   | \x1b[39m | \x1b[49m  |

&nbsp;
&nbsp;

### [8-Bit Colors](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit "Link to Wikipedia")

Use the escape sequence `\x1b[38;5;<n>m` for foreground and `\x1b[48;5;<n>m` for background.

Replace `<n>` with the [8-bit color code](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit "Link to Wikipedia") you want.

```node
console.log("\x1b[38;5;20m%s\x1b[0m", "8-bit Text"); // Blue foreground (text)
console.log("\x1b[48;5;214m%s\x1b[0m", "8-bit Background"); // Orange background
```

&nbsp;
&nbsp;

### [RGB (24-Bit) Colors](https://en.wikipedia.org/wiki/ANSI_escape_code#24-bit "Link to Wikipedia")

Use the escape sequence `\x1b[38;2;<r>;<g>;<b>m` for foreground and `\x1b[48;2;<r>;<g>;<b>m` for background.

Replace `<r>`,`<g>`, and `<b>` with the [24-bit color](https://www.rapidtables.com/web/color/RGB_Color.html) you like.

```node
console.log("\x1b[38;2;255;51;51m%s\x1b[0m", "24-bit Text"); // Red foreground (text)
console.log("\x1b[48;2;255;255;0m%s\x1b[0m", "24-bit Background"); // Yellow background
```

&nbsp;
&nbsp;

## Controlling Console Output

There are a few [escape strings](https://en.wikipedia.org/wiki/Escape_character#JavaScript "Link to Wikipedia Page") that we can use to control the output of our console.
The most notable of which is the carriage return `\r` and new line `\n`.
These imitate an old school typewriter:

- Carriage return `\r` moves the cursor back to the start of the line.
- New line `\n`, or "line feed", moves the cursor to the next line down.

What's important to note is that returning to the start of a line with `\r` allows you to **_overwrite_** what was already there.
We can use this to create a loading spinner:

```node
function loadingAnimation() {
  const characters = ["|", "/", "--", "\\"];
  let i = 0;

  return setInterval(() => {
    i = i === characters.length ? 0 : i;
    process.stdout.write("\rLoading " + characters[i]);
    i++;
  }, 250);
}

function stopAnimation(intervalID) {
  clearInterval(intervalID);
  clearLine(process.stdout, 0); // Deletes the current line of text
  process.stdout.write("\rDone\n");
}
```

Calling this function creates an interval that updates the console every 250ms, and returns it's id.
Just call it and the animation runs until you clear the timeout:

```node
const twirl = loadingAnimation();

// some blocking code that takes awhile

stopAnimation(twirl);
```

It's important to call the `stopAnimation()`, which calls `clearInterval()` under the hood.
Otherwise, the animation wouldn't stop, regardless of other console logs come in afterwards.

Other escape characters include:
|||
|:---|:---|
|\f| matches form-feed. |
|\r| matches carriage return.|
|\n| matches linefeed.|
|\t| matches horizontal tab.|
|\v| matches vertical tab.|
|\0| matches NUL character.|
|[\b]| matches backspace.|
|\s| matches whitespace (short for [\f\n\r\t\v\u00A0\u2028\u2029]).|
|\S| matches anything but a whitespace (short for [^\f\n\r\t\v\u00a0\u2028\u2029]).|
|\w| matches any alphanumerical character (word characters) including underscore (short for [a-zA-Z0-9_]).|
|\W| matches any non-word characters (short for [^a-za-z0-9_]).|
|\d| matches any digit (short for [0-9]).|
|\D| matches any non-digit (short for [^0-9]).|
|\b| matches a word boundary (the position between a word and a space).|
|\B| matches a non-word boundary (short for [^\b]).|
|\cX| matches a control character. E.g: \cm matches control-M.|
|\xhh| matches the character with two characters of hexadecimal code hh.|
|\uhhhh| matches the Unicode character with four characters of hexadecimal code hhhh.|
|\u001b7| Saves the current cursor position.|
|u001b8| Restores the cursor position to the saved position.|

&nbsp;
&nbsp;

## Moving the Cursor Around

<https://tldp.org/HOWTO/Bash-Prompt-HOWTO/x361.html>

<https://github.com/ivanseidel/node-draftlog>
