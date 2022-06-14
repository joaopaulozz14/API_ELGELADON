import "dotenv/config";
import app from "./app";
import { connectToDataBase } from "./database/db";

app.listen(process.env.PORT, () => {
  connectToDataBase();
  console.log(
    `A aplicação está rodando na porta http://localhost:${process.env.PORT}`
  );
});
