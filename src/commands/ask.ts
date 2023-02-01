import { CommandType } from '../interfaces/Command';
import {CreateCompletionResponse} from "openai";
import axios from "axios";

export default {
    name: "ask",
    description: "Ask any question to Torvald Bot!",
    async execute(msg:CommandType) {
        try {
            const response = await axios.post<CreateCompletionResponse>("https://api.openai.com/v1/engines/text-davinci-002/completions", {
                prompt: msg.content.slice(5),
                max_tokens: 100,
                temperature: 0.5,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }, {
                headers: {
                    "Authorization": `Bearer ${process.env.OPEN_AI}`,
                    "Content-Type": "application/json"
                }
            })
            msg.reply(response.data.choices[0].text as string)
        } catch (error) {
            console.error(error);
        }
    }
};