<h3>How to embed JavaScript code into an HTML page:</h3>

- Use `<script>` element to include a JavaScript file in a HTML page.
- There are two attributes of `<script>`: async and defer.
    * The async attribute of the `<script>` element instructs the web browser to fetch the JavaScript file in parallel and then parse and execute as soon as the JavaScript file is available.
    * The defer attribute of the `<script>` element allows the web browser to execute the JavaScript file after the document has been parsed.
- In JavaScript file, we have used the `alert('Hello, World!')` function. Upon launching `helloworld.html` file in the web browser, an alert will display the `Hello, World!` message.