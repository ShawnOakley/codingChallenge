## Coding Challenge 

### Question 1

The specs were implemented using react, react-rotuer, redux, webpack, and material-ui, along with other assorted 
libraries. No templates were used -- I just started with an empty package.json and installed libraries as necessary.

The app requires an active json-server to function.  

To run the app, 

1) go to the project and directory and make sure npm modules are installed (`npm install`)
2) In two separate terminals, run the following commands:
    `npm run api` (starts the json-server backend)  AND  
    `npm run start`(starts webpack dev server)
3) The app should be available at localhost:8080
    
### Bonus Challenge

The bonus challenge was implemented using json-server.

See: https://github.com/typicode/json-server

Make sure npm modules are installed (`npm install`)

Then run the following command to start the server:

`npm run api`

The following commands will demonstrate that the endpoint ("question2login") is functioning.

1) Accurate workup returns found record

`curl localhost:3000/question2login --data "username=joejones&password=password1"`

2) Wrong password returns failed status and error message

`curl localhost:3000/question2login --data "username=joejones&password=password2"`

3) No password returns failed status and error message

`curl localhost:3000/question2login --data "username=joejones"`

4) Wrong username returns failed status and error message

`curl localhost:3000/question2login --data "username=jilljones"`

5) No username returns failed status and error message

`curl localhost:3000/question2login --data ""`
