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
          // function scroll_fadein() {
          //   $(".effect-fade").each(function () {
          //     var e = $(this).offset().top,
          //       i = $(window).scrollTop(),
          //       t = $(window).height();
          //     ua.indexOf("iPhone") > 0 ||
          //     (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //       ? i > e - t && $(this).addClass("effect-scroll")
          //       : i > e - t + 300 && $(this).addClass("effect-scroll");
          //   });
          // }
          // $(".barba-container").animate({ opacity: "1" }, 700),
          //   $(".barba-container").css("visibility", "visible"),
          //   $(".header-tab-visible").click(function () {
          //     $(this).hasClass("active")
          //       ? ($(this).css("color", "#fff"),
          //         $(this).removeClass("active"),
          //         $(".header-list-child")
          //           .css("opacity", "0")
          //           .css("top", "150%"))
          //       : ($(this).css("color", "#3391FD"),
          //         $(this).addClass("active"),
          //         $(".header-list-child")
          //           .css("opacity", "1")
          //           .css("top", "100%"));
          //   }),
          //   $(".header-langsp").click(function () {
          //     $(this).hasClass("active")
          //       ? ($(this).css("color", "#fff"),
          //         $(this).removeClass("active"),
          //         $(".bogo-language-switcher")
          //           .css("opacity", "0")
          //           .css("top", "150%"))
          //       : ($(this).css("color", "#3391FD"),
          //         $(this).addClass("active"),
          //         $(".bogo-language-switcher")
          //           .css("opacity", "1")
          //           .css("top", "100%"));
          //   }),
          //   ua.indexOf("iPhone") > 0 ||
          //   (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //     ? $(".bogo-language-switcher").click(function () {
          //         $(".header-langsp").css("color", "#fff"),
          //           $(".header-langsp").removeClass("active"),
          //           $(this).css("opacity", "0").css("top", "150%");
          //       })
          //     : (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) &&
          //       $(".bogo-language-switcher").click(function () {
          //         $(".header-langsp").css("color", "#fff"),
          //           $(".header-langsp").removeClass("active"),
          //           $(this).css("opacity", "0").css("top", "150%");
          //       }),
          //   (ua.indexOf("iPhone") > 0 ||
          //     (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)) &&
          //     ($("#spnavi").click(function () {
          //       $(this).hasClass("active")
          //         ? ($(".header-menu")
          //             .css("opacity", "0")
          //             .css("visibility", "hidden"),
          //           $("#spnavi span:first").css(
          //             "transform",
          //             "translateY(0px) rotate(0deg)"
          //           ),
          //           $("#spnavi span:last").css(
          //             "transform",
          //             "translateY(-0px) rotate(0deg)"
          //           ),
          //           $(this).removeClass("active"))
          //         : ($(".header-menu")
          //             .css("opacity", "1")
          //             .css("visibility", "visible"),
          //           $("#spnavi span:first").css(
          //             "transform",
          //             "translateY(5px) rotate(45deg)"
          //           ),
          //           $("#spnavi span:last").css(
          //             "transform",
          //             "translateY(-4px) rotate(-45deg)"
          //           ),
          //           $(this).addClass("active"));
          //     }),
          //     $(".header-link,.header-link-child,.sp-header-download-link")
          //       .not(".header-link-news")
          //       .click(function () {
          //         $(".header-menu")
          //           .css("opacity", "0")
          //           .css("visibility", "hidden"),
          //           $("#spnavi span:first").css(
          //             "transform",
          //             "translateY(0px) rotate(0deg)"
          //           ),
          //           $("#spnavi span:last").css(
          //             "transform",
          //             "translateY(-0px) rotate(0deg)"
          //           ),
          //           $("#spnavi").removeClass("active");
          //       })),
          //   (ua.indexOf("iPhone") > 0 ||
          //     (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)) &&
          //     $(".header-link-news").click(function () {
          //       $(this).hasClass("active")
          //         ? ($(".header-list-news li").css("display", "none"),
          //           $(this).css("color", "#fff"),
          //           $(this).removeClass("active"))
          //         : ($(".header-list-news li").fadeIn(),
          //           $(this).css("color", "#3391fd"),
          //           $(this).addClass("active"));
          //     }),
          //   $(window).scroll(scroll_fadein),
          //   $(window).ready(scroll_fadein),
          //   scroll_fadein(),
          //   $("a[href^=#]").click(function () {
          //     var e = $(this).attr("href"),
          //       i = $("#" == e || "" == e ? "html" : e).offset().top + 0;
          //     return $("body,html").animate({ scrollTop: i }, 400, "swing"), !1;
          //   }),
          //   $("body").hasClass("home") &&
          //     (setTimeout(function () {
          //       var e = $(".mv-title1 span"),
          //         i = $(".mv-title2 span"),
          //         t = $(".mv-text span");
          //       e.each(function (e) {
          //         TweenMax.to($(this), 1.5, {
          //           delay: 0.05 * e,
          //           opacity: 1,
          //           left: 0,
          //           ease: "power2.out",
          //         });
          //       }),
          //         i.each(function (e) {
          //           TweenMax.to($(this), 1.5, {
          //             delay: 0.05 * e,
          //             opacity: 1,
          //             right: 0,
          //             ease: "power2.out",
          //           });
          //         }),
          //         t.each(function (e) {
          //           TweenMax.to($(this), 1.5, {
          //             delay: 0.15 * e,
          //             opacity: 1,
          //             bottom: 0,
          //             ease: "power2.out",
          //           });
          //         });
          //     }, 1e3),
          //     setTimeout(function () {
          //       $("#mv-video,.mv-mask").animate({ opacity: "1" }, 2e3);
          //     }, 2800),
          //     $(".header-nav").css("top", "-50px"),
          //     $(".header-nav").css("opacity", "0"),
          //     setTimeout(function () {
          //       $(".header-nav").animate(
          //         { top: "0", opacity: "1" },
          //         { duration: 500, easing: "easeOutCubic" }
          //       );
          //     }, 3300),
          //     $(".fixed-download").css("bottom", "0"),
          //     $(".fixed-download").css("opacity", "0"),
          //     setTimeout(function () {
          //       ua.indexOf("iPhone") > 0 ||
          //       (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //         ? $(".fixed-download").animate(
          //             { bottom: "10px", opacity: "1" },
          //             { duration: 500, easing: "easeOutCubic" }
          //           )
          //         : $(".fixed-download").animate(
          //             { bottom: "20px", opacity: "1" },
          //             { duration: 500, easing: "easeOutCubic" }
          //           );
          //     }, 3300),
          //     setTimeout(function () {
          //       $(".mv-scroll").animate(
          //         { opacity: "1" },
          //         { duration: 500, easing: "easeOutCubic" }
          //       );
          //     }, 3300));
          // var stalker = document.getElementById("stalker"),
          //   hovFlag = !1;
          // document.addEventListener("mousemove", function (e) {
          //   hovFlag ||
          //     (stalker.style.transform =
          //       "translate(" + e.clientX + "px, " + e.clientY + "px)");
          // });
          // for (
          //   var linkElem = document.querySelectorAll("a:not(.no_stick_),label"),
          //     _i = 0,
          //     playerjp;
          //   _i < linkElem.length;
          //   _i++
          // )
          //   linkElem[_i].addEventListener("mouseover", function (e) {
          //     (hovFlag = !1), stalker.classList.add("hov_");
          //   }),
          //     linkElem[_i].addEventListener("mouseout", function (e) {
          //       (hovFlag = !1), stalker.classList.remove("hov_");
          //     });
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
          // $(window).scroll(function () {
          //   (scrollHeight = $(document).height()),
          //     (scrollPosition = $(window).height() + $(window).scrollTop()),
          //     (footerHeight = $(".footer-wrapper").innerHeight()),
          //     (synHeight =
          //       $(".footer-wrapper").innerHeight() +
          //       $(".syn-studio-wrapper").innerHeight()),
          //     ua.indexOf("iPhone") > 0 ||
          //     (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //       ? (scrollHeight - scrollPosition - 60 <= footerHeight
          //           ? $(".fixed-download").css({
          //               position: "absolute",
          //               bottom: "auto",
          //               top: "-109px",
          //               right: "10px",
          //             })
          //           : $(".fixed-download").css({
          //               position: "fixed",
          //               bottom: "10px",
          //               top: "auto",
          //               right: "10px",
          //             }),
          //         scrollHeight - scrollPosition - 60 <= synHeight
          //           ? $("#fixed-download-syn").css({
          //               opacity: "0",
          //               visibility: "hidden",
          //             })
          //           : $("#fixed-download-syn").css({
          //               opacity: "1",
          //               visibility: "visible",
          //             }))
          //       : (scrollHeight - scrollPosition - 45 <= footerHeight
          //           ? $(".fixed-download").css({
          //               position: "absolute",
          //               bottom: "auto",
          //               top: "-41%",
          //               right: "20px",
          //             })
          //           : $(".fixed-download").css({
          //               position: "fixed",
          //               bottom: "20px",
          //               top: "auto",
          //               right: "20px",
          //             }),
          //         scrollHeight - scrollPosition - 45 <= synHeight
          //           ? $("#fixed-download-syn").css({
          //               opacity: "0",
          //               visibility: "hidden",
          //             })
          //           : $("#fixed-download-syn").css({
          //               opacity: "1",
          //               visibility: "visible",
          //             }));
          // }),
          //   $(".header-link").css("color", "#fff"),
          //   document.URL.match("news") &&
          //     $(".header-link-news").css("color", "#3391fd"),
          //   document.URL.match("synthesizer") &&
          //     $(".header-link-synthesizer").css("color", "#3391fd"),
          //   document.URL.match("about") &&
          //     $(".header-link-about").css("color", "#3391fd"),
          //   document.URL.match("contact") &&
          //     $(".header-link-contact").css("color", "#3391fd"),
          //   $(".single-content").children().addClass("effect-fade"),
          //   $(".related_post_title").addClass("effect-fade"),
          //   $(".related_post").children("li").addClass("effect-fade"),
          //   $(".bogo-language-name").each(function () {
          //     $(this).children("a").addClass("no-barba");
          //   }),
          //   $("#modal-open-jp").click(function () {
          //     window.YTid = "g4KtdJ55rl4";
          //   }),
          //   $("#modal-open-en").click(function () {
          //     window.YTid = "g4KtdJ55rl4";
          //   });
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
          // for (
          //   var links = document.querySelectorAll("a[href]"),
          //     cbk = function (e) {
          //       e.currentTarget.href === window.location.href &&
          //         (e.preventDefault(), e.stopPropagation());
          //     },
          //     i = 0;
          //   i < links.length;
          //   i++
          // )
          //   links[i].addEventListener("click", cbk);
          // Barba.Dispatcher.on(
          //   "newPageReady",
          //   function (
          //     currentStatus,
          //     oldStatus,
          //     barbaContainer,
          //     newPageRawHTML
          //   ) {
          //     if (1 !== Barba.HistoryManager.history.length) {
          //       var $newPageHead = $("<head />").html(
          //           $.parseHTML(
          //             newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
          //             document,
          //             !0
          //           )
          //         ),
          //         headTags = [
          //           "link[rel='canonical']",
          //           "link[rel='shortlink']",
          //           "link[rel='alternate']",
          //           "meta[name='description']",
          //           "meta[property^='og']",
          //           "meta[name^='twitter']",
          //           "meta[name='robots']",
          //         ].join(",");
          //       $("head").find(headTags).remove(),
          //         $newPageHead.find(headTags).appendTo("head"),
          //         "function" == typeof ga &&
          //           ga("send", "pageview", location.pathname);
          //       var temp = document.createElement("div");
          //       temp.innerHTML = newPageRawHTML;
          //       switch (
          //         (ua.indexOf("iPhone") > 0 ||
          //         (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //           ? $(".article-menus article:nth-child(n + 2)").each(
          //               function () {
          //                 $(this).addClass("effect-fade");
          //               }
          //             )
          //           : $(".article-menus article:nth-child(n + 4)").each(
          //               function () {
          //                 $(this).addClass("effect-fade");
          //               }
          //             ),
          //         scroll_fadein(),
          //         $(".header-link").css("color", "#fff"),
          //         document.URL.match("news") &&
          //           $(".header-link-news").css("color", "#3391fd"),
          //         document.URL.match("synthesizer") &&
          //           $(".header-link-synthesizer").css("color", "#3391fd"),
          //         document.URL.match("about") &&
          //           $(".header-link-about").css("color", "#3391fd"),
          //         document.URL.match("contact") &&
          //           $(".header-link-contact").css("color", "#3391fd"),
          //         $(".single-content").children().addClass("effect-fade"),
          //         $(".related_post_title").addClass("effect-fade"),
          //         $(".related_post").children("li").addClass("effect-fade"),
          //         $(".bogo-language-name").each(function () {
          //           $(this).children("a").addClass("no-barba");
          //         }),
          //         currentStatus.namespace)
          //       ) {
          //         case "top":
          //           setTimeout(function () {
          //             var e = $(".mv-title1 span"),
          //               i = $(".mv-title2 span"),
          //               t = $(".mv-text span");
          //             e.each(function (e) {
          //               TweenMax.to($(this), 1.5, {
          //                 delay: 0.05 * e,
          //                 opacity: 1,
          //                 left: 0,
          //                 ease: "power2.out",
          //               });
          //             }),
          //               i.each(function (e) {
          //                 TweenMax.to($(this), 1.5, {
          //                   delay: 0.05 * e,
          //                   opacity: 1,
          //                   right: 0,
          //                   ease: "power2.out",
          //                 });
          //               }),
          //               t.each(function (e) {
          //                 TweenMax.to($(this), 1.5, {
          //                   delay: 0.15 * e,
          //                   opacity: 1,
          //                   bottom: 0,
          //                   ease: "power2.out",
          //                 });
          //               });
          //           }, 1e3),
          //             setTimeout(function () {
          //               $("#mv-video,.mv-mask").animate({ opacity: "1" }, 2e3);
          //             }, 2800),
          //             $(".header-nav").css("top", "-50px"),
          //             $(".header-nav").css("opacity", "0"),
          //             setTimeout(function () {
          //               $(".header-nav").animate(
          //                 { top: "0", opacity: "1" },
          //                 { duration: 500, easing: "easeOutCubic" }
          //               );
          //             }, 3300),
          //             $(".fixed-download").css("bottom", "0"),
          //             $(".fixed-download").css("opacity", "0"),
          //             setTimeout(function () {
          //               ua.indexOf("iPhone") > 0 ||
          //               (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //                 ? $(".fixed-download").animate(
          //                     { bottom: "10px", opacity: "1" },
          //                     { duration: 500, easing: "easeOutCubic" }
          //                   )
          //                 : $(".fixed-download").animate(
          //                     { bottom: "20px", opacity: "1" },
          //                     { duration: 500, easing: "easeOutCubic" }
          //                   );
          //             }, 3300),
          //             setTimeout(function () {
          //               $(".mv-scroll").animate(
          //                 { opacity: "1" },
          //                 { duration: 500, easing: "easeOutCubic" }
          //               );
          //             }, 3300);
          //       }
          //       $("#modal-open-jp").click(function () {
          //         window.YTid = "g4KtdJ55rl4";
          //       }),
          //         $("#modal-open-en").click(function () {
          //           window.YTid = "g4KtdJ55rl4";
          //         });
          //       var modal = {},
          //         $lay,
          //         $content,
          //         $close;
          //       (modal.inner = function () {
          //         if ($("#modal-overlay")[0]) return !1;
          //         $("body").append('<div id="modal-overlay"></div>'),
          //           ($lay = $("#modal-overlay")),
          //           ($close = $("#modal-content-close")),
          //           ($content = $("#modal-content")),
          //           $lay.fadeIn("slow"),
          //           youtubeAPIInitJp(),
          //           this.resize(),
          //           $content.fadeIn("fast"),
          //           $lay.unbind().click(function () {
          //             playerjp.pauseVideo(),
          //               $content.add($lay).fadeOut("fast", function () {
          //                 $lay.remove();
          //               });
          //           }),
          //           $close.unbind().click(function () {
          //             playerjp.pauseVideo(),
          //               $content.add($lay).fadeOut("fast", function () {
          //                 $lay.remove();
          //               });
          //           });
          //       }),
          //         (modal.resize = function () {
          //           var e = $(window).width(),
          //             i = $(window).height(),
          //             t = $("#modal-content").outerWidth(),
          //             o = $("#modal-content").outerHeight();
          //           $("#modal-content").css({
          //             left: (e - t) / 2 + "px",
          //             top: (i - o) / 2 + "px",
          //           });
          //         }),
          //         $(".syn-mv-play").click(function () {
          //           modal.inner(), playerjp.playVideo();
          //         }),
          //         $(window).resize(modal.resize),
          //         $("#video1,#video-btn1").click(function () {
          //           $("#video1")[0].paused
          //             ? ($("#video1")[0].play(),
          //               $("#video-btn1").fadeOut("fast"))
          //             : ($("#video1")[0].pause(),
          //               $("#video-btn1").fadeIn("fast"));
          //         }),
          //         $("#video2,#video-btn2").click(function () {
          //           $("#video2")[0].paused
          //             ? ($("#video2")[0].play(),
          //               $("#video-btn2").fadeOut("fast"))
          //             : ($("#video2")[0].pause(),
          //               $("#video-btn2").fadeIn("fast"));
          //         }),
          //         $("#video1sp,#video-btn1sp").click(function () {
          //           $("#video1sp")[0].paused
          //             ? ($("#video1sp")[0].play(),
          //               $("#video-btn1sp").fadeOut("fast"))
          //             : ($("#video1sp")[0].pause(),
          //               $("#video-btn1sp").fadeIn("fast"));
          //         }),
          //         $("#video2sp,#video-btn2sp").click(function () {
          //           $("#video2sp")[0].paused
          //             ? ($("#video2sp")[0].play(),
          //               $("#video-btn2sp").fadeOut("fast"))
          //             : ($("#video2sp")[0].pause(),
          //               $("#video-btn2sp").fadeIn("fast"));
          //         }),
          //         $(".slider").slick({
          //           dots: !0,
          //           arrows: !0,
          //           centerMode: !0,
          //           centerPadding: "10%",
          //           infinite: !0,
          //           slidesToShow: 2,
          //           slidesToScroll: 2,
          //           responsive: [
          //             {
          //               breakpoint: 768,
          //               settings: { slidesToShow: 1, slidesToScroll: 1 },
          //             },
          //           ],
          //         }),
          //         ua.indexOf("iPhone") > 0 ||
          //         (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
          //           ? ($(".slider").on("beforeChange", function (e, i, t) {
          //               $(".slick-center").css("opacity", "0.1");
          //             }),
          //             $(".slider").on("afterChange", function (e, i) {
          //               $(".slick-center").css("opacity", "1");
          //             }),
          //             $(".slick-center").css("opacity", "1"),
          //             $(".slick-slide")
          //               .not(".slick-center")
          //               .css("opacity", "0.1"))
          //           : ($(".slider").slick(
          //               "slickSetOption",
          //               "slidesToScroll",
          //               2
          //             ),
          //             $(".slider").on("beforeChange", function (e, i, t) {
          //               $(".slick-center").css("opacity", "0.1"),
          //                 $(".slick-center").prev().css("opacity", "0.1");
          //             }),
          //             $(".slider").on("afterChange", function (e, i) {
          //               $(".slick-center").css("opacity", "1"),
          //                 $(".slick-center").prev().css("opacity", "1");
          //             }),
          //             $(".slick-center").css("opacity", "1"),
          //             $(".slick-slide")
          //               .not(".slick-center")
          //               .css("opacity", "0.1"),
          //             $(".slick-center").prev().css("opacity", "1"));
          //     }
          //     function youtubeAPIInitJp() {
          //       var e = document.createElement("script");
          //       e.src = "https://www.youtube.com/iframe_api";
          //       var i = document.getElementsByTagName("script")[0];
          //       i.parentNode.insertBefore(e, i),
          //         (window.onYouTubeIframeAPIReady = function () {
          //           playerjp = new YT.Player("playerjp", {
          //             height: "507",
          //             width: "900",
          //             videoId: window.YTid,
          //             playerVars: {
          //               autohide: 1,
          //               controls: 1,
          //               modestbranding: 1,
          //               iv_load_policy: 3,
          //               showinfo: 0,
          //               rel: 0,
          //               autoplay: 1,
          //             },
          //           });
          //         });
          //     }
          //   }
          // );
          // var fadeTransition = Barba.BaseTransition.extend({
          //   start: function () {
          //     Promise.all([this.newContainerLoading, this.fadeOut()]).then(
          //       this.fadeIn.bind(this)
          //     );
          //   },
          //   fadeOut: function () {
          //     return $(this.oldContainer)
          //       .animate({ opacity: 0 }, { duration: 100 })
          //       .promise();
          //   },
          //   fadeIn: function () {
          //     $(document).scrollTop(0);
          //     var e = this,
          //       i = $(this.newContainer);
          //     $(this.oldContainer).hide(),
          //       i.css({ visibility: "visible", opacity: 0 }),
          //       i.animate({ opacity: 1 }, 700, function () {
          //         e.done();
          //       });
          //   },
          // });
          // (Barba.Pjax.getTransition = function () {
          //   return fadeTransition;
          // }),
          //   $().ready(function () {
          //     Barba.Pjax.start(), Barba.Prefetch.init();
          //   });
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
