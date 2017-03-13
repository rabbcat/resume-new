;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M351.5501 365.3473c16.6874 0 27.8862-11.3453 27.8862-28.2458 0-16.9795-11.1989-28.1739-27.8862-28.1739-16.6804 0-33.5176 11.1944-33.5176 28.1739C318.0324 354.002 334.8697 365.3473 351.5501 365.3473zM507.4328 308.9265c-16.6874 0-33.4467 11.1944-33.4467 28.1739 0 16.9015 16.7593 28.2458 33.4467 28.2458 16.8233 0 27.9512-11.3453 27.9512-28.2458C535.384 320.122 524.256 308.9265 507.4328 308.9265zM702.3866 517.7789c16.7593 0 27.9502-11.1994 27.9502-22.5407 0-11.2694-11.1909-22.6147-27.9502-22.6147-10.977 0-22.034 11.3453-22.034 22.6147C680.3536 506.5795 691.4096 517.7789 702.3866 517.7789zM579.8796 517.7789c16.9012 0 27.8782-11.1994 27.8782-22.5407 0-11.2694-10.977-22.6147-27.8782-22.6147-11.05 0-22.2478 11.3453-22.2478 22.6147C557.6318 506.5795 568.8297 517.7789 579.8796 517.7789zM76.7541 483.6761c0 242.5146 196.5688 439.0743 439.0903 439.0743 242.5215 0 439.0903-196.5597 439.0903-439.0743S758.3659 44.6048 515.8444 44.6048C273.3229 44.6048 76.7541 241.1615 76.7541 483.6761zM627.2255 370.1031c-105.8206 0-189.3934 80.0567-189.3934 178.6299 0 16.4658 2.5654 32.2731 6.8826 47.3449-6.8826 0.5856-13.7642 0.8784-20.7828 0.8784-27.8153 0-50.205-5.7061-78.0133-11.3413l-77.8704 39.5902 22.2478-67.911c-55.7655-39.5152-89.1322-90.3767-89.1322-152.3597 0-107.4242 100.3321-192.0178 222.7681-192.0178 109.5512 0 205.4951 67.6152 224.7338 158.5055C641.6473 370.6177 634.4718 370.1031 627.2255 370.1031zM830.526 546.0957c0 50.8605-33.2958 95.94-78.0133 129.8909l16.7593 56.4957-61.1041-33.881c-22.3268 5.6352-44.6386 11.2694-66.8214 11.2694-105.9625 0-189.5363-73.3992-189.5363-163.776 0-90.3008 83.5738-163.8439 189.5363-163.8439C741.3857 382.2518 830.526 455.795 830.526 546.0957z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M681.8161 612.2455c33.9272 0 67.6229-0.3717 101.2951 0.2324 10.0792 0.1403 15.0456-3.0188 16.3011-13.0621 4.8302-38.1071 9.986-76.1682 14.8634-114.2528 0.3246-2.6931-0.6062-5.5255-1.1858-10.1939-44.0515 0-87.4988 0-130.4852 0 0-38.5024-2.2036-75.1698 0.7905-111.4194 1.9978-24.5699 23.8275-36.7841 57.2672-37.6433 26.1007-0.6963 52.2476-0.1393 79.6979-0.1393 0-41.6143 0-81.5329 0-124.6321-21.3647-1.579-43.1473-4.9234-64.8602-4.4124-32.9974 0.766-67.0638-0.3021-98.6952 7.4547-70.3836 17.2534-114.9942 77.9786-116.5957 151.8715-0.8591 38.4553-0.1618 76.9096-0.1618 117.5962-6.9898 0.4178-13.0744 1.067-19.158 1.0916-27.4012 0.1157-54.828 0.3942-82.2292-0.1178-10.752-0.2089-16.2785 2.6941-16.1628 14.4906 0.3482 36.1564 0.3246 72.3139 0.0225 108.4692-0.1157 11.4606 4.8312 14.9903 15.8843 14.804 33.1141-0.511 66.2292-0.1853 100.3663-0.1853 0 115.2266 0 228.6428 0 343.4527-158.0483 0-315.6787 0-474.6568 0 0-296.4992 0-593.0076 0-890.8052 296.4736 0 592.9492 0 890.8155 0 0 296.3343 0 592.8202 0 890.9425-4.6213 0.3717-9.6358 1.1151-14.6289 1.1602-81.0691 0.0481-162.1125-0.0901-243.159 0.2335-11.052 0.0471-17.3681-1.5299-17.321-14.8152 0.3482-107.2855 0.2079-214.569 0.2785-321.9016C680.0998 618.282 680.9805 616.0998 681.8161 612.2455z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-instagram" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 0 0 0 0 0Z"  ></path>' +
    '' +
    '<path d="M778.24 512c0 147.04-119.232 266.24-266.24 266.24-147.04 0-266.24-119.2-266.24-266.24 0-17.504 1.728-34.624 5.024-51.2l-179.104 0 0 353.888c0 75.968 61.536 137.632 137.632 137.632l605.376 0c75.968 0 137.632-61.6 137.632-137.632l0-353.888-179.04 0c3.232 16.576 4.96 33.696 4.96 51.2zM814.688 71.68l-605.376 0c-76.032 0-137.632 61.632-137.632 137.632l0 149.088 222.912 0c48.192-68.096 127.584-112.64 217.408-112.64s169.216 44.544 217.408 112.64l222.912 0 0-149.088c0-75.968-61.632-137.632-137.632-137.632zM882.016 241.664c0 13.568-11.072 24.576-24.576 24.576l-73.664 0c-13.504 0-24.576-11.072-24.576-24.576l0-73.728c0-13.568 11.104-24.576 24.576-24.576l73.664 0c13.568 0 24.576 11.072 24.576 24.576l0 73.728zM675.84 512c0-90.528-73.376-163.84-163.84-163.84s-163.84 73.312-163.84 163.84 73.376 163.84 163.84 163.84 163.84-73.312 163.84-163.84z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)