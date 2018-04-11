const fs = require('fs');
const pngCrop = require('png-crop');
const ScreenshotService = {
  before() {
    browser.addCommand('getElementRect', getElementRect);
    browser.addCommand('takeElementScreenshot', takeElementScreenshot);
    browser.addCommand('saveElementScreenshot', saveElementScreenshot);
  },
  // eslint-disable-next-line no-empty-function
  onPrepare() {},

  // eslint-disable-next-line no-empty-function
  onComplete() {}
};

function saveElementScreenshot(elementSelector, filename) {
  const imageBuffer = this.takeElementScreenshot(elementSelector);
  return new Promise(resolve => {
    if (!imageBuffer) {
      return resolve(null);
    }
    fs.writeFile(filename, imageBuffer, err =>
      resolve(err ? null : imageBuffer)
    );
  });
}

/**
 * @param {String} elementSelector
 */
function takeElementScreenshot(elementSelector) {
  if (typeof elementSelector !== 'string') {
    return Promise.resolve(null);
  }
  return Promise.all([
    this.getElementRect(elementSelector),
    this.saveScreenshot()
  ]).then(cropScreenshot);
}

/**
 * @param {String} elementSelector
 * @returns {Promise}
 */
function getElementRect(elementSelector) {
  return this.execute(getElementBoundingRect, elementSelector).value;
}

/**
 * @param {Object} rect
 * @param {String} screenshot
 * @returns {Promise}
 */
function cropScreenshot([rect, screenshot]) {
  if (!rect || !screenshot) {
    return Promise.resolve(null);
  }
  const cropConfig = {
    left: Math.round(rect.left),
    top: Math.round(rect.top),
    width: Math.round(rect.width),
    height: Math.round(rect.height)
  };
  return new Promise(resolve => {
    pngCrop.cropToStream(screenshot, cropConfig, (err, outputStream) => {
      if (err) {
        return resolve(null);
      }
      let buffers = [];
      outputStream
        .on('data', chunk => {
          buffers.push(chunk);
        })
        .on('end', () => resolve(Buffer.concat(buffers)));
    });
  });
}

/**
 * Gets the position and size of an element.
 *
 * This function is run in the browser so its scope must be contained.
 *
 * @param {String} elementSelector
 * @returns {Object|undefined}
 */
function getElementBoundingRect(elementSelector) {
  /**
   * @param {Window} win
   * @param {Object} [dims]
   * @returns {Object}
   */
  function computeFrameOffset(win, dims) {
    // initialize our result variable
    dims = dims || {
      left: win.pageXOffset,
      top: win.pageYOffset
    };

    // add the offset & recurse up the frame chain
    const frame = win.frameElement;
    if (frame) {
      const rect = frame.getBoundingClientRect();
      dims.left += rect.left + frame.contentWindow.pageXOffset;
      dims.top += rect.top + frame.contentWindow.pageYOffset;

      if (win !== window.top) {
        computeFrameOffset(win.parent, dims);
      }
    }

    return dims;
  }

  /**
   * @param {HTMLElement} element
   * @param {Object} frameOffset
   * @returns {Object}
   */
  function computeElementRect(element, frameOffset) {
    const rect = element.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio || 1;
    return {
      left: (rect.left + frameOffset.left) * pixelRatio,
      right: (rect.right + frameOffset.left) * pixelRatio,
      top: (rect.top + frameOffset.top) * pixelRatio - (window.pageYOffset || document.documentElement.scrollTop),
      bottom: (rect.bottom + frameOffset.top) * pixelRatio,
      width: (rect.width) * pixelRatio,
      height: (rect.height) * pixelRatio
    };
  }

  const element = document.querySelectorAll(elementSelector)[0];
  if (element) {
    const frameOffset = computeFrameOffset(window);
    const elementRect = computeElementRect(element, frameOffset);

    return elementRect;
  }
}

module.exports = ScreenshotService;
