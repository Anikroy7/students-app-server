const {
    insert,
    search,
    getById,
    update,
    deleteById,
} = require("./students.service");

const setupRoutes = (app) => {
    console.log(`setting up student routes`);
    app.get("/api/students/detail/:id", async (req, res) => {
        console.log("GET /api/students", req.params);
        const student = await getById(req.params.id);
        res.send(student);
    });

    // TODO: Proper searching with paging and ordering
    app.post("/api/students/search", async (req, res) => {
        console.log("POST /api/students", req.body);
        const result = await search(req.body);

        res.send(result);
    });

    app.post("/api/students/create", async (req, res) => {
        console.log("POST /api/students/create", req.body)
        const result = await insert(req.body);
        console.log(result);
        if (result instanceof Error) {
            res.status(400).json(JSON.parse(result.message))
            return;
        }
        res.json(result)
    });

    app.put("/api/students/update/:id", async (req, res) => {
        console.log("PUT /api/students/:id", req.params.id)
        const result = await update(req.params.id, req.body);
        res.send(result)

    });

    app.delete("/api/students/delete/:id", async (req, res) => {
        console.log("DELETE /api/students/:id", req.params.id);
        const result = await deleteById(req.params.id);
        res.send(result)
    });
};

module.exports = { setupRoutes };