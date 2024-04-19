import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'winston';
import { generateToken, verifyToken } from "./services/jwt.js";


const app = express();
const port = 7007;
let loginStatus = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//app.use(bodyParser);
app.use(cors());

app.get("/hello", verifyToken, (req, resp) => {
  console.log('hello');
  resp.send({ message: "Hello world" });
});

app.post("/api/login", (req, resp) => {
  console.log(`inside /api/login`);
  console.log(`BODY: ${JSON.stringify(req.body)}`);
  const request =  req;
  const email = request?.body?.email;
  const password = request?.body?.password;
  if(email && password && email === 'aayush@123' && password === 'aayush@696969') {
    console.log("Success");
    const token = generateToken(email); //token service will generate the token here
    loginStatus = true;
    resp.status(200).json({ loginStatus, token });
  }
  else {
    console.log("failure");
    resp.status(403).json({ loginStatus, errorMessage: 'Invalid credentials' });
  }
});

app.get("/api/auth/status", verifyToken, (req, resp) => {
  console.log(`Autheeeeenticationnnn status: ${loginStatus}`);
  resp.send({ emailId: req.emailId, loginStatus });   
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
