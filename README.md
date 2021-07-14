# Jamstack Explorer Streaming Video with Adaptive Bitrate Streaming (ABR)

[GitHub Repo](https://streaming-video-with-abr.netlify.app/)

[Demo](https://streaming-video-with-abr.netlify.app/)

This repo contains a react app created with the react-app starter app. Instructions on starting up the starter app are shown below.

## node.js script setup

This app also contains node.js scripts for process video to enable ABR. They are located in the `/scrpts` directory.  You need to add your CLOUDINARY_URL to a `.env` file.  The `.env.sample` shows what this will look like.  You can find your CLOUDINARY_URL in the console of your Cloudinary cloud. It is free to sign up for a Cloudinary account and obtain this.

To run the node script after setting up your .env file:

```bash
# list all the transformations in the Cloudinary 'hd' profile
node scripts/listFullHDProfileTransformations.js
# upload a video with eager transformations to create hls derivatives
# you may want to replace the file uploaded
node scripts/upload.js
```

## React app setup

The app contains a `VideoPlayer` component.  This component accepts cloud name and public id
to designate a specific video in a specific cloud that you want to access through the Video Player.  This Player is expecting that the video has been processed by a script like the `upload.js` so that HLS derivatives have been created.

You can set your own param in the App.js file

```JavaScript
const params = { cloudName: "<your cloud name>", publicId: "<your video public id>" };
```

<hr>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc


### Local run
Skip preflight check 
Skip the check to see whether multiple versions of a particular dependency are installed/accessible via node's resolve algorithm
https://github.com/facebook/create-react-app/issues/8114

## Credits
Climbing video: Video by Grisha Grishkoff from Pexels
https://www.pexels.com/video/low-angle-view-of-a-woman-rock-climbing-5963471/

SwissHumanity from Pexels
Drone Footage of Snow Capped Mountains
https://www.pexels.com/video/drone-footage-of-snow-capped-mountains-7397652/

Mountain Ranges With Snow Under A Blue Sky
https://www.pexels.com/video/mountain-ranges-with-snow-under-a-blue-sky-3217373/




