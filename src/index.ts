import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_apod extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_apod',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_apod is activated!');
  }
};

export default extension;
