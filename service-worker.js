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
    "revision": "6a28a4d63f96c1e13590fbdb7b6974db"
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
    "url": "assets/js/12.cb2ada81.js",
    "revision": "04988a0c32d9a4cccd98c982408591dd"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.872488a3.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.737ee6f1.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
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
    "url": "assets/js/app.e013c211.js",
    "revision": "82e590a51ad80f2a1ea614404881f0ab"
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
    "revision": "4c2a453f47cbc6c1e9f04fa874832483"
  },
  {
    "url": "categories/java/index.html",
    "revision": "abec7cfe379ea21d5b65881c82848712"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "60cf30f5f237a02d0ec038ca49a630a2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bfe34b6d59e38048f1750174deb60c25"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "65308309800f04b08eeb71e330d54fcf"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "c1db07ee82d909abbda99f96e2d30bd2"
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
    "revision": "0b30bb089eb29783961a323d6331590f"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "bdd0267fc389839b1799d04f94452799"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c97bb084ded0d357f9f418fc42feb419"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "de510399dcee9611a29f93e23e2db985"
  },
  {
    "url": "tags/js/index.html",
    "revision": "51fe544d17485335570d70cdc62a089a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "88795056d6bae1e58ed7b337e5e2c203"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c1dfeb11b5a2a3287aabcb75262bc42e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ac6bb192392743363b93c0a8a322472a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "09981ab6d7da2218d3c2aa73ea4a67ec"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ed5f65b3e4356e44c033833333112ece"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "14a29c906f9ed95e52b5f3979b805623"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bedd0c0a2a2e0caa7b3ee2c5f8f1cb91"
  },
  {
    "url": "timeline/index.html",
    "revision": "60f6f93bc1f42447a005e38bc9f1a1df"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8e25d878b0d945d3d7319588cd910729"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "59ef2a130306f28ab224a4d951280b78"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d7c68e06588886eaafa037f11cbc23ae"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0bb71914533d00e5c8d3035827b42c33"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c72e620ad231b720d3e7e5632f1fa7ad"
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
