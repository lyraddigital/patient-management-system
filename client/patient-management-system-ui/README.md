# Patient Management System Frontend

This project represents a simple single page application that manages patients in a hospital. It is built using React JS and Typescript.

## Running the application

To run this application on your development machine first install the dependencies by running.

```bash
$ npm install
```

Then you can start the application by running

```bash
$ npm start
```

This will runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Building the application

To build this application and make it production ready. Use the following command.

```bash
$ npm run build
```

## Updating the GraphQL

In this application GraphQL is used. The queries and mutations that are to be run against the server exists in the **graphql** folder. However this folder just contains queries and mutations. In order for this application to run, another tool called **graphql-codegen** is used to compile these statements. The result of this creates generated React hooks (*inside the **src/generated** folder*).

If you need to add, update or delete the GraphQL statements in the **graphql** folder, you will need to rebuild the generated code. To do this just run the following command.


```bash
$ npm run generate
```