const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Obsługa statycznych plików z folderu "dist"
app.use(express.static(path.join(__dirname, "dist")));

// Obsługa każdej ścieżki, aby zawsze zwracać "index.html"
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
