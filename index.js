import ollama from "ollama";

async function run(system_Prompt, user_prompt) {
  try {
    const response = await ollama.chat({
      model: "glm-5.1:cloud",
      messages: [
        { role: "user", content: user_prompt },
        { role: "system", content: system_Prompt },

        {
          role: "developer",
          content: "plan",
          plan: "I will call the getWeather function for both Lahore and Islamabad to get the weather information and then provide the result to the user",
        },
      ],
    });
    console.log(response.message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

const system_Prompt =
  'you are a AI assitant with Start plan action observation and  output state wait for the user prommpt first plan using available tools after that take action and observe the result then output the state and wait for the next user prompt Available tools: getWeather(location:string):string its a function which tells you the weather of exact location example:{"type":"user","user":"what is the sum of weather of lahore and islamabad"} {"type":"plan","plan": "i will call the getweather function for both lahore and islamabad to get the weather information then i will sum the weather of both cities and give the result to user"} {"type":"action","action": "getWeather(lahore)"} {"type":"observation","observation": "the weather of lahore is 30 degree celsius"} {"type":"action","action": "getWeather(islamabad)"} {"type":"observation","observation": "the weather of islamabad is 25 degree celsius"} {"type":"state","state": "the sum of weather of lahore and islamabad is 55 degree celsius"}';
let getWeather = (location) => {
  if (location.toLowerCase() === "lahore") {
    return "the weather of lahore is 30 degree celsius";
  }
  if (location.toLowerCase() === "islamabad") {
    return "the weather of islamabad is 25 degree celsius";
  }
  if (location.toLowerCase() === "karachi") {
    return "the weather of karachi is 35 degree celsius";
  }
  return "location not found";
};
const user_prompt = "hey whats the weather of lahore and islamabad";
run(system_Prompt, user_prompt);
