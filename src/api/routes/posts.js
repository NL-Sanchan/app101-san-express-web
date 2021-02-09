import { Router } from "express";
import {
  PutItemCommand,
  QueryCommand,
  ScanCommand,
  DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

export default ({ config, db }) => {

  let api = Router();
  let jsonParser = bodyParser.json();
  let tableName = "fai_test_table"

  // Create
  api.post("/", jsonParser, (req, res) => {   
  });

  // Read
  api.get("/", (req, res) => {
  });

  api.get("/:id", (req, res) => {
  });

  // Update
  api.put("/:id", (req, res) => {
  });

  // Delete
  api.delete("/:id", (req, res) => {
  });

  return api;
};
