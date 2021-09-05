# sports-app

### Development

- Install nvm with | `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
- Run `nvm use && nvm install` to ensure you are using the same version of node and nmp as this app
- Generate a public and private key for JWS
  - `npm run key`
- Install dependencies
  - `npm i`
- Start a development server
  - `npm start`

### Production

- Install nvm with | `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
- Run `nvm use && nvm install` to ensure you are using the same version of node and nmp as this app
- Generate a public and private key for JWS
  - `npm run key`
- Install dependencies
  - `npm i`
- Start a pm2 server based on ecosystem.config.js
  - `npm run production`

### Testing

- Uses Jasmine module
- `npm run test`

## Notes for development

### Test Strip Information

- Card: 4000056655665556
- Bad Card: 4000000000000341
