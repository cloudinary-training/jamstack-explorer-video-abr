require('dotenv').config()
const term = require('terminal-kit').terminal;
const cloudinary = require('cloudinary').v2
/*
Using the admin api to list all the transformation included in Cloudinary's 
built in full_hd profile.  New profiles can be created and this profile can 
server as a template.
*/
const listFullHDProfile = async () => {
  const result = await cloudinary.api.get_streaming_profile('full_hd')
  term.slowTyping(JSON.stringify(result, null, 2)+'\n',{delay:15})
}
listFullHDProfile()
