declare global {
    namespace NodeJS{
        interface ProcessEnv {
            TOKEN:string,
            PREFIX:string,
            REDIS_URL:string,
            API_KEY:number,
            MONGO_URI:string
        }
    }
};
declare module "discord.js" {
    export interface Client {
      commands: Collection<unknown, any>,
      database:unknown, any
    }
  }

export{}