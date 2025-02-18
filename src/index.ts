import app from "./app.js";
import "dotenv/config"
import db from "./db/db.js";

const port = process.env.PORT || 3000;
db.connect()
.then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
    
})
.catch((err) => {
    console.log("Error connecting to the database", err);
});
