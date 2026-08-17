export default function VideoBanner() {
  return (
    <div className="px-video-4-wrap fix px-bdr-style">
      <video data-speed="0.1" loop muted autoPlay playsInline>
        <source src="/videos/profile/banner-4-1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
