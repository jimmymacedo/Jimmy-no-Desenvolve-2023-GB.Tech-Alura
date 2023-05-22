import mongoose from "mongoose";
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://jimmymacedo:ZQ7tJ45Yi9Xk0L4s@cluster0.2fiq8oc.mongodb.net/alura_node")
let db = mongoose.connection
export default db