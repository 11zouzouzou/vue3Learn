import mitt, { Emitter } from "mitt";
type Events = {
  sayHi:string
};
const m: Emitter<Events> = mitt();
export default m;
