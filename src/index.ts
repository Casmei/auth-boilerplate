import 'dotenv/config';
import 'reflect-metadata';
import Setup from './Setup';

const app = new Setup();

app.boot();

export default app;
