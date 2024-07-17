const router = require("express").Router();
const { users } = require("../../models");

const errMsg = "No user found with this id";

router.get("/", (req, res) => {
  users
    .findAll({
      attributes: ["id", "username", "email", "phoneNumber", "address", "image", "type", "bio", "priority", "created_at", "updated_at", "status"],
    })
    .then((dbusers) => res.json(dbusers))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "username", "email", "phoneNumber", "address", "image", "type", "bio", "priority", "created_at", "updated_at", "status"],
    })
    .then((dbusers) => {
      if (!dbusers) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbusers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  users
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      image: req.body.image,
      type: req.body.type,
      bio: req.body.bio,
      priority: req.body.priority,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      status: req.body.status || 1, // set default value for status
    })
    .then((dbusers) => res.json(dbusers))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  users
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbusers) => {
      if (!dbusers[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbusers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  users
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbusers) => {
      if (!dbusers) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbusers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
