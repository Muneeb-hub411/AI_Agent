import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client = new OpenAI({
  apiKey: process.env.Open_AI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-5",
  instructions: "You are a coding assistant that talks like a pirate",
  input: "Are semicolons optional in JavaScript?",
});

console.log(response.output_text);
