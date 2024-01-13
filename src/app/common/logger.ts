export abstract class BaseLogger{
  abstract Log(message:string);
}
export class LoggerConsole extends BaseLogger{
  Log(message:string){
    console.log(message);
  }
}
export class LoggerEmail extends BaseLogger{
  Log(message:string){
    console.log("Log to console: Message: "+message);
    console.log("Sending Email... Content: "+message);
  }
}
