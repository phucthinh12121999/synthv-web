jQuery(document).ready(function ($) {
  $(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
      overflow: "visible",
    });
  });
});
parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    "js/common/main.js": [
      function (require, module, exports) {
        jQuery(function ($) {
          var ua = navigator.userAgent;
          function youtubeAPIInitJp() {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(e, i),
              (window.onYouTubeIframeAPIReady = function () {
                playerjp = new YT.Player("playerjp", {
                  height: "507",
                  width: "900",
                  videoId: window.YTid,
                  playerVars: {
                    autohide: 1,
                    controls: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    showinfo: 0,
                    rel: 0,
                    autoplay: 1,
                  },
                });
              });
          }
          var modal = {},
            $lay,
            $content,
            $close;
          (modal.inner = function () {
            if ($("#modal-overlay")[0]) return !1;
            $("body").append('<div id="modal-overlay"></div>'),
              ($lay = $("#modal-overlay")),
              ($close = $("#modal-content-close")),
              ($content = $("#modal-content")),
              $lay.fadeIn("slow"),
              youtubeAPIInitJp(),
              this.resize(),
              $content.fadeIn("fast"),
              $lay.unbind().click(function () {
                playerjp.pauseVideo(),
                  $content.add($lay).fadeOut("fast", function () {
                    $lay.remove();
                  });
              }),
              $close.unbind().click(function () {
                playerjp.pauseVideo(),
                  $content.add($lay).fadeOut("fast", function () {
                    $lay.remove();
                  });
              });
          }),
            (modal.resize = function () {
              var e = $(window).width(),
                i = $(window).height(),
                t = $("#modal-content").outerWidth(),
                o = $("#modal-content").outerHeight();
              $("#modal-content").css({
                left: (e - t) / 2 + "px",
                top: (i - o) / 2 + "px",
              });
            }),
            $(".syn-mv-play").click(function () {
              modal.inner(), playerjp.playVideo();
            }),
            $(window).resize(modal.resize),
            $("#video1,#video-btn1").click(function () {
              $("#video1")[0].paused
                ? ($("#video1")[0].play(), $("#video-btn1").fadeOut("fast"))
                : ($("#video1")[0].pause(), $("#video-btn1").fadeIn("fast"));
            }),
            $("#video2,#video-btn2").click(function () {
              $("#video2")[0].paused
                ? ($("#video2")[0].play(), $("#video-btn2").fadeOut("fast"))
                : ($("#video2")[0].pause(), $("#video-btn2").fadeIn("fast"));
            }),
            $("#video1sp,#video-btn1sp").click(function () {
              $("#video1sp")[0].paused
                ? ($("#video1sp")[0].play(), $("#video-btn1sp").fadeOut("fast"))
                : ($("#video1sp")[0].pause(),
                  $("#video-btn1sp").fadeIn("fast"));
            }),
            $("#video2sp,#video-btn2sp").click(function () {
              $("#video2sp")[0].paused
                ? ($("#video2sp")[0].play(), $("#video-btn2sp").fadeOut("fast"))
                : ($("#video2sp")[0].pause(),
                  $("#video-btn2sp").fadeIn("fast"));
            }),
            $(".slider").slick({
              dots: !0,
              arrows: !0,
              centerMode: !0,
              centerPadding: "10%",
              infinite: !0,
              slidesToShow: 2,
              slidesToScroll: 2,
              responsive: [
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 1, slidesToScroll: 1 },
                },
              ],
            }),
            ua.indexOf("iPhone") > 0 ||
            (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
              ? ($(".slider").on("beforeChange", function (e, i, t) {
                  $(".slick-center").css("opacity", "0.1");
                }),
                $(".slider").on("afterChange", function (e, i) {
                  $(".slick-center").css("opacity", "1");
                }),
                $(".slick-center").css("opacity", "1"),
                $(".slick-slide").not(".slick-center").css("opacity", "0.1"))
              : ($(".slider").slick("slickSetOption", "slidesToScroll", 2),
                $(".slider").on("beforeChange", function (e, i, t) {
                  $(".slick-center").css("opacity", "0.1"),
                    $(".slick-center").prev().css("opacity", "0.1");
                }),
                $(".slider").on("afterChange", function (e, i) {
                  $(".slick-center").css("opacity", "1"),
                    $(".slick-center").prev().css("opacity", "1");
                }),
                $(".slick-center").css("opacity", "1"),
                $(".slick-slide").not(".slick-center").css("opacity", "0.1"),
                $(".slick-center").prev().css("opacity", "1"));
        });
      },
      {},
    ],
    "js/script.js": [
      function (require, module, exports) {
        "use strict";
        require("./common/main.js");
      },
      {
        "./common/main.js": "js/common/main.js",
      },
    ],
  },
  {},
  ["js/script.js"],
  null
);
