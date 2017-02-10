"use strict";

import * as mongoose from "mongoose";

var _eventsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  a: Number
})

export default (_eventsSchema);
