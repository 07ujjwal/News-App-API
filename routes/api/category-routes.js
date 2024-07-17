const router = require("express").Router();

const { category } = require("../../models");

const errMsg = "No category found with this id";

router.get("/", (req, res) => {
  category
    .findAll({
      attributes: ["id", "category_name", "image", "created_at", "updated_at", "status"],
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  category
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "category_name", "image", "created_at", "updated_at", "status"],
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  category
    .create({
      category_name: req.body.category_name,
      image: req.body.image,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      status: req.body.status || 1, // set default value for status
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  category
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  category
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
