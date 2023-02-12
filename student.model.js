const { BANGLADESH_CITIES } = require("./constant")
const { getdb } = require("./mongo")

const createCollection = () => {
    console.log('creating student collection')
    const db = getdb()
    const dbcollection = db.collection('students', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "phone", "age", "city"],
                properties: {
                    name: {
                        bsonType: "string",
                        description: "must be a string and is required",
                    },
                    phone: {
                        bsonType: "string",
                        description: "must be a string and is required",
                    },
                    age: {
                        bsonType: "int",
                        minimum: 0,
                        maximum: 200,
                        description: "must be an integer in [ 0, 200 ] and is required",
                    },
                    city: {
                        enum: BANGLADESH_CITIES,
                        description: "can only be one of the enum values and is required",
                    },
                },
            },
        }
    })
    return dbcollection;
}

module.exports = {
    Student: createCollection()
}
