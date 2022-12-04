import express, { Express } from 'express';
import expressConfig from '../../Config/Express';
import domainRoutes from '../../Domains/Routes';

class Server {
  private app: Express = express();

  start() {
    this.setupParser();
    this.setupRoutes();
    this.initServer();
  }

  private setupRoutes() { domainRoutes.forEach((routes) => this.app.use('/api/v1/', routes)); }

  private setupParser() {
    this.app.use(express.json());
  }

  private initServer() {
    this.app.listen(expressConfig.port, () => {
      console.log(`Server is running... [PORT ${expressConfig.port}]`);
    });
  }
}

export default Server;
