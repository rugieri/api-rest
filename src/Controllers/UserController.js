exports.post = (req, res, next) => {
    res.status(201).send('Route POST !');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`PUT route  ID ! --> ${id}`;)
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`DELETE route ID! --> ${id}` );
};

exports.get = (req, res, next) => {
    res.status(200).send(`GET route `);
};

exports.getById = (req, res, next) => {
    res.status(200).send(`GET route ID! --> ${id}`);
};