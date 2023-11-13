import app from "./app";

const PORT: number = 3000 || process.env.NODE_DOCKER_PORT;

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
