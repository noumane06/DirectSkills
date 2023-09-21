# DirectSkills coding challenge BACK

## Technologies

this app was developed using :

- NodeJS 14 : back-end JavaScript runtime environment .
- ExpressJS : for building the REST API .

## Project hierarchy

The whole project was developped using typescript .

### src

This is where all the code is located , index.ts is the entry point of the app .

### app/controllers

This is where all the controllers are located , each controller has its own test file .

### app/routes

This is where all the routes are located.

### app/helpers

This where all the helpers functions are located , each helper has its own test file .

### app/types

This is where all the types used in the project are located .

## How to run the app

We will need first to install all dependencies used in the project . Assuming that you have [Node 12 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install node modules

```bash
$yarn install
```

then you can run the project locally with :

```bash
$yarn run dev
```

Now the project is available at : **localhost:8080.**

## Testing

We are using Jest for unit testing . To run the tests , run the command :

```bash
$yarn run test
```


