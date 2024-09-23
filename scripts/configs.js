/**
 * This function calculates the environment in which the site is running based on the URL.
 * It defaults to 'prod'. In non 'prod' environments, the value can be overwritten using
 * the 'environment' key in sessionStorage.
 *
 * @returns {string} - environment identifier (dev, stage or prod'.
 */
export const calcEnvironment = () => {
    const { href } = window.location;
    let environment = 'prod';
    if (href.includes('.aem.page')) {
      environment = 'stage';
    }
    if (href.includes('localhost')) {
      environment = 'dev';
    }
  
    const environmentFromConfig = window.sessionStorage.getItem('environment');
    if (environmentFromConfig && environment !== 'prod') {
      return environmentFromConfig;
    }
  
    return environment;
  };
  
  function buildConfigURL(environment) {
    const env = environment || calcEnvironment();
    const configURL = new URL(`${window.location.origin}/configs.json`);
    configURL.searchParams.set('sheet', env);
    return configURL;
  }
  
  const getConfigForEnvironment = async (environment) => {
    const env = environment || calcEnvironment();
    let configJSON = window.sessionStorage.getItem(`config:${env}`);
    if (!configJSON) {
      configJSON = await fetch(buildConfigURL(env)).then((res) => res.text());
      window.sessionStorage.setItem(`config:${env}`, configJSON);
    }
    return configJSON;
  };
  
  /**
   * This function retrieves a configuration value for a given environment.
   *
   * @param {string} configParam - The configuration parameter to retrieve.
   * @param {string} [environment] - Optional, overwrite the current environment.
   * @returns {Promise<string|undefined>} - The value of the configuration parameter, or undefined.
   */
  export const getConfigValue = async (configParam, environment) => {
    const env = environment || calcEnvironment();
    const configJSON = await getConfigForEnvironment(env);
    const configElements = JSON.parse(configJSON).data;
    return configElements.find((c) => c.key === configParam)?.value;
  };