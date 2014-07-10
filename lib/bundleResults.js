var bundleToHtml = require('./bundleToHtml');

/**
 * add bundle defined in file.bundle to obj
 * @param {Object} obj
 * @param {Vinyl} file
 */
module.exports = function(obj, file) {
  if (file.bundle) {
    obj[file.bundle.name] = obj[file.bundle.name] || {};
    obj[file.bundle.name][file.bundle.type] =
      bundleToHtml[file.bundle.type](file.path.replace(file.base, ''));
  }
  return obj;
};