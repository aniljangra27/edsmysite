import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  setgScript();

  const captchadiv = document.createElement('div');
  captchadiv.setAttribute('class','g-recaptcha');
  captchadiv.setAttribute('data-sitekey','6LfUtEwqAAAAADL97Xm09QLTRX5G8rpQVkNR5onG');
  captchadiv.setAttribute('data-size','normal');
  captchadiv.setAttribute('data-theme','light');
  block.appendChild(captchadiv);
}


async function getConfigs(key) {
//   const value=await getConfigValue(key);
var value = '6LfUtEwqAAAAAJtrzPOF7VvijCLkUkbk2Z3kI8FL'; //secret-key
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