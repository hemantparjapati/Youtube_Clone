import { asyncHandller } from "../utils/asyncHandler.js";


const registerUser = asyncHandller(async (req , res) => {
    
    // ACTUAL LOGIC
    
    
    res.status(200).json({
        messagae:"hogya connect"
    })
})


export {registerUser}