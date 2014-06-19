# ChromeTerm

Run your terminal in the browser with a Chrome extension.

How it works: the user runs the `chrometerm` script (requires Node.js >= v1.19) in their terminal. When the user opens the Chrome extension, a WebSocket connection is created between the Chrome extension (client), and the Node.js local server that was run by chrometerm. Commands typed into the extension are executed by the server, output from those commands is sent back to the client.

*Instructions*

1. `npm install` inside the directory
2. `./chrometerm`
3. Install extension in Chrome

*Limitations:*

1. Cannot emulate terminal prompt.
2. Using `cd` is highly problematic (especially `cd -`, `pushd`, and `popd`)
3. Paging cannot be emulated (e.g. `git log`, man pages).
4. Colors cannot be emulated.

*Todo:*

1. Allow user to use keyboard shortcuts to terminate processes (ctrl-c / ctrl-d) and clear the terminal (ctrl-l).