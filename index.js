import ollama from "ollama";

async function run() {
  try {
    const response = await ollama.chat({
      model: "glm-5.1:cloud",
      messages: [{ role: "user", content: "Why is the sky blue?" }],
    });
    console.log(response.message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
