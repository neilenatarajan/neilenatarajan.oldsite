Welcome to the repository for my personal static github pages webpage! Click [here](https://neilenatarajan.github.io) to see the page itself. The branch is developed and maintained on the `dev` branch, and the `master` branch holds the built code that actually runs the page.

## Licensing

This repository is licensed under the GNU General Public License v3.0. This means that you are free to copy and modify this code to suit your own needs, so long as you include a copy of the original license and copyright, and any time you distribute a modification of this code you make your project open source under the same license. Happy Hacking!

## Installing, Running, and Testing the Code

If you just want to see the code for the site,<br>
look no further than the `master` branch.

However, this branch contains only the autogenerated, built code<br>
so I cannot recommend using it for anything interesting.<br>
Instead, the `dev` branch contains the development code<br>
and is the recommended branch to work from.

The below instructions will help set up the `dev` branch.

### Installing

After cloning the `dev` branch, run `yarn` or `yarn install` to install dependencies.

You will most likely only need to do this once.

### Developing and Testing

The `yarn start` command runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
This will allow you to see any changes you make instantly.

The `yarn test` command launches the test runner in watch mode.<br>
This will let you run all relevant tests, and will continue to test new changes.

This project uses Jest to run tests, so if you wish to write new tests<br>
see [the Jest site](https://jestjs.io/) for help.

### Deploying

Running `yarn deploy` will deploy a build of the code to the master branch,<br>
which will allow you to see your changes on the github pages site.