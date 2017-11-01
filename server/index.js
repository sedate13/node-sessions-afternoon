const express = require ('express');
const bodyParser= require ('body-parser');
const session = require ('express-session');
const port=3000;
const checkForSession= require ('./middlewares/checkForSession');
const app = express();
const swag_controller= require ('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');

app.use(bodyParser.json());
app.use(session({
    secret:'blah',
    resave:false,
    saveUninitialized:false
}));

app.use(checkForSession);

app.get ('/api/swag', swag_controller.read);

app.post('/api/login', auth_controller.login);
app.post( '/api/register', auth_controller.register );
app.post( '/api/signout', auth_controller.signout );
app.get( '/api/user', auth_controller.getUser );







app.listen(port, () => 
{console.log (`Listening on port ${port}`);});