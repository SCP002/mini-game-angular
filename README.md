## mini-game-angular

> Small puzzle game based on Angular CLI webpack template. https://scp002.github.io/mini-game-angular/dist/

## Game rules

To win, mark all cells green.

Click on the cell will revert colors of all neighbors except for diagonals.

## Build setup

``` bash
# Install dependencies
npm install

# Serve with hot reload at localhost:4200
ng serve --aot

# Build for production with minification
ng build --prod
```

## Notes

To get production build work with Github Pages, use following command:

``` bash
ng build --prod --base-href "https://<user-name>.github.io/<repo-name>/<dist-folder>/"

# In current case:
ng build --prod --base-href "https://scp002.github.io/mini-game-angular/dist/"
```

Also, production build does not work with `file://` protocol.

Use HTTP server, for example:

``` bash
npm install -g http-server
cd dist
http-server -p 80
```
