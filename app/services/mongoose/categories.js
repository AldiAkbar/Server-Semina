const Categories = require('../../api/v1/categories/model');

const { BadRequestError, NotFoundError } = require('../../errors');
const NotFound = require('../../errors/not-found');

const getAllCategories = async (req) => {
    // console.log (req.user);
    const result = await Categories.find({ organizer: req.user.organizer });
 
    return result;
};

const createCategories = async (req) => {
    const { name } = req.body;

    const check = await Categories.findOne({ name, organizer: req.user.organizer,});

    if (check) throw new BadRequestError('kategori nama duplikat');

    const result = await Categories.create({name, organizer: req.user.organizer,
    });

    return result;
};

const getOneCategories = async (req) => {
    const { id } = req.params;
        
    const result = await Categories.findOne({
        _id: id,
        organizer: req.user.organizer,
    });

    if(!result) throw new NotFoundError(`Tidak ada kategori dengan Id : ${id}`)

    return result;

    };

    const updateCategories = async (req) => {
        const { id } = req.params;
        const {name } = req.body;

        // cari categories dengan field name dan id selain dari yang dikirim dari params
        const check = await Categories.findOne({
            name,
            organizer: req.user.organizer,
            _id: { $ne: id },
        });

        // apabila check true/data categories sudah ada maka kita tampilkan error bad request 
        if (check) throw new BadRequestError('kategori nama duflikat');

        const result = await Categories.findOneAndUpdate(
            { _id: id },
            { name },
            { new: true, runVAlidators: true }
        );

        // jika id result false/ null maka akan menampilkan error `Tidak ada kategori dengan id` yang ini
            if (!result) throw new NotFoundError (`Tidak ada kategori dengan id : ${id}`);

            return result;
    };

    const deleteCategories = async (req) => {
        const {id } = req.params;

        const result = await Categories.findOne({
            _id: id,
            organizer: req.user.organizer,
        });

        if (!result) throw new NotFoundError(`Tidal ada kategori dengan id : ${id}`);

        await result.remove();

        return result;
    };

    const checkingCategories = async (id) => {
        const result = await Categories.findOne({ 
            _id: id,
         });
      
        if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);
      
        return result;
      };

module.exports = { 
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
    checkingCategories,
};