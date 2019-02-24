# service Worker 实践

## 生命周期

> 通过了解生命周期，进行创建 `service worker`，。

- **注册** (`register`)
- **安装** (`install`)
- **激活** (`activate`)


## 如何工作

> 通常使用 `service worker` 只需要以下几个步骤:

- 首先，检测当前环境是否支持 `service worker`,可以使用 `'serviceWorker' in navigator` 进行检测，如果支持，可以使用 `navigator.serviceWorker.register('./sw.js')`,在当前主线程中注册 `service worker`。
- 如果注册成功，`service worker` 则在 `ServiceWorkerGlobalScope `环境中运行; 需要注意的是: 当前环境**无法操作`DOM`**，且和主线程之间**相互独立**(即线程之间不会相互阻塞)。
- 然后，后台开始安装`service worker`，一般在此过程中，开始缓存一些静态资源文件。
- 安装成功之后，准备进行激活 `service worker`,通常在激活状态下，主要进行缓存清理，更新`service worker`等操作。
- 激活成功后，,`service worker` 就可以控制当前页面了。需要注意的是，只有在`service worker`成功激活后，才具有控制页面的能力，一般在第一次访问页面时，`service worker`第一次创建成功，并没有激活，只有当**刷新页面**，再次访问之后，才具有控制页面的能力。