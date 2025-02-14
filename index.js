import "dotenv/config.js";
import cors from "cors";
import { app, server } from "./lib/Socket.js";
import express from "express";
import { authRouter } from "./Routes/auth.js";
import { Connection } from "./lib/Connection.js";

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: [process.env.FRONTEND_URL],
  })
);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use((error, req, res, next) => {
  console.log(error);
});
server.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
  Connection(process.env.DB_URL);
});
