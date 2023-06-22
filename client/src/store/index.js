import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  // logoDecal: './threejs.png',
  logoDecal: './demon.png',
  // fullDecal: './threejs.png',
  fullDecal: './demonBg.png',
});

export default state;