import {Video, makeScene2D} from '@motion-canvas/2d';
import {createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create references for each video
  const video1 = createRef<Video>();
  const video2 = createRef<Video>();
  const video3 = createRef<Video>();

  // Video 1: Brian.mp4
  view.add(
    <Video
      ref={video1}
      src="https://pub-bc00aeb1aeab4b7480c2d94365bb62a9.r2.dev/Brian.mp4"
      play={true}
    />
  );

  // Wait for the video duration (check video properties to get exact duration)
  // You can see the duration in the timeline or video properties
  yield* waitFor(15); // Adjust this to match Brian.mp4 actual duration

  // Remove first video and add second video
  video1().remove();
  view.add(
    <Video
      ref={video2}
      src="https://pub-bc00aeb1aeab4b7480c2d94365bb62a9.r2.dev/Vaibhav.mp4"
      play={true}
    />
  );

  // Wait for the video duration
  yield* waitFor(15); // Adjust this to match Vaibhav.mp4 actual duration

  // Remove second video and add third video
  video2().remove();
  view.add(
    <Video
      ref={video3}
      src="https://pub-bc00aeb1aeab4b7480c2d94365bb62a9.r2.dev/bles%20%28720p%29%281%29.mp4"
      play={true}
    />
  );

  // Wait for the video duration
  yield* waitFor(15); // Adjust this to match bles video actual duration
});
