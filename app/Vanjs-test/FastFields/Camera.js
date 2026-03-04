const {video,div, button,fieldset,img } = van.tags;

//https://shamsfiroz.medium.com/capturing-photos-with-javascriptusing-accessing-the-camera-8aefb5e6fa5f
export default function Camera() {
  const consoleVal = van.state(["kkk", "test"])
  const mediaListVal = van.state([])
  
  // Create element references
  let videoElem, vidDiv

  const zoomLevel = van.state(1);
  const isCameraActive = van.state(false);

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
            mediaListVal.val.push(`${device.kind}: ${device.label} id = ${device.deviceId}`);
            consoleVal.val
          });
          console.log("Available media devices:\n" + mediaListVal.val)
          //alert("Available media devices:\n" + mediaListVal.val)
        } catch (err) {
          console.error(`${err.name}: ${err.message}`);
        }
      }
    
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

  // return div({},
  //   div({},
  //     h2("Camera Access and Photo Capture"),
  //     videoElem = video({ 
  //       playsinline: true, 
  //       autoplay: true, 
  //       style: "width: 100%; max-width: 350px; max-height: 270px; border-radius: 4px; background: #000;" 
  //     }),
  //     hr(),
  //     button({ onclick: startCamera }, "Start"),
  //     button({ onclick: async () => { photoScrVal.val = URL.createObjectURL(await capturePhoto(videoElem.srcObject.getVideoTracks()[0])); }, style: "margin-left: 8px;" }, "Take Photo"),
  //     button({ onclick: stopCamera, style: "margin-left: 8px;" }, "Stop"),
  //     canvasElem = canvas({ style: "display:none;" }),
  //     hr(),
  //     img({ src: () => photoScrVal.val, alt: "Captured photo will appear here", style: "max-width: 100%;" }),
  //   )
  // )

  startCamera()
  return div(
    {style: "display: flex; flex-direction: column; gap: 16px; align-items: center; padding: 10px"},
    vidDiv = div(
      {id: 'camera-container',
        style: () => `
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 0.5rem;
        background: #000;
        `,
        //position: relative;
        //touch-action: pinch-zoom;
        onwheel: (e) => {
          e.preventDefault();
          zoomLevel.val = Math.max(1, Math.min(5, zoomLevel.val + (e.deltaY > 0 ? -0.1 : 0.1)));
        },
        ontouchend: (e) => {
        //   e.stopPropagation()
        if (e.touches.length === 1) {

        //     console.log(e.touches[0])
        //     const touch1 = e.touches[0];
        //     const touch2 = e.touches[1];
        //     const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        //     zoomLevel.val = Math.max(1, Math.min(5, zoomLevel.val + (distance > 50 ? 0.1 : -0.1)));
          }
        },
      },
      videoElem = video({
        playsinline: true,
        autoplay: true,
        style: () => `
          touch-action: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(${zoomLevel.val});
        `,
      }, 
    ),
      button({style: "height: 40px; width: 40px; position: absolute; top: 14px; right: 14px; padding: 0; border-radius: 8px", 
        onclick: (e) => {},
      },
        img({src: "/app/images/flash-on.svg", alt: "Stop Camera", style: "width: 24px; height: 24px; filter: invert(1);"})
      ),
      div({style: "height: 24px; width: 104px; display: flex; justify-content: center; align-items: center; position: relative; bottom: 36px; left: 50%; transform: translateX(-50%); font-size: 14px; z-index: 10; color: #fff; background: rgba(0, 0, 0, 0.5); border-radius: 4px;"},
        div(() => zoomLevel.val.toFixed(1) + "x zoom"),    
      ), 
    ),
    div(
      {style: "display: flex; justify-content: space-between; gap: 16px; width: 100%; max-width: 400px;"},
      button({onclick: () => {isCameraActive.val = false;}},"Cancel"),
      button({ onclick: () => { } }, "Capture"),
    ),
  );
}


