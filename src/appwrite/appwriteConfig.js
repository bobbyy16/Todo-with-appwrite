import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint("http://localhost:8080/v1").setProject("6409e15e87b7700ee90d")

export const account = new Account(client)

// Databases

export const databases = new Databases(client, "6409e3d1537bd07d098e")