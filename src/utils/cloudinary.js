import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: 'dt5nsiwzp',
    api_key: '837675196178871',
    api_secret: 'IjT7lyXgYbBUHntODVM5yRJJGnk' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const uploadResult = await cloudinary.uploader.upload
            (
                localFilePath, {
                resource_type: 'auto'
            });
        console.log('File uploaded successfully', uploadResult.url);
        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary }