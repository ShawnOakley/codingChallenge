var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('./src/api/db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Endpoint to generate new users
server.post('/users', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
  var db = router.db // lowdb instance
    const newId = db.get('users').findLastIndex() + 1;
    const writePromise = db.get('users').push({
            id: newId,
            username: req.query.username,
            hash: req.query.hash,
            firstName: req.query.firstName,
            lastName:req.query.lastName
        }).write();
    writePromise.then(()=>{
        res.send(JSON.stringify({
            status:1,
            message: "Thank you for signing up, "+req.query.username,
            userId: newId
        }));
    }).catch((err)=>{
        res.send(JSON.stringify({status:-1, message: err ? err : "An unknown error has occurred"}));
    })
})

// Endpoint to check for presence of user and return true status if user and hash agree with json-server
server.post('/login', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
  var db = router.db // lowdb instance
    const users = db.get('users');
    var filteredUser = users.filter(
                        {
                            username: req.query.username
                        }).filter(
                        {
                            hash: req.query.hash
                        })

    if (filteredUser.size() > 0) {
        const {
            id,
            username,
            firstName,
            lastName
        } = filteredUser.value()[0];

        res.send(JSON.stringify(
            {
                status:1,
                message: 'Login success',
                username,
                name: `${firstName} ${lastName}`,
                userId: id
            })
        );
    } else {
        res.send(JSON.stringify({status:-1, message: "That login was not found in the system."}));
    }
})


// Below is the code to question 2 of the coding test
// It's very similar to what I implemented for the login endpoint
server.post('/question2login', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body.username);
  var db = router.db // lowdb instance
    const users = db.get('question2Users');
    var filteredUser = users.filter(
                        {
                            username: req.body.username
                        }).filter(
                        {
                            password: req.body.password
                        })

    if (filteredUser.size() > 0) {
        const {
            userid,
            username,
            name
        } = filteredUser.value()[0];

        res.send(JSON.stringify(
            {
                status:1,
                message: 'Login success',
                username,
                name,
                userid
            })
        );
    } else {
        res.send(JSON.stringify(
            {
                status:-1,
                message: "That login was not found in the system."
            }
        ));
    }
})

server.use(router)
server.listen(3000, function () {
    console.log("Server is currently running.")
})