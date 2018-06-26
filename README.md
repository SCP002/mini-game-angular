## mini-game-angular

> A Angular project based on Angular CLI Webpack template.

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

Production build does not work with `file://` protocol.

Use HTTP server, for example:

``` bash
npm install -g http-server
cd dist
http-server -p 80
```
