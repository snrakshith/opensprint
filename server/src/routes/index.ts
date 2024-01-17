import express from "express";
import { postsRouter } from "modules/posts";

// Root Router for web
const webRouter = express.Router();

webRouter.use("/posts", postsRouter);

export default webRouter;
