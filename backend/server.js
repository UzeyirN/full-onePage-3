const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;
const flowerSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

mongoose.set("strictQuery", false)
const Flowers = mongoose.model("flowers", flowerSchema)

const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("CONNECTED");
        app.listen(PORT, () => {
            console.log(`PORT:${PORT}`);
        })
    }
})

app.get("/flowers", (req, res) => {
    Flowers.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})


app.get("/flowers/:id", (req, res) => {
    const { id } = req.params;
    Flowers.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(400).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})



app.post("/flowers", async (req, res) => {
    const flowers = req.body
    try {
        await Flowers.create(flowers)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
})


app.delete("/flowers/:id", (req, res) => {
    const { id } = req.params;
    Flowers.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})






