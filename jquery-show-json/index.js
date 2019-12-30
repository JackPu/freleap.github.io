// 展示 JSON 数据 require('jquery')

var JSON_STR = '{"status": "OK", "output": {"pools": [{"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "data", "id": 0}, {"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "metadata", "id": 1}, {"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "rbd", "id": 2}], "stats": {"total_used": 63330648, "total_space": 125604864, "total_avail": 62274216}}}';
var JSON_ERROR = '{"status""OK""output", {"pools": [{"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "data", "id": 0}, {"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "metadata", "id": 1}, {"stats": {"bytes_used": 0, "objects": 0, "kb_used": 0}, "name": "rbd", "id": 2}], "stats": {"total_used": 63330648, "total_space": 125604864, "total_avail": 62274216}}}';

console.log(JSON.parse(JSON_STR));

/**
 * consctuctor args
 * @el Element 
 * @data json string
*/
function ShowJSONData(el, data) {
  this.$el = $(el);
  this.json = data;
  this.parse();
  this.bindToggleEvnts();
}

ShowJSONData.prototype.parse = function () {
  try {
    var obj = JSON.parse(this.json);
    this.data = obj;
    this.render();
  } catch (err) {
    this.printErr(err)
  }
}


ShowJSONData.prototype.render = function () {
  this._html = '';
  var data = this.data;
  var self = this;
  this._html = this._renderObj(data);
  this._showHtml(this._html);
};

ShowJSONData.prototype._renderItem = function (key, value) {
  // object
  var html = '';
  if (typeof value === 'object' && value) {
    html = this._renderObj(value, key);
  } else {
    html = '<div class="ml15"> <code class="name">' + key + '</code>: ';
    html +='</code><span class="ml15"></span><code class="value ' + typeof(value) + '">' + value + '</code></div>';
    this._html += html;
  }
  return html;
};

ShowJSONData.prototype._renderObj = function (data, key) {
  var html = '';
  var self = this;
  Object.keys(data).forEach(function(key) {
    html += self._renderItem(key, data[key]);
  });
  html = this._injectBrackets(html, key);
  return html;
};

ShowJSONData.prototype._injectBrackets = function (html, key) {
  var newHtml = '<div class="obj ml15">';
  if (key) {
    newHtml += '<code class="name">' + key + ':</code>';
  }
  newHtml += '<code class="brackets ml15">{</code> <a href="#" class="toggle substraction"> - </a>';
  newHtml += html;
  newHtml += '<span class="hide-text">...</span><code class="brackets">}</code></div>';
  return newHtml;
}

ShowJSONData.prototype.printErr = function (err) {
  console.error(err);
  this._showHtml('<p class="error"> JSON Parse Error:' + err.message + '</p>');
}

ShowJSONData.prototype.bindToggleEvnts = function() {
  this.$el.on('click', '.toggle', function(e) {
    e.preventDefault();
    if ($(this).hasClass('substraction')) {
      $(this).removeClass('substraction');
      $(this).text($(this).parent().children('div').length);
      $(this).parent().find('div').hide();
      $(this).parent().find('.hide-text').show();
    } else {
      $(this).addClass('substraction');
      $(this).text('-');
      $(this).parent().find('div').show();
      $(this).parent().find('.hide-text').hide();
    }
  })
}

ShowJSONData.prototype._showHtml = function (str) {
  this.$el.html(str);
}

ShowJSONData.prototype.setJSON = function(str) {
  this.json = str;
  this.parse();
}

window.ShowJSONData = ShowJSONData;


$(document).ready(function () {
  console.log('page ready~')
  // var showJSONData = new ShowJSONData('.show-json-wrap', JSON_ERROR);
  var showJSONData = new ShowJSONData('.show-json-wrap', JSON_STR);

  $('.js-show').click(function () {
    var value = $('textarea').val().trim();
    if (!value) {
      alert('不能为空！')
    }
    showJSONData.setJSON(value);
  })
});

