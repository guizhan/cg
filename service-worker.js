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
    "revision": "912aad0b629a9cde33d53860332b81af"
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
    "url": "assets/js/12.4fb260f4.js",
    "revision": "975fb7d05964bb074f6c4f8eaa6d4d9a"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.68a1a284.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.fa33f442.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.85d667b0.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
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
    "url": "assets/js/app.8820c5f6.js",
    "revision": "76884aa68f1fdf7944909a3e3904ec7d"
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
    "revision": "6a571905cfe12afb4d74303f51a566aa"
  },
  {
    "url": "categories/java/index.html",
    "revision": "542cf6a0af0cb21540e314ec37b1ab14"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "44c76884a91482115cfdf9bcf9ecfa4b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c594537a66a85ee5e096b05d82a42d7f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "de8ec09f014bc47ce4bed7c72926ae62"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "15fa43444346d0cec602a6750a725e25"
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
    "revision": "6b8cc20c9d52b3c993688ae6160010c9"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8b87722bdef991b58fe102834386f5d9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "33192630f6f17fc9a5a35007025c711e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ebb82b54931a1dfe36c8eaed54cf6b1f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "07c7f73b2d352421db6bccdd8d4c8e7b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "df6f56160d96b45ba7f6a99d53fd3c48"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c1465ae98d40044813d5f9b538a50527"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ebfbd3772100330af4d01e82245b2a95"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "60dc76d9ed16b6b440cc8f96ab7f7599"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2242c671bf1d38dbf1501e610f580a37"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cd838d2b41eaaa8a0ee85f47efae6e27"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e98057579ce5dc9207f3704e0a414a5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d807638310c3e8eadd937bd5959b82f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "56ffbd996ded72c8b8203ef0361e24de"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "27f31ee3bc7671ee064d887cc7a9ea19"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "819bbab4078f162477c0b38aae8f5ac7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0de77e9f5cac0d113e34a65dfb269b6e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "dd57643e95f75b2e15f19db04e21bbd8"
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
