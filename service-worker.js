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
    "revision": "31cd24d2abfc63a9290c4590cf7b6265"
  },
  {
    "url": "assets/css/0.styles.74701719.css",
    "revision": "94325a216bd069101bd1af410d6d3f99"
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
    "url": "assets/js/12.2ddbc40a.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
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
    "url": "assets/js/15.ee31de56.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.144ee536.js",
    "revision": "f2c886654ff1748e3c96cc93cf6ecfd9"
  },
  {
    "url": "assets/js/17.d03b3db2.js",
    "revision": "13a68ee4e2168c9ffccac54e4705a7c8"
  },
  {
    "url": "assets/js/18.403ab48a.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.7ea53f3e.js",
    "revision": "d44063490bb3fccadd4a3f0fcf3495ef"
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
    "revision": "2c5f1a5037d7089459a548a6bb5c3eab"
  },
  {
    "url": "categories/java/index.html",
    "revision": "23452ba536e7178f9ae00bc1a5d66e6a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6cb911b51dadabdb30fdd7142e85a902"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "78e06f5765de3e0be5e54c00226b5fed"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a4b23b5498fd907ffc7f44cb79af54d7"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3c15061bfb14f6094ab3504723af7b9a"
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
    "revision": "af2cf18b51456427ae5bf580eb948150"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "6d668824ac62242b32377998407a9d35"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f251622bb6a668832a625c562c10d005"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fe11932c8f8a3cc1d8516fb5ca4f82cf"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1530b747af8d22a2cdaaaa25dfa5cd14"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "15f7d449654ab784238c1ad6eed4b09f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4d3d8add80ae3bfc5c0957ff40a599ec"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d4a71e6563b920400a0324dca63b1788"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8a2720ae3d4f6f1362dae7f265dcf820"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e0317132f83f25cbeec3e8f0428f81f0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "76199fcd2319071f47b088050cb8e476"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6d8c8c955052ff267f0c9e4c562e9126"
  },
  {
    "url": "timeline/index.html",
    "revision": "00737fb15ed346f9371636e8e5030367"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dda88698d6894878afb29046a821db6e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3cf606c4e9c422ee8fa25e9cded78243"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "34d12f0f61937b409b236fa555095db5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fc4e7d4d139b07907897a747584d0668"
  },
  {
    "url": "生活分享/life.html",
    "revision": "42e58df44231455292106bac274fe63a"
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
