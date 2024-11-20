const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

const posts = [
  {
    titolo: "ciambellone",
    contenuto: "dolce ciambellone soffice",
    immagine: "/img/ciambellone.jpeg",
    tags: [""],
  },
  {
    titolo: "cracker_barbabietola",
    contenuto: "snack alla barbabietola",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: [""],
  },
  {
    titolo: "pane_fritto_dolce",
    contenuto: "impasto fritto e dolce",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: [""],
  },
  {
    titolo: "pasta_barbabietola",
    contenuto: "pasta alla barbabietola",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: [""],
  },
  {
    titolo: "torta_paesana",
    contenuto: "una torta paesana",
    immagine: "/img/torta_paesana.jpeg",
    tags: [""],
  },
];

app.get("/bacheca", (req, res) => {
  const bacheca = {
    conteggio: posts.length,
    post: posts,
  };
  res.json(bacheca);
});

app.listen(port, () => {
  console.log("Server online sulla porta " + port);
});
