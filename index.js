/**
 * @module debug
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict'

module.exports = {

  log: function() {
    console.log.apply(console, arguments)
  },

  warn: function() {
    console.warn.apply(console, arguments)
  },

  error: function() {
    console.error.apply(console, arguments)
  },

  info: function() {
    console.info.apply(console, arguments)
  },

  success: function() {
    console.info.apply(console, arguments)
  }

}
