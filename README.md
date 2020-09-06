# marvel-app


- A simple app developed with [React](https://pt-br.reactjs.org/) / [Redux](https://redux.js.org/) and using [Marvel](https://developer.marvel.com/) API.

## Steps


### Step 1
- After you clonning or download this repository you have to enter on folder using Terminal or Command Prompt 
and run the following command.

```
    npm install
```

Obs: This command will install all dependencies.


### Step 2
- Now at root of `src` folder you have to create a folder with name `config` and a file with name `config.js` like below.
- You must get your own `Auth Keys` on [Developer Portal of Marvel](https://developer.marvel.com/)

```javascript
    const envConfig = {
        baseUrl: 'http://gateway.marvel.com',
        privateKey: '{{Your Private Key HERE!}}',
        publickKey: '{{Your Public Key HERE}}',
    }

    export default envConfig
```

### About

This project was developed with purpose to learn Redux.
When you `run` the project, you will see a single page with some `Marvel Character Cards` and you can click at it to see more info about `Character`