require('dotenv').config()
const term = require('terminal-kit').terminal;
const cloudinary = require('cloudinary').v2
/*
Using the admin api to list all the transformation included in Cloudinary's 
built in hd profile.  New profiles can be created and this profile can 
server as a template.
*/
const listHDProfile = async () => {
  const result = await cloudinary.api.get_streaming_profile('hd')
  term.slowTyping(JSON.stringify(result, null, 2)+'\n',{delay:15})
}
listHDProfile()
