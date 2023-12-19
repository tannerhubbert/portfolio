import React from 'react';

const Playlist = () => {
  return (
    <div className="container pb-5">
      <h1 className="mt-5 mb-5 text-center">
        My top songs of 2023 (according to spotify)
      </h1>
      <div>
        <iframe
          src="https://open.spotify.com/embed/playlist/2P6iWlv2MqdEtJ6GErrnXB?utm_source=generator"
          width="100%"
          height={700}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Playlist;
