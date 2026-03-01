const {h2, video, canvas, img, a, div, button, input,p,hr,span,select,option,article,summary} = van.tags;

//https://shamsfiroz.medium.com/capturing-photos-with-javascriptusing-accessing-the-camera-8aefb5e6fa5f
export default function Camera() {
  const photoScrVal = van.state("")
  const mediaListVal = van.state([])
  
  // Create element references
  let videoElem, canvasElem;

  async function startCamera() {
    console.log("Starting camera...");


    // https://stackoverflow.com/questions/78769178/is-there-an-html5-api-to-control-camera-focus-and-zoom-on-iphone
    try {
      //get media devices list
      if (!navigator.mediaDevices?.enumerateDevices) {
        console.log("enumerateDevices() not supported.");
      } else {
        // List cameras and microphones.
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          console.log( "Media devices found: " + devices);
          devices.forEach((device) => {
            mediaListVal.val += `${device.kind}: ${device.label} id = ${device.deviceId}\n`
          });
          console.log("Available media devices:\n" + mediaListVal.val)
          //alert("Available media devices:\n" + mediaListVal.val)
        } catch (err) {
          console.error(`${err.name}: ${err.message}`);
        }
      }

      //get device details

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',  // dont use
          // deviceId: myPreferredCameraDeviceId,
          // deviceId: { exact: myExactCameraOrBustDeviceId }, // same as above, but throws error if not found instead of just ignoring
          // width: { min: 640, ideal: 1280, max: 1920 }, 
          // height: { min: 480, ideal: 720, max: 1080 }, 
          // resizeMode: "crop-and-scale", aspectRatio: 16/9
          frameRate: { ideal: 10, max: 15 },
          // facingMode: front ? "user" : "environment"
          zoom: true,

        }
      });
      videoElem.srcObject = stream;
      const [track] = stream.getVideoTracks();
      const capabilities = track.getCapabilities();
      const settings = track.getSettings();
      console.log(track,capabilities,settings)

      await videoElem.play();
    } catch (err) {
      console.error("Error accessing the camera", err);
      alert("Error accessing the camera: " + err.message);
    }
  }

  async function stopCamera() {
    console.log("Stopping camera...");
    const stream = videoElem.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoElem.srcObject = null;
    }
  }

async function capturePhoto(mediaStreamTrack) {
  try {
    const imageCapture = new ImageCapture(mediaStreamTrack);
    const blob = await imageCapture.takePhoto();
    return blob;
  } catch (error) {
    console.error("Error capturing photo:", error);
    throw error;
  }
}

  return div({},
    div({},
      h2("Camera Access and Photo Capture"),
      videoElem = video({ 
        playsinline: true, 
        autoplay: true, 
        style: "width: 100%; max-width: 350px; max-height: 270px; border-radius: 4px; background: #000;" 
      }),
      hr(),
      button({ onclick: startCamera }, "Start"),
      button({ onclick: async () => { photoScrVal.val = URL.createObjectURL(await capturePhoto(videoElem.srcObject.getVideoTracks()[0])); }, style: "margin-left: 8px;" }, "Take Photo"),
      button({ onclick: stopCamera, style: "margin-left: 8px;" }, "Stop"),
      canvasElem = canvas({ style: "display:none;" }),
      hr(),
      img({ src: () => photoScrVal.val, alt: "Captured photo will appear here", style: "max-width: 100%;" }),
    )
  )
}


