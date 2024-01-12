import express from "express";

import { getPosts } from "./posts.controller";
import { apiLimiter } from "shared/middlewares/apiLimiter";

export const postsRouter = express.Router();

postsRouter.get("/list", apiLimiter, getPosts);

// export default postsRouter;
