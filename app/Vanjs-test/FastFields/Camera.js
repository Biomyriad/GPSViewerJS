const {h2, video, canvas, img, a, div, button, input,p,hr,span,select,option,article,summary} = van.tags;


  //https://shamsfiroz.medium.com/capturing-photos-with-javascriptusing-accessing-the-camera-8aefb5e6fa5f
export default function Camera() {
  const photoScrVal = van.state("")


  async function startCamera() {
    const video = document.getElementById('video');
    console.log("Starting camera...");
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'environment' 
            } 
        });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error accessing the camera", err);
        alert("Error accessing the camera: " + err.message);
    }
  }

  async function stopCamera() {
    console.log("Stopping camera...");
    const video = document.getElementById('video');
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }

  async function capturePhoto() {
    console.log("Capturing photo...");

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    photoScrVal.val = imageDataUrl;

    console.log("Photo captured:", canvas.width, canvas.height, imageDataUrl );
    return imageDataUrl;
  }

  return div({},

    // <h1>Camera Access and Photo Capture</h1>
    // <video id="video" autoplay playsinline></video>
    // <br>
    // <button id="captureButton">Take Photo</button>
    // <canvas id="canvas" style="display:none;"></canvas>
    // <img id="photo" alt="Captured photo will appear here"></img>
    div({},
      h2("Camera Access and Photo Capture"),
      video({ id: "video", playsinline: true, autoplay: true, style: "width: 100%; border-radius: 4px;" }),
      hr(),
      button({ id: "captureButton", onclick: capturePhoto}, "Take Photo"),
      button({ id: "startButton", onclick: startCamera, style: "margin-left: 8px;" }, "Start Camera"),
      canvas({ id: "canvas", type: "hidden", style: "display:none;" }),
      hr(),
      img({ id: "photo", src: photoScrVal.val, alt: "Captured photo will appear here" }),
    )
    
  )
}

// const {h2, video, canvas, img, a, div, button, input,p,hr,span,select,option,article,summary} = van.tags;


//   //https://shamsfiroz.medium.com/capturing-photos-with-javascriptusing-accessing-the-camera-8aefb5e6fa5f
// export default function Camera() {
//   const photoScrVal = van.state("")
  
//   // Create element references
//   let videoElem, canvasElem;

//   async function startCamera() {
//     console.log("Starting camera...");
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({ 
//             video: { 
//                 facingMode: 'environment' 
//             } 
//         });
//         videoElem.srcObject = stream;
//         await videoElem.play();
//     } catch (err) {
//         console.error("Error accessing the camera", err);
//         alert("Error accessing the camera: " + err.message);
//     }
//   }

//   async function stopCamera() {
//     console.log("Stopping camera...");
//     const stream = videoElem.srcObject;
//     if (stream) {
//       const tracks = stream.getTracks();
//       tracks.forEach(track => track.stop());
//       videoElem.srcObject = null;
//     }
//   }

//   async function capturePhoto() {
//     console.log("Capturing photo...");

//     if (!videoElem.videoWidth || !videoElem.videoHeight) {
//       alert("Camera is not ready yet. Please start the camera first.");
//       return;
//     }

//     canvasElem.width = videoElem.videoWidth;
//     canvasElem.height = videoElem.videoHeight;
//     canvasElem.getContext('2d').drawImage(videoElem, 0, 0, canvasElem.width, canvasElem.height);
//     const imageDataUrl = canvasElem.toDataURL('image/jpeg');
//     photoScrVal.val = imageDataUrl;

//     console.log("Photo captured:", canvasElem.width, canvasElem.height, imageDataUrl.substring(0, 50) + "..." );
//     return imageDataUrl;
//   }

//   return div({},
//     div({},
//       h2("Camera Access and Photo Capture"),
//       videoElem = video({ 
//         playsinline: true, 
//         autoplay: true, 
//         style: "width: 100%; max-width: 640px; border-radius: 4px; background: #000;" 
//       }),
//       hr(),
//       button({ onclick: startCamera }, "Start Camera"),
//       button({ onclick: capturePhoto, style: "margin-left: 8px;" }, "Take Photo"),
//       button({ onclick: stopCamera, style: "margin-left: 8px;" }, "Stop Camera"),
//       canvasElem = canvas({ style: "display:none;" }),
//       hr(),
//       img({ src: () => photoScrVal.val, alt: "Captured photo will appear here", style: "max-width: 100%;" }),
//     )
    
//   )
// }


