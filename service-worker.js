/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a3791385fd9dff3c4cccd25eb3ed617"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7cc586ae.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.0bf718b9.js",
    "revision": "304694a6570ded546a43d37e2111677e"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.97c6cc88.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.737ee6f1.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.00a3f6a4.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.d03b3db2.js",
    "revision": "13a68ee4e2168c9ffccac54e4705a7c8"
  },
  {
    "url": "assets/js/18.6e360152.js",
    "revision": "7ab1ea39429d17256addd80ff592867b"
  },
  {
    "url": "assets/js/4.108a7e30.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.dd47fe1a.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.298f61e3.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.2bffdee6.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.970031bf.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.e44d5dc9.js",
    "revision": "53fa38ac8580d3110492f35ea844f725"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "155e744e45c3354f9790ef4541c9a67f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9de0051a3af53f219b8920ed35bac735"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b47b08564a264aaa7be684b1e7ade722"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "15493e74a2523a8e7b6d156e525588f0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e8059934f2cdc2274be48ee291107829"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "19164ec8944b7be4cd58d77957a13e6e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5ed6ff266fa30ad634131bfc3cd5cd99"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "1505c9a6a60c594ef0fc6abc4d288091"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b40aa65c525881485ae02af98357327f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a5dbb3a883c05c7a821abbff63475b61"
  },
  {
    "url": "tags/js/index.html",
    "revision": "91588158b984cc729b15731dfb805448"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "968419685653a916264a871180ef57d0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ceb085ac8095c23e8378bc0a11a03e64"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e335764f24610e32f7091dcbbcc95817"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "42f1d0fc1aca16ff69c4477a2e5ac792"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "1423db057e795a643b3a49134f12578e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7938f2ccf1d3ded9625ee60841940c14"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "40c5510ad1bea963045bd71ab80beabd"
  },
  {
    "url": "timeline/index.html",
    "revision": "392d221de2833cd96c576a3e474ce892"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a98067df74df130e4c07a9644eb94c03"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f541a2d5fc8a6ca729bf7f1b42a77736"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "88364e9fb34e37f428389379b3ef5de6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "676b4261d2ab9ee36b234544b7af0071"
  },
  {
    "url": "生活分享/life.html",
    "revision": "abcf0be4c006326a33fd625b66516f3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
