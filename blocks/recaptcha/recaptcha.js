import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  setgScript();
  const site_key=await getConfigs('site_key')
  const data_size=await getConfigs('data-size')
  const data_theme=await getConfigs('data-theme')
  const captchadiv = document.createElement('div');
  captchadiv.setAttribute('class','g-recaptcha');
  captchadiv.setAttribute('data-sitekey',site_key);
  captchadiv.setAttribute('data-size',data_size);
  captchadiv.setAttribute('data-theme',data_theme);
  block.appendChild(captchadiv);
}


async function getConfigs(key) {
  const value=await getConfigValue(key);
  console.log("---Key--->",key," ---Value---> ",value);
  return value;
}

async function setgScript(){
  const gscript = document.createElement('script');
  gscript.setAttribute('src','https://www.google.com/recaptcha/api.js');
  gscript.setAttribute('async','');
  gscript.setAttribute('defer','');
  document.head.appendChild(gscript);
}