# service Worker 实践


## 启动项目

1. 下载到本地

```bash
$ git clone git@github.com:yang657850144/serviceworker.git
```

2. `npm install`

3. 执行 `npm run server`


## 生命周期

> 通过了解生命周期，进行创建 `service worker`，。

- **注册** (`register`)
- **安装** (`install`)
- **激活** (`activate`)


## 如何工作

> 通常使用 `service worker` 只需要以下几个步骤:

- **检测是否支持`serivceworker`**

> 首先，检测当前环境是否支持 `service worker`,可以使用 `'serviceWorker' in navigator` 进行检测。

- **注册**

>如果支持，可以使用 `navigator.serviceWorker.register('./sw.js')`,在当前主线程中注册 `service worker`。如果注册成功，`service worker` 则在 `ServiceWorkerGlobalScope `环境中运行; 需要注意的是: 当前环境**无法操作`DOM`**，且和主线程之间**相互独立**(即线程之间不会相互阻塞)。

- **安装**

>然后，后台开始安装`service worker`，一般在此过程中，开始缓存一些静态资源文件。

- **激活**

> 安装成功之后，准备进行激活 `service worker`,通常在激活状态下，主要进行缓存清理，更新`service worker`等操作。

- **使用** 

> 激活成功后，,`service worker` 就可以控制当前页面了。需要注意的是，只有在`service worker`成功激活后，才具有控制页面的能力，一般在第一次访问页面时，`service worker`第一次创建成功，并没有激活，只有当**刷新页面**，再次访问之后，才具有控制页面的能力。


## serviceworker相关文档

## 基础知识

1. [概述](https://developers.google.com/web/fundamentals/primers/service-workers/)
2. [什么是serviceworker](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction)
3. [如何使用](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/how-to-use-service-worker)
4. [生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
5. [Service_Worker_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)

## 离线化开发

1. [借助serviceworker和cacheStorage离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
2. [cacheStorage接口文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CacheStorage)

## 缓存更新

1. [缓存更新常用方式](https://zhuanlan.zhihu.com/p/51118741)
2. [缓存更新改进建议](https://github.com/lavas-project/lavas/issues/212)
3. [Service Worker 更新机制](https://harttle.land/2017/04/10/service-worker-update.html)

## 最佳实践

1. [Service Worker最佳实践](https://x5.tencent.com/tbs/guide/serviceworker.html)
2. [Service Worker 全面进阶](https://www.villainhr.com/page/2017/01/08/Service%20Worker%20%E5%85%A8%E9%9D%A2%E8%BF%9B%E9%98%B6)

## 前端缓存相关文档

1. [一文读懂前端缓存](https://zhuanlan.zhihu.com/p/44789005)
