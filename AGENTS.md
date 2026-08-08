# Website Agent Notes

本文件适用于整个静态官网仓库。本仓库以 Git submodule 形式接入 `MicroSpotlight/water-buddy` 的 `website/` 路径。

## Runtime Structure

- 保持 `index.html`、`changelog.html`、`support.html`、`privacy-policy.html`、`styles.css`、`locales.js`、`site.js` 和 `vercel.json` 位于网站根目录。
- 运行时图片统一放在 `assets/`；当前数量较少，不继续按页面拆分。
- 内部品牌说明和产品事实放在 `docs/`，并通过 `.vercelignore` 排除部署。
- 不引入前端构建系统，除非现有静态结构已经无法满足明确需求。

## Content Accuracy

- 产品能力、版本、平台、隐私和 TestFlight 信息必须来自产品主仓库或官方公开页面。
- 官网事实优先同步 `docs/product-facts.md`；品牌、截图来源和视觉约束同步 `docs/brand-spec.md`。
- 饮水数据保存在本机/App Group；Firebase Analytics 与 Crashlytics 的披露必须与当前代码一致。
- StoreKit 支持作者只能描述为 Apple 处理付款的自愿消耗型支持，不承诺功能权益、订阅或恢复权益。
- 不添加未经证实的健康效果、用户评价、下载量、订阅价格或 App Store 上线状态。
- 官网隐私政策是公开事实来源；修改后同步检查产品主仓库的 `app-store/metadata/submission.md`。

## HTML, CSS And JavaScript

- 页面使用语义化 HTML，保留 skip link、可见焦点、合理标题层级与图片替代文本。
- 站内页面和静态资源使用以 `/` 开头的站点根路径，确保 Vercel clean URL 下行为一致。
- 遵守 `vercel.json` 的 CSP：不新增内联脚本、内联样式或未经允许的第三方资源。
- 共用视觉规则优先加入 `styles.css`，共用交互优先加入 `site.js`。
- 保持当前卡通品牌系统，同时确保移动端文本、按钮和产品截图不重叠。

## Assets And Caching

- `assets/` 只保存官网实际使用的图片；源设计稿继续放在产品主仓库 `designs/`。
- 替换长期缓存的同名资源时确认部署平台会刷新内容；必要时使用版本化文件名。
- 图片应提供明确的 `width`、`height` 和描述性 `alt`，并控制文件体积。

## GitHub Pages Deployment

- GitHub 仓库：`MicroSpotlight/water-buddy-website`。
- 从 `main` 分支仓库根目录发布。
- 正式域名：`https://waterbuddy.microspotlight.team`。
- `CNAME`、GitHub Pages 自定义域名设置和 DNS 必须保持一致。

## Vercel Deployment

- 官网只部署本仓库根目录；不要从产品主仓库根目录部署 iOS、Android、App Store 素材或其他非官网内容。
- Vercel 项目：`water-buddy`。
- Project ID：`prj_hg5GdSiXI2PfrjtXCVtz1MPP3qTM`。
- Team ID：`team_NPYXmRPk1BeF7amkFAcA0RKI`。
- 兼容域名：`https://water-buddy.kitdesk.site`。
- 备用 Vercel 域名：`https://water-buddy-three.vercel.app`。
- 0.2.0 官网部署记录：`dpl_C1gj6ZwzDkQgVNDTt1WdAeM6JnFz`，生产 URL `https://water-buddy-riu544bdz-jmvssssvs-projects.vercel.app`，对应官网提交 `bc9a9cd080e33f9c454bc6345951ead74538ffc7`。
- 部署优先使用 Vercel API；只有 API 凭据不可用、API 上传/创建部署失败，或用户明确要求 CLI 时，才使用 Vercel CLI 兜底。
- 使用 Vercel API 或 CLI 部署时必须确认工作目录/上传根为本仓库根目录，并复用 `.vercel/project.json` 中的项目链接。

## Validation

- 通过本地 HTTP server 验证，不以 `file://` 结果作为部署依据。
- 检查 `/`、`/changelog`、`/support`、`/privacy-policy` 和所有 `/assets/*` 请求。
- 检查桌面/移动布局、控制台错误、安全响应头和外部链接。
- 提交前运行本地链接检查与 `git diff --check`，不要提交 `.vercel/` 或 `.DS_Store`。
