// Using Node.js `require()`

import app from "./App";
import config from "./App/Config"
import mongoose from "mongoose"
// const mongoose = require('mongoose');


async function main() {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  
 
  }

