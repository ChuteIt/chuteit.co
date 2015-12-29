When a container is affected, an event is triggered.  Events are passed to hooks, if registered.

This allows you to automate a website, for example. Since the assets live in an S3 bucket, you could do the following:

Assuming you created some Mustache templates in Chute It, let's say the container name is `juanorozco/templates` and has a piece of text content with the name `photoblog.mustache`.

- Create a new asset in the `juanorozco/photoblog` container.
 - Add an image to the asset, name it `dog.jpg`.
 - Add text and name it `dog.md`.
- Change event is triggered. Chute It locates a registered hook that matches the criteria (`tag:photoblog`, `contentType:image`, `eventType:any`)
- Hook is called with event details
- Registered hook script is a static site generator script...
 - Gets templates at `juanorozco/templates/photoblog.mustache`
 - Gets content stored at `juanorozco/photoblog`
 - Process images, resizes them, etc.
 - Gets text asset content and compiles markdown content
 - Builds site from processed data
 - Deploys site to production server
 - Hook returns success
- Chute It logs the hook call and finishes the transaction.
