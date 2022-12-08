import dataSource from '../Config/TypeOrm';
import Server from './Server';

class Setup {
  private server: Server;

  constructor() {
    this.server = new Server();
  }

  boot() {
    this.server.start();
    this.initDataBase();
  }

  private async initDataBase() {
    // todo: mudar de lugar
    dataSource.initialize().then(() => {
      console.log('Banco de dados inicializado!');
    }).catch((err) => {
      console.log(err);
    });
  }
}

export default Setup;
