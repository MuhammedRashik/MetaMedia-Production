import  { Cloudinary } from '@cloudinary/url-gen'

// Create a Cloudinary instance
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dam17psav",
  },
  url: {
    secure: false, 
  },
});
