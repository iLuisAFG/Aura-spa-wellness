import logoImg from '../assets/logo.jpg';
import client1Img from '../assets/clients/client-1.jpg';
import client2Img from '../assets/clients/client-2.jpg';

export { logoImg, client1Img, client2Img };

export function getAssetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
