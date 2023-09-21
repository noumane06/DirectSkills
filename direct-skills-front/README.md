# DirectSkills coding challenge FRONT

# Technologies

this app was developed using :

- NextJS 13 : front-end JavaScript library for building user interfaces based on UI components .
- TailwindCss : for styling the app .
- Jest & React Testing Library : for unit tests examples done in the project .

# Project hierarchy

The whole project was developped using typescript .

## my-component

This where all the ui components are located , each component has its own test folder .

## app

This is where the main app is located , it contains the pages folder where all the pages are located .

## my-types

This is where all the types used in the project are located .

## my-wrappers

This is where all the wrappers used in the project are located.

# How to run the app

Before running the app , you need to have the back-end running , you can find the back-end repo [here](https://github.com/noumane06/DirectSkills/tree/master/direct-skills-back) .

We will need first to install all dependencies used in the project

Clone the project repo first , and navigate to the project .

Assuming that you have [Node 12 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install node modules

```bash
$npm i
```

then you can run the project locally with :

```bash
$npm start
```

Now the project is available at : **localhost:3000.**

## Testing

We are using Vitest and React Testing Library for unit testing . To run the tests , run the command :

````bash
```bash
$yarn run test
````
