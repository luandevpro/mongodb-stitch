const { Stitch, RemoteMongoClient } = require("mongodb-stitch-browser-sdk");

export const client = Stitch.initializeDefaultAppClient("coder9s-01-pjbtz");

export const db = client
	.getServiceClient(RemoteMongoClient.factory, "coder9s")
	.db("mongo-stitch");
