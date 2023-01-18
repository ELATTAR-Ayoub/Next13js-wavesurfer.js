# WaveSurfer.js for Next.js

This is a tutorial app that demonstrates how to implement the [wavesurfer.js](https://wavesurfer-js.org/) library in a Next.js application. The app provides a step-by-step guide on how to set up and use the wavesurfer library, including how to integrate it with React hooks and handle different events. The app also provides a working example of how to display and control audio waveforms within a Next.js application.

![App_preview](https://i.imgur.com/VYuxFbb.png)

## Getting Started

1. Clone this repository and run `npm install` or `yarn install` to install the required dependencies.
2. Start the development server by running `npm run dev` or `yarn dev`.
3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## How it works

The application uses the `useRef` hook to create a reference to the "waveform" div element, which is used as the container for the waveform visualization. The `create` function is used to import the "wavesurfer.js" library and create an instance of the "WaveSurfer" class, passing in the "waveform" div element as the container. The `load` method is called on the "wavesurfer" object to load the audio file from the specified URL.

The `handlePlayPause` function is used to toggle the playing state of the audio, and it calls the `playPause` method on the "wavesurfer" object to start or pause the playback. The `useEffect` hook is used to call the `create` function when the component is first rendered and to clean up the "wavesurfer" object when the component is unmounted.

It is using a css-in-js library and some svg components are used for the UI design. The audio file is hardcoded in the url variable and it's not dynamic.

## Note

The project is using a hardcoded audio file for demonstration, you can easily change the audio file by replacing the url variable in the component.

## Dependencies

- [next.js](https://nextjs.org/)
- [wavesurfer.js](https://wavesurfer-js.org/)
