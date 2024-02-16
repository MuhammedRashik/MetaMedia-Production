import express, { Express,Request,Response } from "express";
import cors from "cors";
const cookieParser = require("cookie-parser");
import session, { SessionOptions, MemoryStore } from "express-session";
const expresscofig = (app: Express): void => {
  const store = new MemoryStore();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(process.env.COOKIEPARSERSECRET));
  app.use(express.static('./public'))
  app.use(
    cors({
      origin: 'http:client-srv:5173',
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

  app.use((req:Request, res:Response, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://metamedia.com');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Origin', 'http:client-srv:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    if (req.method === 'OPTIONS') {
      res.sendStatus(200); 
    } else {
      next();
    }
});
  app.use(
    session({
      secret: process.env.SESSION_SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 60 * 60 * 1000,
        httpOnly: true,
      },
      store: store,
    } as SessionOptions)
  );
};

export default expresscofig;
