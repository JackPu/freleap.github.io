var canvasHelper = {
  _getImageType: function _getImageType(str) {
    var mimeType = 'image/jpeg';
    var outputType = str.match(/(image\/[\w]+)\.*/)[0];
    if (typeof outputType !== 'undefined') {
      mimeType = outputType;
    }
    return mimeType;
  },
  compress: function compress(src, quality, callback) {
    var reader = new FileReader();
    var self = this;
    reader.onload = function (event) {
      var image = new Image();
      image.src = event.target.result;
      image.onload = function () {
        var mimeType = self._getImageType(src.type);
        var cvs = self._getCanvas(image.naturalWidth, image.naturalHeight);
        var ctx = cvs.getContext("2d").drawImage(image, 0, 0);
        var newImageData = cvs.toDataURL(mimeType, quality / 100);
        callback(newImageData);
      };
    };
    reader.readAsDataURL(src);
  },

  /**
  * crop image via canvas and generate data
  **/
  crop: function crop(image, options, callback) {
    var checkNumber = function checkNumber(num) {
      return typeof num === 'number';
    };
    // check crop options
    if (checkNumber(options.toCropImgX) && checkNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
      var w = options.toCropImgW;
      var h = options.toCropImgH;
      if (options.maxWidth && options.maxWidth < w) {
        w = options.maxWidth;
        h = options.toCropImgH * w / options.toCropImgW;
      }
      if (options.maxHeight && options.maxHeight < h) {
        h = options.maxHeight;
      }
      var cvs = this._getCanvas(w, h);
      var ctx = cvs.getContext('2d').drawImage(image, options.toCropImgX, options.toCropImgY, options.toCropImgW, options.toCropImgH, 0, 0, w, h);
      var mimeType = this._getImageType(image.src);
      var data = cvs.toDataURL(mimeType, options.compress / 100);
      callback(data);
    }
  },
  resize: function resize(image, options, callback) {
    var checkNumber = function checkNumber(num) {
      return typeof num === 'number';
    };
    if (checkNumber(options.toCropImgX) && checkNumber(options.toCropImgY) && options.toCropImgW > 0 && options.toCropImgH > 0) {
      var w = options.toCropImgW * options.imgChangeRatio;
      var h = options.toCropImgH * options.imgChangeRatio;
      var cvs = this._getCanvas(w, h);
      var ctx = cvs.getContext('2d').drawImage(image, 0, 0, options.toCropImgW, options.toCropImgH, 0, 0, w, h);
      var mimeType = this._getImageType(image.src);
      var data = cvs.toDataURL(mimeType, options.compress / 100);
      callback(data);
    }
  },
  rotate: function rotate(src, degrees, callback) {
    var _this = this;

    this._loadImage(src, function (image) {
      var w = image.naturalWidth;
      var h = image.naturalHeight;
      var canvasWidth = Math.max(w, h);
      var cvs = _this._getCanvas(w, h);
      var ctx = cvs.getContext('2d');
      ctx.save();
      // ctx.translate(canvasWidth / 2, canvasWidth / 2);
      ctx.rotate(degrees * (Math.PI / 180));
      var x = 0;
      degrees %= 360;
      if (degrees === 0) {
        return callback(src, w, h);
      }
      var y = 0;
      if (degrees % 180 !== 0) {

        if (degrees === -90 || degrees === 270) {
          x = -h;
        } else {
          y = -w;
        }
        var c = w;
        w = h;
        h = c;
      } else {
        x = -w;
        y = -h;
      }
      console.log(x, ' ', y);
      ctx.drawImage(image, x, y);
      ctx.restore();
      var mimeType = _this._getImageType(image.src);
      var data = cvs.toDataURL(mimeType, 1);
      callback(data, w, h);
      cvs = null;
      ctx = null;
    });
  },
  _loadImage: function _loadImage(data, callback) {
    var image = new Image();
    image.src = data;
    image.onload = function () {
      callback(image);
    };
    image.onerror = function () {
      console.log('Error: image error!');
    };
  },
  _getCanvas: function _getCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
};

document.addEventListener('readystatechange', function() {
  var state = document.readyState;
  if (state === 'complete') {
    var plusBtn = document.querySelector('.js-plus');
    var src = './zxc.jpeg';
    plusBtn.addEventListener('click', () => {
      canvasHelper.rotate(src, 90, (data, w, h) => {
            var targetImage = document.querySelector('.js-target');
            targetImage.src = data;

          });
    })
  }
})

