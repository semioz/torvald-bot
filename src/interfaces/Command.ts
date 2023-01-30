import { Snowflake } from 'discord.js';

export interface CommandType {
    reply:(message:string | object) => void,
    content:string,
    author: {
        id:Snowflake
        username:string,
        tag:string,
        send:(message:string | object) => void,
    },
    channel:{
        id:string,
        send:(message:string | object)=> void;
    },
    client:any
}