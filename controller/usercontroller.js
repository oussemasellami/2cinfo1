var express = require("express");
var User = require("../model/user");

async function show(req, res, next) {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function add(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("add sucess");
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

async function deleteuser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id, req.body);
    res.send("removed");
  } catch (err) {
    console.log(err);
  }
}

async function showbyone(req, res, next) {
  try {
    console.log(req.params.name);
    const data = await User.findOne(req.params);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { show, add, update, deleteuser, showbyone };
