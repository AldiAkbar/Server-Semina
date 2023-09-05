const Images = require('../../api/v1/images/model');
const { NotFoundError } = require('../../errors');

// 2. cara kedua generate url setelah sumbit baru simpan images
const generatUrlImage = async (req) => {
    const result =`uploads/${req.file.filename}`;

    return result;
};

// 1. cara pertama 
const createImages = async (req) => {
    const result = await Images.create({
        name: req.file
        ? `uploads/${req.file.filename}`
        : 'uploads/avatar/default.jpeg',
    });

    return result;
};

// tambahkan function checkingImage
const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);

    if (!result) throw new NotFoundError(`TIdak ada gambar dengan id : $(id)`);

    return result;
};

// jangan lupa export checkingImage
module.exports = { createImages, checkingImage };