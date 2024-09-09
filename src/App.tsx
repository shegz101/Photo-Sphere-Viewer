import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import './App.css'

const App: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewerRef.current) {
      new Viewer({
          container: viewerRef.current,
          panorama: 'https://images.unsplash.com/photo-1557971370-e7298ee473fb',
          caption: 'Testing the Photo Sphere Viewer',
          // loadingImg: baseUrl + 'loader.gif',
          touchmoveTwoFingers: true,
          mousewheelCtrlKey: true,
      });
    }
  }, []);
  return <div ref={viewerRef} style={{ height: '100vh', width: '100%' }} />;
}

export default App
