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
    "revision": "d7e94a727aa7d39d803bcb2e95f46e65"
  },
  {
    "url": "assets/css/0.styles.c208b7c6.css",
    "revision": "fbe920b47830cc5c7042b570f9c059d8"
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
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
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
    "url": "assets/js/app.03b1f3a8.js",
    "revision": "7b505db702ecb1e38fa5ec1effa9c96b"
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
    "revision": "64e795bfe8a557758017d5d0f4e9c121"
  },
  {
    "url": "categories/java/index.html",
    "revision": "428b790b58981a0161629f5b7e0ff653"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9d7dcf3e9a9860fb352465734f6aa493"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "39519fe31002637fbf894e24900a9596"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "60ec359e341cc8ab64d57d3544760a56"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "930158b38a9b303e04d73b2fc8096a45"
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
    "revision": "279b9d4859893a746282d419b6d8f642"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "925f681711e4724f43fb992ac9660ea1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7bb723da1cb4188587fddb2ada0ba915"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c08f61beeeef6d768d84f8a0dbe8d98a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ee9c56f66d3738564417146c33348d25"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7c439cdc0f08f0f985c84c84354b36a1"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c34139e890f0c27569173bdc8f27cbfb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9969ffb5fc62ef9d29e054ef5246b6c4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c793eae674d16220b33a9a398bd642eb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9e9f329c7c6e1eb565ef430d0278b5a9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2b7b8d353a14dc97b1af17b70680e0ed"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7b9d672f7085cc353218942d9a08853b"
  },
  {
    "url": "timeline/index.html",
    "revision": "19249bfbfa9138d28ce43fd35ca70d0c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2dc57b8949a47bc5aaa59832e3f65af1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1acf2f8e9e82963133bcbad4903081f0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2b3d775bb1d82b76e1d8638efa5e510a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "af7cf008874a190426298ee139c07834"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fa2e2daaf7fab99f6c0f7bf9d26da8bf"
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
