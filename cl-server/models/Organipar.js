const mongoose = require("mongoose")


const Schema = mongoose.Schema

const organiparSchema = Schema({
    name: { type: String, required: true },
    description: [{
        statement: { type: String },
        refrence: { type: String }
    }],
    image: [{
        renditions: [{
            imageString: { type: String },
            date: { type: Date },
            reference: { type: String },
            license: { type: String }
        }],
        currentImage: { type: String },
        caption: { type: String },

    }],
    chemicalCompounds: {

        composure: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }],
        foreignMolecule: [{ type: mongoose.Types.ObjectId, ref: "ChemicalCompound" }, {
            changeInCell: [
                {
                    renditions: [{
                        imageString: { type: String },
                        date: { type: Date },
                        reference: { type: String },
                        license: { type: String }
                    }],
                    currentImage: { type: String },
                    caption: { type: String },
                    celluelTectonicStep: { type: Number }

                }]
        }
        ]
    },
    organ: { type: mongoose.Types.ObjectId, ref: "Organ" },
    cells: [{ type: mongoose.Types.ObjectId, ref: "Cell" }],
    disorders: [{ type: mongoose.Types.ObjectId, ref: "Disorder" }],
    etymology: [{ type: mongoose.Types.ObjectId, ref: "Etymology" }]
})

module.exports = mongoose.model("Organipar", organiparSchema)