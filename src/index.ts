import "dotenv/config"
import Setup from "./Setup"

const app = new Setup()

app.boot()

export default app