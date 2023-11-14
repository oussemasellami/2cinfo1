var express = require("express");
var Student = require("../model/student");

async function show(req, res, next) {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function add(req, res, next) {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).send("add sucess");
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

async function deleteuser(req, res, next) {
  try {
    await Student.findByIdAndDelete(req.params.id, req.body);
    res.send("removed");
  } catch (err) {
    console.log(err);
  }
}

async function showbyone(req, res, next) {
  try {
    console.log(req.params.name);
    const data = await Student.findOne(req.params);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { show, add, update, deleteuser, showbyone };
