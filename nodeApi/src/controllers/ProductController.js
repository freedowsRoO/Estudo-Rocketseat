const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //lista todos os produtos
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //busca um unico produto
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //salva o produto no banco mongoDB
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        //new true atualiza o registro e reotorna

        return res.json(product);
    },

    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id);
        //new true atualiza o registro e reotorna

        return res.send();
    }
};