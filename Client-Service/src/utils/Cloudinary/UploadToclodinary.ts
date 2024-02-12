// import cloudinary from 'cloudinary';

// // Configure Cloudinary with your account credentials
// cloudinary.config({
//   cloud_name: 'your_cloud_name',
//   api_key: 'your_api_key',
//   api_secret: 'your_api_secret'
// });

// const uploadImage = async (file:any) => {
//     try {
//       const result = await cloudinary.uploader.upload(file, {
//         upload_preset: 'your_upload_preset' // Optional: Specify an upload preset if configured in your Cloudinary settings
//       });
//       console.log('Public ID:', result.public_id);
//       return result;
//     } catch (error) {
//       console.error('Upload error:', error);
//       throw error;
//     }
//   };