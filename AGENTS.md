# Website Agent Notes

本文件适用于 `website/` 静态官网。

## Runtime Structure

- 保持 `index.html`、`support.html`、`privacy-policy.html`、`styles.css`、`site.js` 和 `vercel.json` 位于网站根目录。
- 运行时图片统一放在 `assets/`；当前数量较少，不继续按页面拆分。
- 内部品牌说明和产品事实放在 `docs/`，并通过 `.vercelignore` 排除部署。
- 不引入前端构建系统，除非现有静态结构已经无法满足明确需求。

## Content Accuracy

- 产品能力、版本、平台、隐私和 TestFlight 信息必须来自当前仓库或官方公开页面。
- 饮水数据保存在本机/App Group；Firebase Analytics 与 Crashlytics 的披露必须与当前代码一致。
- 不添加未经证实的健康效果、用户评价、下载量、订阅价格或 App Store 上线状态。
- 官网隐私政策是公开事实来源；修改后同步检查 `app-store/metadata/submission.md`。

## HTML, CSS And JavaScript

- 页面使用语义化 HTML，保留 skip link、可见焦点、合理标题层级与图片替代文本。
- 站内页面和静态资源使用以 `/` 开头的站点根路径，确保 Vercel clean URL 下行为一致。
- 遵守 `vercel.json` 的 CSP：不新增内联脚本、内联样式或未经允许的第三方资源。
- 共用视觉规则优先加入 `styles.css`，共用交互优先加入 `site.js`。
- 保持当前卡通品牌系统，同时确保移动端文本、按钮和产品截图不重叠。

## Assets And Caching

- `assets/` 只保存官网实际使用的图片；源设计稿继续放在仓库 `designs/`。
- 替换长期缓存的同名资源时确认部署平台会刷新内容；必要时使用版本化文件名。
- 图片应提供明确的 `width`、`height` 和描述性 `alt`，并控制文件体积。

## Validation

- 通过本地 HTTP server 验证，不以 `file://` 结果作为部署依据。
- 检查 `/`、`/support`、`/privacy-policy` 和所有 `/assets/*` 请求。
- 检查桌面/移动布局、控制台错误、安全响应头和外部链接。
- 提交前运行本地链接检查与 `git diff --check`，不要提交 `.vercel/` 或 `.DS_Store`。
