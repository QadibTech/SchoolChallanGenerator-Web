'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5e23a8e205766d1b3461b370c4fa568e",
"index.html": "413dbd90bb24db02c6613e1033ef51c7",
"/": "413dbd90bb24db02c6613e1033ef51c7",
"main.dart.js": "09c686395df89c0a4ee595cc5d51183a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "97a78cc80f274dfac8ea5ddf79a6c497",
".git/config": "7888f7dff3a2fff175fd1b45fa8e30e2",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/9e/d9487289c92f20ebf437c11d253aaa5c650909": "589ab22bd5998b1e71b98274b67df2b8",
".git/objects/3c/75dc9dae201a7a64f1b37ccb919a2f8244c5bb": "a8aec96f5ed631c92c0114b9a5fa3dac",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/0e/8752414cc1da8624870a6f66d4b1b759aabaad": "43e3c0760022cba89831e283b191eb47",
".git/objects/60/5b1b8d20ff2088d7881317722328fc8550ab10": "f263c924b9bef96a53d6ee8e76db757e",
".git/objects/05/1a88fe379a0cc807ceefeb61510cf316002120": "2aae2b61bf081bebf274edc9d2e4c3fd",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/153e63d4654d76b90362c8fbee0024076bbaf0": "5df7379380fa2c7c496651dceaa1fce0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/68fb842af396e8bb575e5434eabba4597ef32f": "5d9767ee644bd88e1f513f471958ffd2",
".git/objects/ee/c0ae9be8f8f74279afe5253de5286c04fc2fad": "f3f687fab5f02dbcf6f87b11fb20d96a",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/c6/1e897896c6f976c04ec8a0db4ee9bac30f349e": "1eff85b4aeea9aafb12f3b0f5a729761",
".git/objects/c6/3edd11c83b86068f79c43b053605919839c0c7": "57b68bf43ae5b29a6fe109d93c053b22",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/26b0a0005b6b6041d7f530de3e755bfc4c7dad": "e3329a46d1b67066078b234bf35b0833",
".git/objects/11/bdce59da87e6b8f9e11432b55593fc8649634a": "fbf42162847953c2dc0bac3e81a3c8d1",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/40b03fd00b3bbdf87a203b7f7e0f46eee53186": "f37c2f7b48bd1055cbd9a583547936ce",
".git/objects/43/b34830accf53936b8140911c554bf37ec7d4b9": "3ad4c4148ae0e0095de2e5990faa8f97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/deae79e0dbbfb629d33356fa701553fec28ca5": "108dfab645aea7eaad8a321951d9475a",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5e/2fae57a04c8e5dd507fff81d1aad64ddb29109": "ba9316ffb172bc33a64ba6b0d140cc5c",
".git/objects/08/6eea844b36a51514fab9ffd68593b45fb06a8d": "1908624586d48fff536751e2d92cdabc",
".git/objects/99/3f7cc66e58ebdffdd0d6da9756c9f0a70427b9": "68aab2b912013138dfb5131cc43b574d",
".git/objects/0a/12e58213546af34ebb6371326749f920674945": "25eea4abe8e6a972b2f082c05f166c3e",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/b1/d386b730d00199341bc22602b1dcff6c102f60": "18ceb80865d3f1df45f00fc8c0fe0137",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/906138b8e5352e7751ba70aab4c52a42c293a2": "bf005450f74f379687668a64adf2d764",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/959e5837cd94b6447b321261f16b1045052629": "1da9033f05dd4c7d87bfb368fd17c0e7",
".git/objects/e6/12852d259930d0dcc632318ac0f15ae312422b": "e8483c4976a2568e969041697c617c55",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/f1/855879ce761985644f9802c29621c59a69ea57": "e674891f00ecad10acee4482afc7790b",
".git/objects/cb/8ffcf1ad2c163bbf95ce6ff829b537d8bebd18": "c84a931518b0030e6e43457c333d4e3b",
".git/objects/cb/c699a3df5c2cce6710409cc6a0b85e9e70b95e": "8461e12277db8ae2fd96889b5a414a9d",
".git/objects/2c/c1b74efeb8f4e5b4dc9be5cb6f6de10747f7d5": "91152545f54c964b1086f3d3c5d3d9b6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/aa36013415901694aee0e47ff83f83d940599c": "76cbb5214e948248c5a8f3d49e41f541",
".git/objects/1b/61bb09f2333f348a5759915cba19a3685fde20": "059d857b954ec3348fe068853ddad63a",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/84/59f5c1f24a15b4d0170acbab7fde0584cb1b91": "ab8b44c14d15b5045b8f26fa4ccfadab",
".git/objects/23/ed2b87f1e96afec79a9cbe8f71582d038da73c": "8c7c1bc34ae1c7d537efd92d6c3ede6f",
".git/objects/8d/ea586b10cffc1d0ec509e519f093dad2e2cbb6": "bbfc4d00743c1e5ff2b3d52e803e3160",
".git/objects/85/669139b586aef3391fd979a751d073735c6784": "ca6932cee9a3d018e2a4c14c86dc20a4",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/40/21c9d7cbf442c10946fc5c1e5ef983f7a78656": "6db3ea057e587551addcf9a8ec80a03b",
".git/objects/22/e014757c460b19818591d9ffd4a06739a92973": "6be6957aca94fa31f4472fcc5f6140cc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e859aa40bb4695b83ba95b4f46c8c1b0",
".git/logs/refs/heads/master": "e859aa40bb4695b83ba95b4f46c8c1b0",
".git/logs/refs/remotes/origin/master": "bf29ca0a245979d53d9a4eeb2574ad77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e83307c6a990b6d5b66b39d0fc2f80f7",
".git/refs/remotes/origin/master": "e83307c6a990b6d5b66b39d0fc2f80f7",
".git/index": "09200ca7c02f0cba82fa285ad50be7d9",
".git/FETCH_HEAD": "392aebe87fd5841b8dad401ea2896631",
"assets/AssetManifest.json": "bcd4765526357e6e6d0373bf252bded1",
"assets/NOTICES": "a27a95ef244526751e18cdaa761bea23",
"assets/FontManifest.json": "e17730b88cc8a9a4bf65e58fba32b026",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/fonts/Sriracha/Sriracha-Regular.ttf": "0847227b3c5baa567b6630e28f8cc0d8",
"assets/fonts/Dokdo-Regular.ttf": "3dff89d1c8e4b1972c23be24463570a1",
"assets/fonts/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/fonts/Noto_Serif/NotoSerif-BoldItalic.ttf": "b458e9f281a4b584f8daaed5e74e7a58",
"assets/fonts/Noto_Serif/NotoSerif-Regular.ttf": "d1c72e0e788cf2bbc1de53da57599bec",
"assets/fonts/Noto_Serif/NotoSerif-Italic.ttf": "1d43d0f9b7b2e15a9639af5141bde606",
"assets/fonts/Noto_Serif/NotoSerif-Bold.ttf": "77c225c157db0de7043cc9524bf5bd03",
"assets/fonts/Roboto-LightItalic.ttf": "afd48b813752d70b936e73d99b5dca35",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/assets/images/login-image.png": "f31189ab95ad5adbd24cd65508e7857d",
"assets/assets/images/login_background4.jpg": "64c70f3cb086d9ccb2673694947c7d25",
"assets/assets/images/school_background.png": "e7135b1c0830f406933db9b646e4bebc",
"assets/assets/images/app_background.jpg": "5ae6a0ec93af31b5710e66ea81a077a4",
"assets/assets/images/register5.png": "1939f921eea28e355caef6dff3d61460",
"assets/assets/images/chalkboard.jpg": "8df8e5c71a254512c03a536962d56640",
"assets/assets/images/forgot_password3.jpg": "df9d53757658c5c00cf9e0d109a8a2cb",
"assets/assets/images/login-form.png": "78084a6c10da5df7bc889e5b1028809d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
