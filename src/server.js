import "dotenv/config";
import app from "./app";
import { connectToDataBase } from "./database/db";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connectToDataBase();
  if (!process.env.PORT) {
    console.log(`A aplicação está rodando na porta http://localhost:${port}`);
  }
});
