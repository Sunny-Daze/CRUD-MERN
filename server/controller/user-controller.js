import  User from '../schema/user-schema.js';

export const addUser = async (req, res) => {
    const user = req.body;
    
    const validatedUser = new User(user);

    try {
        await validatedUser.save();
        res.status(201).json(validatedUser);
    } catch(e) {
        res.status(409).json({message : e.message});
    }
}

export const getUsers = async (req, res) => {
    try {
        const UserDataGet = await User.find({});
        res.status(200).json(UserDataGet);
    } catch(e) {
        res.status(404).json({ message: e.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const UserDataSingle = await User.find({_id:req.params.id});
        res.status(200).json(UserDataSingle);
    } catch(e) {
        res.status(404).json({message : e.message});
    }
}

export const editUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user);
    console.log(req.body._id);
    try {
        await User.updateOne({ _id: req.body._id}, editUser)
        res.status(201).json(editUser);
    } catch(e) {
        res.status(409).json({ message: e.message});
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.deleteOne({_id : req.params.id})
        res.status(200).json({ message : "user deleted successfully"})
    } catch(e) {
        res.satus(409).json({messgae: e.message});
    }
}
