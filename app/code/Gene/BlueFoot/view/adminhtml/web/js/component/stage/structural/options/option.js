define([], function () {
  /**
   * Option Class
   *
   * @author Dave Macaulay <dmacaulay@magento.com>
   */
  var Option =
  /*#__PURE__*/
  function () {
    /**
     * Option constructor
     *
     * @param parent
     * @param code
     * @param icon
     * @param title
     * @param action
     * @param classes
     * @param sort
     * @param template
     */
    function Option(parent, code, icon, title, action, classes, sort, template) {
      this.parent = void 0;
      this.code = void 0;
      this.icon = void 0;
      this.title = void 0;
      this.action = false;
      this.classes = void 0;
      this.sort = void 0;
      this.template = null;
      this.parent = parent;
      this.code = code;
      this.icon = icon;
      this.title = title;
      this.action = action;
      this.classes = classes.join(' ');
      this.sort = sort;
      this.template = template;
    }
    /**
     * Return template for option
     *
     * @deprecated
     * @returns {string}
     */


    var _proto = Option.prototype;

    _proto.getTemplate = function getTemplate() {
      return this.template;
    };

    return Option;
  }();

  return {
    Option: Option
  };
});
//# sourceMappingURL=option.js.map
