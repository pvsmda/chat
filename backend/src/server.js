import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Rotas da API
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Caminho correto do build do frontend
const frontendPath = path.resolve(__dirname, "../../frontend/dist");
console.log("📂 Servindo frontend de:", frontendPath);

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      console.error("❌ Erro ao servir index.html:", err);
      res.status(500).send("Erro ao carregar o frontend");
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
