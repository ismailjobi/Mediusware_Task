const User = require('../Models/userModel');
const bcrypt = require('bcrypt');

// Get login user data
exports.getuser = async (req, res) => {
    try {
        const user = await User.find({ _id: req.user.userId });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to retrieve user' });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const exobj = await User.findOne({ _id: req.user.userId });
        // Prepare the update object with req.body 
        const updateData = {
            ...req.body, // Spread the incoming request body
            password: exobj.password,
            //   email:exobj.email
        };

        // Find the user and update it
        const user = await User.findOneAndUpdate(
            { _id: req.user.userId },
            updateData, // Use the prepared update object
            { new: true } // Return the updated document
        );

        // Check if the post was found and updated
        if (!user) {
            return res.status(401).json({ error: 'User not found or unauthorized' });
        }

        // Respond with the updated post
        res.json(user);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: 'Failed to update user' });
    }
};
//Update user password
exports.updatePassword = async (req, res) => {
    try {
        const userId = req.user.userId; 
        const { currentPassword, newPassword,confirmPassword} = req.body;

        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(500).json({ error: 'Current password is incorrect' });
        }
        let updateData;
        if(newPassword === confirmPassword){
            updateData = {
                name: user.name,
                email:user.email,
            };
        }else{
            return res.status(500).json({ error: 'Confirm password is incorrect' });
        }

        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            updateData.password = hashedPassword;
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            updateData,
            { new: true } // Return the updated user document
        );

        if (!updatedUser) {
            return res.status(500).json({ error: 'Failed to update user' });
        }

        const { password, ...userWithoutPassword } = updatedUser.toObject();
        res.json(userWithoutPassword);
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ error: 'Failed to update user' });
    }
};