const db = require('./locals.model')

const allLocals = async () => {
    const local = db.Locals.findAll({attributes: ['name', 'description', 'avatar']})

    return local
}

const getIdLocal = async (id) => {
    
    const local = await db.Locals.findByPk(id);
    
    return local

}

const create = async (data) => {
    const local = db.Locals.create(data)

    if(!local){
        throw  new Error('Error create local')
    }

    return local
}

const update = async (body, idLocal) => {
    const update = await db.Locals.update({
        name: body.name,
        description: body.description,
        email: body.email,
        avatar: body.avatar

    },
    {
        where:{
        id: parseInt(idLocal)
        }
    }
    )

    if(update == 0) {
        throw new Error("Error local updated");
    }

    return update

}

const deleteOne = async (id) => {

    const locals = await db.Locals.destroy(
        { 
            where: {id}
        }
    );

    return locals;
}

module.exports = {allLocals, getIdLocal, create, update, deleteOne,}