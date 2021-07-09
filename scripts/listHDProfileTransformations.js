require('dotenv').config()
const cloudinary = require('cloudinary').v2

/*
I'm using the admin api to list all the transformation included in Cloudinary's built in
hd profile.  New profiles can be created and this profile can server as a template.
*/
cloudinary.api
  .get_streaming_profile('hd')
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.log.log(error))