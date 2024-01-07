const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test3.db");

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const message = "Hello world";
  res.render("show", { mes: message });
});

app.get("/db", (req, res) => {
  db.serialize(() => {
    db.all("select id, 都道府県, 人口 from example;", (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      res.render("select", { data: row });
    });
  });
});

app.get("/magicH", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 1;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicR", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 2;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicHer", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 3;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicM", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 5;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicS", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 6;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicL", (req, res) => {
  db.serialize(() => {
    db.all(
      "select character.id as character_id,character.name as character_name , magic.id ,magic.magic_name from cm join character on cm.character_id = character.id join magic on cm.magic_id = magic.id where character.id = 7;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("test3", { data: row });
      },
    );
  });
});

app.get("/magicnum", (req, res) => {
  db.serialize(() => {
    db.all(
      "select  magic_name, mean , number from magic inner join magicnum on magic.id = magicnum.magic_id ;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("magic", { data: row });
      },
    );
  });
});

app.get("/magicnum2", (req, res) => {
  db.serialize(() => {
    db.all(
      "select  magic_name, mean , number from magic inner join magicnum on magic.id = magicnum.magic_id order by number desc;",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("magic2", { data: row });
      },
    );
  });
});

app.get("/top", (req, res) => {
  //console.log(req.query.pop);    // ①
  let desc = "";
  if (req.query.desc) desc = " desc";
  let sql =
    "select id, 都道府県, 人口 from example order by 人口" +
    desc +
    " limit " +
    req.query.pop +
    ";";
  //console.log(sql);    // ②
  db.serialize(() => {
    db.all(sql, (error, data) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      //console.log(data);    // ③
      res.render("select", { data: data });
    });
  });
});
app.get("/db/:id", (req, res) => {
  db.serialize(() => {
    db.all(
      "select id, 都道府県, 人口,大学 from example where id=" +
        req.params.id +
        ";",
      (error, row) => {
        if (error) {
          res.render("select", { mes: "エラーです" });
        }
        res.render("db", { data: row });
      },
    );
  });
});

app.post("/insert", (req, res) => {
  let sql =
    `
  insert into example (都道府県,人口,大学)values("` +
    req.body.name +
    `",` +
    req.body.jinko +
    `,` +
    req.body.daigaku +
    `);
`;
  console.log(sql);
  db.serialize(() => {
    db.run(sql, (error, row) => {
      console.log(error);
      if (error) {
        res.render("show", { mes: "エラーです" });
      }

      res.redirect("/db");
    });
  });
  console.log(req.body);
});
app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
