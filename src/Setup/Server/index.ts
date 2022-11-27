import express, {Express} from "express"
import { expressConfig } from "../../Config/Express"

class Server {
    private app: Express = express()

   start() {
    this.initServer()
   }

   private initServer () {
        this.app.listen(expressConfig.port, () => {
            console.log(`Server is running... [PORT ${expressConfig.port}]`)
        })
   }
}

export default Server
