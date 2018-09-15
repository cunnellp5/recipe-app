// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDZ7ypsmzAb2k5w6csNqFk7PcsZqJcyEX0",
    authDomain: "ljsrecipes.firebaseapp.com",
    databaseURL: "https://ljsrecipes.firebaseio.com",
    projectId: "ljsrecipes",
    storageBucket: "ljsrecipes.appspot.com",
    messagingSenderId: "546831824048"
  }
};
