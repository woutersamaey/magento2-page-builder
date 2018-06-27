/*eslint-disable */
define(["jquery", "knockout", "mage/translate", "uiEvents", "Magento_PageBuilder/js/config", "Magento_PageBuilder/js/content-type/preview"], function (_jquery, _knockout, _translate, _uiEvents, _config, _preview) {
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Preview =
  /*#__PURE__*/
  function (_BasePreview) {
    _inheritsLoose(Preview, _BasePreview);

    /**
     * @inheritdoc
     */
    function Preview(parent, config, observableUpdater) {
      var _this;

      _this = _BasePreview.call(this, parent, config, observableUpdater) || this;
      _this.displayPreview = _knockout.observable(false);
      _this.placeholderText = void 0;
      _this.messages = {
        EMPTY: (0, _translate)("Empty Products"),
        LOADING: (0, _translate)("Loading..."),
        UNKNOWN_ERROR: (0, _translate)("An unknown error occurred. Please try again.")
      };
      _this.placeholderText = _knockout.observable(_this.messages.EMPTY);
      return _this;
    }
    /**
     * @inheritdoc
     */


    var _proto = Preview.prototype;

    _proto.bindEvents = function bindEvents() {
      var _this2 = this;

      _BasePreview.prototype.bindEvents.call(this); // When a products type is dropped for the first time open the edit panel


      _uiEvents.on("products:contentType:dropped:create", function (event, params) {
        if (event.id === _this2.parent.id) {
          setTimeout(function () {
            _this2.edit.open();
          }, 300);
        }
      });
    };
    /**
     * @inheritdoc
     */


    _proto.afterObservablesUpdated = function afterObservablesUpdated() {
      var _this3 = this;

      _BasePreview.prototype.afterObservablesUpdated.call(this);

      this.displayPreview(false);
      var data = this.parent.dataStore.get();

      if (typeof data.conditions_encoded !== "string" || data.conditions_encoded.length === 0) {
        this.placeholderText(this.messages.EMPTY);
        return;
      }

      var url = _config.getConfig("preview_url");

      var requestConfig = {
        method: "GET",
        data: {
          role: this.config.name,
          directive: this.data.main.html()
        }
      };
      this.placeholderText(this.messages.LOADING);

      _jquery.ajax(url, requestConfig).done(function (response) {
        var content = response.data !== undefined ? response.data.trim() : "";

        if (content.length === 0) {
          _this3.placeholderText(_this3.messages.EMPTY);

          return;
        }

        _this3.data.main.html(content);

        _this3.displayPreview(true);
      }).fail(function () {
        _this3.placeholderText(_this3.messages.UNKNOWN_ERROR);
      });
    };

    return Preview;
  }(_preview);

  return Preview;
});
//# sourceMappingURL=preview.js.map
