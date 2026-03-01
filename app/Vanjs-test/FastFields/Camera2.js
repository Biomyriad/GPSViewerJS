const {h2, video, canvas, img, a, div, button, input, p, hr, span, select, option, article, summary, label} = van.tags;

export default function Camera() {
  const photoScrVal = van.state("")
  const mediaListVal = van.state([])
  const availableCamerasVal = van.state([])
  const selectedCameraVal = van.state("")
  const zoomVal = van.state(1)
  const flashVal = van.state(false)
  
  let videoElem, canvasElem;
  let currentStream = null;
  let currentTrack = null;

  async function enumerateCameras() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      availableCamerasVal.val = videoDevices;
      
      if (videoDevices.length > 0) {
        selectedCameraVal.val = videoDevices[0].deviceId;
      }
      
      console.log("Available cameras:", videoDevices);
    } catch (err) {
      console.error("Error enumerating devices:", err);
    }
  }

  async function startCamera() {
    console.log("Starting camera...");
    
    try {
      // First enumerate cameras if not already done
      if (availableCamerasVal.val.length === 0) {
        await enumerateCameras();
      }

      const constraints = {
        video: {
          deviceId: selectedCameraVal.val ? { exact: selectedCameraVal.val } : undefined,
          frameRate: { ideal: 10, max: 15 },
          zoom: true,
        }
      };

      currentStream = await navigator.mediaDevices.getUserMedia(constraints);
      videoElem.srcObject = currentStream;
      
      const [track] = currentStream.getVideoTracks();
      currentTrack = track;
      
      const capabilities = track.getCapabilities();
      const settings = track.getSettings();
      
      console.log("Track:", track);
      console.log("Capabilities:", capabilities);
      console.log("Settings:", settings);
      
      // Update zoom range if supported
      if (capabilities.zoom) {
        zoomVal.val = settings.zoom || 1;
      }
      
      // Update flash state if supported
      if (capabilities.torch) {
        flashVal.val = settings.torch || false;
      }

      await videoElem.play();
    } catch (err) {
      console.error("Error accessing the camera", err);
      alert("Error accessing the camera: " + err.message);
    }
  }

  async function stopCamera() {
    console.log("Stopping camera...");
    if (currentStream) {
      const tracks = currentStream.getTracks();
      tracks.forEach(track => track.stop());
      videoElem.srcObject = null;
      currentStream = null;
      currentTrack = null;
    }
  }

  async function changeCamera(deviceId) {
    console.log("Changing camera to:", deviceId);
    selectedCameraVal.val = deviceId;
    await stopCamera();
    await startCamera();
  }

  async function setZoom(zoomLevel) {
    if (!currentTrack) return;
    
    try {
      const constraints = { advanced: [{ zoom: zoomLevel }] };
      await currentTrack.applyConstraints(constraints);
      zoomVal.val = zoomLevel;
      console.log("Zoom set to:", zoomLevel);
    } catch (err) {
      console.error("Error setting zoom:", err);
    }
  }

  async function toggleFlash() {
    if (!currentTrack) return;
    
    try {
      const capabilities = currentTrack.getCapabilities();
      if (!capabilities.torch) {
        alert("Flash/Torch not supported on this device");
        return;
      }
      
      const newFlashState = !flashVal.val;
      const constraints = { advanced: [{ torch: newFlashState }] };
      await currentTrack.applyConstraints(constraints);
      flashVal.val = newFlashState;
      console.log("Flash toggled to:", newFlashState);
    } catch (err) {
      console.error("Error toggling flash:", err);
      alert("Error toggling flash: " + err.message);
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

  // Initialize camera list on component load
  enumerateCameras();

  return div({ style: "padding: 16px; background-color: #1a1a1a; border-radius: 8px; color: #fff;" },
    div({},
      h2("Camera Access and Photo Capture"),
      
      // Camera Selection
      div({ style: "margin-bottom: 12px;" },
        label({ style: "display: block; margin-bottom: 4px; font-weight: bold;" }, "Select Camera:"),
        select({
          style: "display: block; width: 100%; padding: 8px; margin-bottom: 8px;",
          value: selectedCameraVal.val,
          onchange: e => changeCamera(e.target.value)
        },
          () => availableCamerasVal.val.map(camera => 
            option({ value: camera.deviceId }, camera.label || `Camera ${camera.deviceId.slice(0, 8)}`)
          )
        ),
      ),
      
      // Video Element
      videoElem = video({ 
        playsinline: true, 
        autoplay: true, 
        style: "width: 100%; max-width: 350px; max-height: 270px; border-radius: 4px; background: #000; display: block; margin-bottom: 12px;" 
      }),
      hr(),
      
      // Control Buttons
      button({ onclick: startCamera, style: "padding: 8px 16px; margin-right: 8px; cursor: pointer;" }, "Start"),
      button({ 
        onclick: async () => { 
          photoScrVal.val = URL.createObjectURL(await capturePhoto(currentTrack)); 
        }, 
        style: "padding: 8px 16px; margin-right: 8px; cursor: pointer;" 
      }, "Take Photo"),
      button({ onclick: stopCamera, style: "padding: 8px 16px; margin-right: 8px; cursor: pointer;" }, "Stop"),
      
      hr(),
      
      // Zoom Control
      div({ style: "margin-bottom: 12px;" },
        label({ style: "display: block; margin-bottom: 4px; font-weight: bold;" }, 
          () => `Zoom: ${(zoomVal.val * 100).toFixed(0)}%`
        ),
        input({
          type: "range",
          min: "1",
          max: "5",
          step: "0.1",
          value: zoomVal,
          style: "width: 100%; cursor: pointer;",
          oninput: e => setZoom(parseFloat(e.target.value))
        }),
      ),
      
      // Flash Toggle
      button({
        onclick: toggleFlash,
        style: () => `padding: 8px 16px; margin-bottom: 12px; cursor: pointer; background-color: ${flashVal.val ? '#ff9800' : '#666'};`
      }, 
        () => flashVal.val ? "🔦 Flash ON" : "🔦 Flash OFF"
      ),
      
      hr(),
      
      // Canvas (hidden)
      canvasElem = canvas({ style: "display:none;" }),
      
      // Photo Display
      img({ src: () => photoScrVal.val, alt: "Captured photo will appear here", style: "max-width: 100%; border-radius: 4px; margin-top: 12px;" }),
    )
  )
}