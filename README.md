# Water Buddy Website

本仓库是水滴伙伴的无构建依赖静态官网，通过 GitHub Pages 发布，并以 Git submodule 形式接入[产品主仓库](https://github.com/MicroSpotlight/water-buddy)。运行时文件保持扁平，方便 clean URL、CSP 和静态资源路径保持简单稳定。

## 目录结构

```text
.
├── index.html                 # 产品首页：/
├── changelog.html             # TestFlight 更新日志：/changelog
├── support.html               # 支持页面：/support
├── privacy-policy.html        # 隐私政策：/privacy-policy
├── styles.css                 # 全站样式
├── locales.js                 # 韩文翻译资源（英文、日文主词典随交互脚本维护）
├── site.js                    # 主题、四语切换与轻量交互
├── assets/                    # 官网使用的已优化产品图片
├── docs/                      # 不参与部署的内部事实与品牌说明
│   ├── brand-spec.md
│   └── product-facts.md
├── robots.txt
├── CNAME                      # GitHub Pages 自定义域名
├── _config.yml                # GitHub Pages 排除内部文档与非运行时配置
├── vercel.json                # Clean URL、安全响应头与缓存策略
├── .vercelignore
└── AGENTS.md
```

## 本地预览

要按 Vercel clean URL 和 `vercel.json` 响应头预览，在仓库根目录运行：

```sh
npx vercel dev .
```

首次运行可能需要登录并关联 Vercel 项目。使用普通 HTTP Server 只能检查静态文件，无法正确模拟 `/support`、`/privacy-policy` 等 clean URL；也不要使用 `file://` 验证，因为页面采用站点根路径。

## 页面与事实来源

- App 能力、版本和隐私事实：`docs/product-facts.md`
- Android 与 Wear OS 开发状态、平台能力和公开边界：`docs/product-facts.md`
- 官网视觉规范与图片来源：`docs/brand-spec.md`
- App Store 提交文案：[主仓库 submission.md](https://github.com/MicroSpotlight/water-buddy/blob/main/app-store/metadata/submission.md)
- App Store 提审状态：[主仓库上传状态](https://github.com/MicroSpotlight/water-buddy/blob/main/app-store/app-store-connect-upload-status.md)
- 正式隐私与支持入口：`privacy-policy.html`、`support.html`
- 设计原型：[主仓库 designs](https://github.com/MicroSpotlight/water-buddy/tree/main/designs)

产品主仓库 `app-store/legal/` 中的 HTML 是本地跳转存档，正式公开内容以本仓库页面为准。

## 当前内容状态

官网当前展示 iOS `0.6.0` 为 App Store 公开版本（Build 103）。首页、更新日志和支持中心同步展示“近期节奏”摘要、日期下钻与只读大号小组件；`0.5.0` 及更早版本保留为历史记录。Android 与 Wear OS 仍标记为开发中，0.6.0 不包含 HealthKit。

## 部署

GitHub Pages 从 `main` 分支仓库根目录发布，正式域名为
`https://waterbuddy.microspotlight.team`。`CNAME` 必须与仓库 Pages 设置保持一致。
`_config.yml` 排除内部文档与 Vercel 配置；`.vercelignore` 负责 Vercel 的部署排除。

Vercel 项目继续作为兼容部署保留。项目配置保存在本机忽略的 `.vercel/` 中，仓库只跟踪可复用的 `vercel.json`；部署时以本仓库根目录为项目根目录。

0.3.1 发布状态官网于 2026-07-29 部署到 Production：
`dpl_mYsgxpmHRT6kuYbYZyLu2kxDYj1P`，正式域名为
`https://water-buddy.kitdesk.site`。

0.4.0 候选 Build 91 状态官网于 2026-07-31 部署到 Production：
`dpl_HZFumKQMf2siSW5zMb1CpGM5rAwh`，对应官网内容提交 `48f6cb3`。
正式域名继续使用 `https://water-buddy.kitdesk.site`。

0.4.0 Build 92 正式发布状态官网于 2026-08-01 部署到 Production：
`dpl_HyHVvaA3CYJqfpgz5MPndYx6YQ7E`，对应官网内容提交 `1f417a3`。
正式域名继续使用 `https://water-buddy.kitdesk.site`。

0.5.0 正式发布状态官网于 2026-08-26 部署到 Production：
`dpl_EKWT2czd32WpcggWSRbDtmNAbEke`，对应官网内容提交 `bbd84e4`，
部署 URL 为 `https://water-buddy-o4726vuss-jmvssssvs-projects.vercel.app`。
正式域名继续使用 `https://water-buddy.kitdesk.site`，备用域名为
`https://water-buddy-three.vercel.app`。

`vercel.json` 当前负责：

- 启用 clean URL 并关闭尾斜杠。
- 设置 CSP、Referrer Policy、Permissions Policy 等安全响应头。
- 对 `/assets/*` 使用长期不可变缓存。
- 限制脚本、样式、图片和网络请求只来自允许的来源。

## 多语言

官网首页、更新日志、支持中心与隐私政策支持简体中文、英文、日文和韩文。首次访问会匹配浏览器语言；用户也可以通过顶部语言选择器切换，选择结果保存在浏览器本机，并可通过 `?lang=zh-Hans|en|ja|ko` 分享指定语言页面。

新增或修改产品事实时，先更新 `docs/product-facts.md`，再同步页面文案和 `site.js`/`locales.js` 的四语资源。Premium 月/年/永久购买与历史支持作者消耗品必须区分；免费边界、RevenueCat 数据处理、恢复/取消与 Apple 标准 EULA 需保持一致。政策更新不表示候选版本或商品已经发布。

首页会明确区分平台状态：iOS 公开版提供 App Store 下载，Android 与 Wear OS 仅标注为原生开发版。在验证 Google Play 公开页面前，不展示下载按钮、商店徽章或发布日期承诺。

## 验证清单

1. 首页、更新日志、支持页和隐私政策页均返回成功状态。
2. 所有站内链接、图片、CSS 和 JS 可以加载。
3. 浏览器控制台没有 CSP、资源路径或 JavaScript 错误。
4. 桌面与移动视口没有横向溢出、遮挡和文字截断。
5. 四个页面在 `zh-Hans`、`en`、`ja`、`ko` 下均无缺失文案，切换后页面标题和无障碍文本同步更新。
6. App Store、TestFlight、邮箱与隐私外链使用正确地址。
7. `docs/`、README 和 AGENTS 不包含在部署产物中。
