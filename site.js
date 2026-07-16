const root = document.documentElement;
const trigger = document.querySelector("[data-theme-trigger]");
const menu = document.querySelector("[data-theme-menu]");
const options = [...document.querySelectorAll("[data-theme-option]")];
const themes = new Set(["pond", "matcha", "lagoon"]);

function applyTheme(theme) {
  const value = themes.has(theme) ? theme : "pond";
  root.dataset.theme = value;
  options.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.themeOption === value));
  });
  try {
    localStorage.setItem("water-buddy-site-theme", value);
  } catch (_) {}
}

if (trigger && menu) {
  trigger.addEventListener("click", () => {
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    trigger.setAttribute("aria-expanded", String(willOpen));
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      applyTheme(option.dataset.themeOption);
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".theme-picker")) {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
}

let savedTheme = "pond";
try {
  savedTheme = localStorage.getItem("water-buddy-site-theme") || "pond";
} catch (_) {}
applyTheme(savedTheme);

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const siteTranslations = {
  en: {
    "水滴伙伴 · 轻松记录每天喝水节奏": "Water Buddy · An easier daily hydration rhythm",
    "水滴伙伴是一款轻量、卡通、专注今天补水节奏的 iOS App。记录喝水、设置温柔提醒，并把进度放到桌面和锁屏。": "Water Buddy is a lighthearted iOS app focused on today’s hydration rhythm. Log water, set gentle reminders, and keep your progress on the Home and Lock Screens.",
    "不用账号，不制造压力。让可爱的水滴伙伴陪你照顾今天的补水节奏。": "No account and no pressure. Let a cheerful water buddy help you care for today’s hydration rhythm.",
    "跳到主要内容": "Skip to main content",
    "主导航": "Main navigation",
    "水滴伙伴首页": "Water Buddy home",
    "页面章节": "Page sections",
    "网站资料": "Site resources",
    "功能": "Features",
    "小组件": "Widgets",
    "隐私": "Privacy",
    "更新日志": "Changelog",
    "支持": "Support",
    "隐私政策": "Privacy Policy",
    "官网": "Website",
    "返回官网": "Back to website",
    "联系我们": "Contact us",
    "换个主题": "Change theme",
    "池塘蓝": "Pond blue",
    "抹茶绿": "Matcha green",
    "深海青": "Deep lagoon",
    "选择网站语言": "Choose website language",
    "为 iPhone 设计": "Designed for iPhone",
    "先喝一杯，": "Take a sip first.",
    "今天会轻一点。": "Today will feel lighter.",
    "水滴伙伴帮你快速记录喝水、安排温柔提醒，并把今天的水位同步到主屏、锁屏与 Live Activity。": "Water Buddy helps you log water quickly, schedule gentle reminders, and keep today’s progress in sync across the Home Screen, Lock Screen, and Live Activity.",
    "在 App Store 下载": "Download on the App Store",
    "认识水滴伙伴": "Meet Water Buddy",
    "App Store 已上线 · 免费下载 · 支持中文、English、한국어、日本語": "Now on the App Store · Free download · Available in Chinese, English, Japanese, and Korean",
    "水滴伙伴 App 界面预览": "Water Buddy app preview",
    "水滴伙伴最新首页，展示 700 ml 饮水量、2,400 ml 目标、29% 水位和下一杯提醒": "Water Buddy home screen showing 700 ml logged, a 2,400 ml goal, 29% progress, and the next-drink reminder",
    "700 ml 已记下，下一杯还有 18 分钟。": "700 ml logged. Your next drink is in 18 minutes.",
    "简单，但刚刚好": "Simple, in just the right way",
    "把补水变成今天的一件小事": "Make hydration one small part of today",
    "不做复杂报表，也不催你焦虑。只保留真正能帮你坚持的节奏。": "No complicated reports and no anxious nudges—just the rhythm that helps you keep going.",
    "一按就记下": "Log with one tap",
    "“喝一杯”或“小口补水”，两种入口快速更新今天的水位。": "Use “Drink a cup” or “Take a sip” to update today’s water level in seconds.",
    "温柔地提醒": "Gentle reminders",
    "按你的节奏设置本地通知。完成目标后，让提醒也休息一下。": "Set local notifications around your rhythm. Once you reach your goal, reminders take the rest of the day off.",
    "抬眼就看见": "See it at a glance",
    "主屏小组件、锁屏小组件与 Live Activity，随时看到今日进度。": "See today’s progress anytime with Home Screen widgets, Lock Screen widgets, and Live Activity.",
    "不用打开 App，也能继续": "Keep going without opening the app",
    "主屏、锁屏，都是同一个水位实验室": "One water-level lab across Home and Lock Screens",
    "今天喝了多少、下一杯还有多久，以及快捷记录入口，都能放到最顺手的位置。": "Put today’s total, the countdown to your next drink, and quick logging right where they are easiest to reach.",
    "水滴伙伴主屏 Small 与 Medium 小组件，展示 29% 饮水进度、量杯和快捷记录按钮": "Water Buddy Small and Medium Home Screen widgets showing 29% progress, a measuring cup, and quick-log buttons",
    "Small 看水位，Medium 看节奏": "Small shows progress. Medium shows your rhythm.",
    "一眼查看 700 / 2,400 ml，直接“喝一杯”或“小口补水”；中号组件还会显示下一杯倒计时。": "See 700 / 2,400 ml at a glance and log a cup or a sip directly. The Medium widget also shows the countdown to your next drink.",
    "水滴伙伴锁屏圆形、矩形小组件与 Live Activity，展示水位、目标和下一杯提醒": "Water Buddy circular and rectangular Lock Screen widgets and Live Activity showing progress, goal, and next-drink reminder",
    "抬起手机，就知道下一口什么时候": "Lift your phone and know when to sip next",
    "圆形和矩形锁屏小组件负责快速扫读，Live Activity 把 29% 水位、18 分钟倒计时和今日目标留在锁屏。": "Circular and rectangular widgets make progress easy to scan, while Live Activity keeps 29%, an 18-minute countdown, and today’s goal on the Lock Screen.",
    "隐私说明": "Privacy at a glance",
    "你的喝水记录，留在你的设备。": "Your hydration records stay on your device.",
    "不需要账号。今日饮水量、目标、提醒和主题保存在本机，并通过本机 App Group 与小组件共享。": "No account is required. Today’s intake, goals, reminders, and theme stay on your device and are shared with widgets through a local App Group.",
    "查看完整隐私政策": "Read the full Privacy Policy",
    "不上传": "Never uploads",
    "你的饮水记录或每日目标": "your hydration records or daily goal",
    "不出售": "Never sells",
    "个人数据，也不用于广告追踪": "personal data or uses it for advertising tracking",
    "会收集": "Collects",
    "有限的 App 使用事件与崩溃诊断，用于改进体验": "limited app usage events and crash diagnostics to improve the experience",
    "今天，再喝一口。": "Take one more sip today.",
    "水滴伙伴现已在 App Store 上线，也欢迎通过 TestFlight 抢先体验后续更新。": "Water Buddy is now on the App Store. You can also use TestFlight to preview future updates.",
    "前往 App Store": "View on the App Store",
    "加入 TestFlight": "Join TestFlight",
    "Water Buddy. 为轻松一点的今天设计。": "Water Buddy. Designed for a lighter day.",

    "更新日志 · 水滴伙伴": "Changelog · Water Buddy",
    "水滴伙伴更新日志：查看 App Store 首发版本与 TestFlight 构建的核心功能变化。": "Water Buddy changelog: see the key changes in App Store releases and TestFlight builds.",
    "水滴伙伴 0.1.1 更新记录：让 App、通知、组件、Live Activity 与 Watch 使用一致语言，并持续刷新下一杯倒计时。": "Water Buddy 0.1.1: consistent language across the app, notifications, widgets, Live Activity, and Watch, plus a countdown that keeps moving.",
    "每一版，都让补水更顺一点。": "Every release makes hydration flow a little better.",
    "水滴伙伴 0.1.1 已在 App Store 上线。这里不写补丁流水账，只记录真正影响日常使用的功能与体验升级。": "Water Buddy 0.1.1 is now on the App Store. This is not a patch-by-patch list—only the changes that meaningfully improve everyday use.",
    "查看 0.1.1 变化": "See what changed in 0.1.1",
    "App Store 当前版本": "Current App Store version",
    "2026 年 7 月 13 日": "July 13, 2026",
    "水滴伙伴当前主屏小组件，展示饮水进度和快捷记录": "Current Water Buddy Home Screen widgets showing hydration progress and quick logging",
    "版本与构建记录": "Version and build history",
    "从第一杯，到每个系统表面都保持一致": "From the first cup to consistency across every system surface",
    "0.1.1（Build 33）是 App Store 当前版本；也可通过 TestFlight 抢先体验后续更新。": "0.1.1 (Build 33) is the current App Store version. You can also preview future updates through TestFlight.",
    "让每一种语言和每一秒倒计时都跟得上": "Keeping every language—and every second of the countdown—in step",
    "0.1.1 聚焦系统表面的语言一致性与实时状态更新，让 App 内的选择可靠地延伸到提醒、组件、实时活动和手表。": "Version 0.1.1 focuses on language consistency and live status updates, reliably carrying your in-app choices into reminders, widgets, Live Activities, and Apple Watch.",
    "语言选择贯通所有表面": "One language across every surface",
    "App、通知、主屏与锁屏组件、Live Activity 和 Watch 同步使用 App 内选择的简中、英文、日文或韩文。": "The app, notifications, Home and Lock Screen widgets, Live Activity, and Watch all use the Chinese, English, Japanese, or Korean language selected in the app.",
    "最新状态不被旧任务覆盖": "Older work can’t overwrite the latest state",
    "按顺序刷新通知与实时活动，避免较早的本地化任务覆盖刚刚更新的饮水量或提醒状态。": "Notification and Live Activity refreshes are ordered so earlier localization work cannot overwrite a newly updated water total or reminder state.",
    "下一杯倒计时持续前进": "The next-drink countdown keeps moving",
    "Live Activity 与组件使用系统时间推进，分钟内也能保持及时、易读的下一杯状态。": "Live Activity and widgets advance with system time, keeping the next-drink status timely and readable even within the current minute.",
    "组件配置打开更稳定": "Widget configuration opens more reliably",
    "修复本地化环境下打开 Widget 配置时可能发生的崩溃，并补齐对应回归检查。": "Fixed a crash that could occur when opening Widget configuration in localized environments, with regression coverage added.",
    "App Store 首发版本": "App Store launch version",
    "水滴伙伴，正式和更多人见面": "Water Buddy officially meets more people",
    "首发版把快速记录、温柔提醒和系统组件整理成一套完整体验，并完成发布前的稳定性、隐私与多语言收尾。": "The launch release brings quick logging, gentle reminders, and system surfaces into one complete experience, with final stability, privacy, and localization work.",
    "轻松记下一杯": "Log a drink with ease",
    "快速记录“喝一杯”或“小口补水”，设置每日目标，并在需要时撤回上一笔。": "Quickly log a cup or a sip, set a daily goal, and undo the last entry when needed.",
    "提醒有节奏，也会休息": "Reminders follow your rhythm—and know when to rest",
    "支持本地提醒、专注结束后的可选补水提醒；达到目标后当天不再打扰。": "Use local reminders and optional hydration nudges after Focus ends. Once you reach your goal, reminders stop for the day.",
    "水位来到更多地方": "Your water level reaches more places",
    "主屏与锁屏小组件、Live Activity 和 Apple Watch 都能查看进度或快速补记。": "Home and Lock Screen widgets, Live Activity, and Apple Watch let you check progress or log quickly.",
    "为正式发布做稳": "Made reliable for release",
    "完善数据迁移、跨日期状态、导航手势和多语言显示；饮水记录与偏好仍保存在本机。": "Improved data migration, day transitions, navigation gestures, and multilingual display. Hydration records and preferences still stay on device.",
    "发布收尾测试": "Release finishing tests",
    "把发布前的控制权交还给你": "Putting control back in your hands before release",
    "这一版集中完成隐私、系统功能与提醒节奏的发布级收尾，也让小组件更接近真正的桌面水位卡片。": "This build finishes release-level work on privacy, system features, and reminder rhythm, while making widgets feel more like true desktop water-level cards.",
    "目标完成，提醒休息": "Goal reached, reminders rest",
    "达到每日目标后暂停当天后续提醒，第二天再恢复节奏。": "After you reach the daily goal, reminders pause for the rest of the day and resume tomorrow.",
    "独立控制 Live Activity": "Control Live Activity independently",
    "可以关闭锁屏实时活动，同时保留普通通知与小组件。": "Turn off Lock Screen Live Activity while keeping standard notifications and widgets.",
    "隐私和数据操作更清楚": "Clearer privacy and data controls",
    "集中说明本机数据与 Firebase 诊断，并完善撤回、重置和跨日期状态。": "Clarified on-device data and Firebase diagnostics, and improved undo, reset, and day-transition behavior.",
    "组件铺满可用空间": "Widgets use the full available space",
    "主屏组件采用更完整的全幅布局，修正预览尺寸和交互反馈。": "Home Screen widgets use a fuller edge-to-edge layout with corrected preview sizing and interaction feedback.",
    "系统体验扩展": "Expanded system experience",
    "水位走出 App，来到手腕与锁屏": "Your water level leaves the app for your wrist and Lock Screen",
    "功能从 iPhone 页面扩展到更多系统表面，同时完成“水滴实验室”视觉重构与七套主题的深浅色适配。": "Features expanded from iPhone pages to more system surfaces, alongside a Water Lab visual redesign and light/dark support for seven themes.",
    "Apple Watch 记录与同步": "Apple Watch logging and sync",
    "在手表查看今日水量、目标和剩余量，也能快速补记一杯或一小口。": "See today’s intake, goal, and remaining amount on Watch, and quickly log a cup or a sip.",
    "专注结束后的可选补水": "Optional hydration after Focus",
    "通过 Focus Filter 在一次专注结束后安排轻量本地提醒。": "Use a Focus Filter to schedule a light local reminder after a Focus session ends.",
    "锁屏倒计时持续更新": "A Lock Screen countdown that keeps updating",
    "重做 Live Activity 和锁屏组件，让下一杯时间与今日进度更容易扫读。": "Redesigned Live Activity and Lock Screen widgets to make the next-drink time and today’s progress easier to scan.",
    "水滴实验室与七套主题": "Water Lab and seven themes",
    "首页、组件、通知和 Watch 统一卡通视觉，并完成深色模式适配。": "Unified the playful visual style across the home screen, widgets, notifications, and Watch, with dark mode support.",
    "交互与兼容性": "Interaction and compatibility",
    "让第一套体验更像原生 iOS App": "Making the first experience feel more like a native iOS app",
    "这个里程碑没有堆叠新页面，重点是把已有流程做稳：返回手势、目标边界和锁屏可读性都更符合系统习惯。": "This milestone does not add more screens. It strengthens existing flows so back gestures, goal boundaries, and Lock Screen readability feel more at home on iOS.",
    "原生边缘侧滑返回": "Native edge-swipe back",
    "二级和三级页面保留主题返回图标，也支持符合 iOS 习惯的交互式侧滑。": "Secondary and tertiary screens keep themed back icons while supporting the familiar interactive iOS edge swipe.",
    "完成目标后仍可记录": "Keep logging after reaching the goal",
    "进度显示封顶于 100%，但真实饮水量仍能继续增加。": "Progress display caps at 100%, while the actual intake can keep increasing.",
    "锁屏对比度与安全区修正": "Lock Screen contrast and safe-area fixes",
    "改善浅色、深色和不同渲染模式下的文本与水位可读性。": "Improved text and water-level readability across light, dark, and different rendering modes.",
    "发布配置补齐": "Completed release configuration",
    "补充出口合规声明与稳定的 Bundle 配置，为外部测试做准备。": "Added export-compliance declarations and stable bundle configuration for external testing.",
    "第一个可用版本": "First usable version",
    "先把“记下一杯”这件事做完整": "First, make logging one drink feel complete",
    "水滴伙伴第一次形成完整使用闭环：从新手引导、快速记录，到提醒和系统组件，都围绕“今天”展开。": "Water Buddy’s first complete loop—from onboarding and quick logging to reminders and system surfaces—is built around today.",
    "喝一杯、小口补水与撤回": "Drink a cup, take a sip, and undo",
    "用固定的 200 ml、100 ml 和撤回操作快速更新今日水量。": "Quickly update today’s intake with fixed 200 ml and 100 ml amounts, plus undo.",
    "每日目标与温柔提醒": "Daily goals and gentle reminders",
    "设置目标和提醒间隔，用本地通知维持自己的补水节奏。": "Set a goal and reminder interval, then use local notifications to maintain your own hydration rhythm.",
    "主屏、锁屏与实时活动": "Home Screen, Lock Screen, and Live Activity",
    "不用进入 App，也能查看进度、下一杯状态或直接记录。": "Check progress, see your next-drink status, or log directly without entering the app.",
    "四种语言与卡通主题": "Four languages and playful themes",
    "支持简中、英文、日文和韩文，并提供 App 内语言与主题切换。": "Supports Simplified Chinese, English, Japanese, and Korean, with in-app language and theme controls.",
    "版本说明": "Version notes",
    "关于这些版本号": "About these version numbers",
    "0.1.0 建立首个完整体验，0.1.1 集中完善本地化与系统组件稳定性。Build 代表构建里程碑，同一 Build 可在发布准备期间对应新的用户版本；日期来自版本配置与 Git 历史。": "Version 0.1.0 established the first complete experience, while 0.1.1 focused on localization and system-surface stability. A Build marks a development milestone; during release preparation, the same Build can correspond to a new user-facing version. Dates come from version configuration and Git history.",
    "已经见面，也想继续听见你的声音": "Now that we’ve met, we still want to hear from you",
    "下载 0.1.1，把你的补水节奏带回家。": "Download 0.1.1 and bring your hydration rhythm home.",
    "发送反馈": "Send feedback",
    "Water Buddy. 已在 App Store 上线。": "Water Buddy. Now on the App Store.",
    "mailto:support@microspotlight.team?subject=Water%20Buddy%200.1.1%20反馈": "mailto:support@microspotlight.team?subject=Water%20Buddy%200.1.1%20Feedback",

    "支持中心 · 水滴伙伴": "Support Center · Water Buddy",
    "水滴伙伴支持中心：常见问题、联系邮箱与隐私政策。": "Water Buddy Support Center: frequently asked questions, contact email, and Privacy Policy.",
    "支持中心": "Support Center",
    "遇到问题、想提出建议，或者只是想和水滴伙伴打个招呼，都可以在这里找到我们。": "Whether you ran into a problem, have an idea, or simply want to say hello to Water Buddy, you can reach us here.",
    "发送邮件": "Send email",
    "mailto:support@microspotlight.team?subject=Water%20Buddy%20支持": "mailto:support@microspotlight.team?subject=Water%20Buddy%20Support",
    "常见问题": "Frequently asked questions",
    "先从这里找答案": "Start here for an answer",
    "如何记录喝水？": "How do I log water?",
    "在首页点击“喝一杯”记录 200 ml，或点击“小口补水”记录 100 ml。你也可以通过小组件按钮快速记录。": "On the home screen, tap “Drink a cup” to log 200 ml or “Take a sip” to log 100 ml. You can also log quickly from widget buttons.",
    "如何调整每日目标？": "How do I change my daily goal?",
    "进入“我的水滴”，在快捷设置中拖动每日目标进度条，即可调整当天补水目标。": "Open “My Buddy” and drag the daily-goal slider in Quick Settings to adjust today’s hydration goal.",
    "如何开启提醒？": "How do I turn on reminders?",
    "进入“我的水滴”，允许 iOS 通知并设置提醒间隔。提醒由系统本地通知发送。": "Open “My Buddy,” allow iOS notifications, and set a reminder interval. Reminders are delivered as local system notifications.",
    "小组件为什么没更新？": "Why hasn’t my widget updated?",
    "请先打开 App 记录一次饮水或调整设置。系统会自动刷新小组件；某些情况下 iOS 可能延迟刷新。": "Open the app and log water or change a setting first. The system refreshes widgets automatically, though iOS may delay an update in some cases.",
    "支持哪些语言？": "Which languages are supported?",
    "水滴伙伴支持简体中文、English、한국어 和日本語，可在 App 内切换。": "Water Buddy supports Simplified Chinese, English, Korean, and Japanese. You can switch languages inside the app.",
    "我的饮水记录会上云吗？": "Are my hydration records uploaded to the cloud?",
    "不会。饮水记录、目标和提醒设置保存在设备本机。有限的 App 使用事件与崩溃诊断会通过 Firebase 处理，详情见": "No. Hydration records, goals, and reminder settings stay on your device. Limited app usage events and crash diagnostics are processed through Firebase. See the",
    "版本 0.1.1 · Bundle ID: team.MicroSpotlight.WaterBuddy": "Version 0.1.1 · Bundle ID: team.MicroSpotlight.WaterBuddy",

    "隐私政策 · 水滴伙伴": "Privacy Policy · Water Buddy",
    "水滴伙伴隐私政策：了解本机饮水数据、Firebase Analytics 与 Crashlytics 的数据处理方式。": "Water Buddy Privacy Policy: learn how on-device hydration data, Firebase Analytics, and Crashlytics data are handled.",
    "水滴伙伴不需要账号，也不会把你的饮水记录上传到服务器。为了解 App 的基本使用情况并修复崩溃，我们会通过 Firebase 处理有限的使用数据与诊断数据。": "Water Buddy does not require an account and does not upload your hydration records to a server. To understand basic app usage and fix crashes, we process limited usage and diagnostic data through Firebase.",
    "生效日期：2026 年 7 月 10 日": "Effective date: July 10, 2026",
    "适用版本：0.1.0 及后续版本": "Applies to version 0.1.0 and later",
    "本页目录": "On this page",
    "摘要": "Summary",
    "本机数据": "On-device data",
    "远程数据": "Remote data",
    "使用方式": "How data is used",
    "共享与保留": "Sharing and retention",
    "你的选择": "Your choices",
    "儿童隐私": "Children’s privacy",
    "先说重点": "The essentials first",
    "饮水量、目标、提醒设置、主题与语言保存在你的设备上，不会上传给我们或 Firebase。": "Hydration totals, goals, reminder settings, theme, and language stay on your device and are not uploaded to us or Firebase.",
    "App 不需要注册或登录，不展示第三方广告，也不将数据用于跨 App 或跨网站追踪。": "The app requires no registration or login, shows no third-party ads, and does not use data to track you across apps or websites.",
    "Firebase Analytics 会处理 App 使用事件；Firebase Crashlytics 会在崩溃时处理诊断数据。": "Firebase Analytics processes app usage events; Firebase Crashlytics processes diagnostic data when a crash occurs.",
    "保存在设备上的数据": "Data stored on your device",
    "为提供核心功能，水滴伙伴会在设备本机及本机 App Group 容器中保存：": "To provide core features, Water Buddy stores the following on your device and in its local App Group container:",
    "今日饮水量、每日目标和最近一次记录时间；": "Today’s intake, daily goal, and the time of the most recent entry;",
    "提醒间隔、通知开关状态；": "Reminder interval and notification setting;",
    "当前主题和 App 内语言选择。": "Current theme and in-app language selection.",
    "这些数据仅用于 App、小组件和 Live Activity 的展示与本地提醒。卸载 App 通常会删除 App 自身保存的数据；系统对小组件容器和备份的处理可能受 iOS 设置影响。": "This data is used only for display in the app, widgets, and Live Activity, and for local reminders. Uninstalling the app normally deletes data stored by the app; iOS settings may affect how widget containers and backups are handled.",
    "通过 Firebase 处理的数据": "Data processed through Firebase",
    "App 集成 Google 提供的 Firebase Analytics 和 Firebase Crashlytics。根据当前实现和 Firebase 的公开说明，相关数据包括：": "The app integrates Google’s Firebase Analytics and Firebase Crashlytics. Based on the current implementation and Firebase’s public documentation, the relevant data includes:",
    "服务": "Service",
    "数据类型": "Data type",
    "用途": "Purpose",
    "App 实例标识符、App 启动和生命周期等产品交互、设备与 App 基本信息，以及由掩码 IP 推导的大致区域": "App instance identifiers; product interactions such as app launches and lifecycle events; basic device and app information; and approximate region derived from a masked IP address",
    "衡量基本使用情况，了解版本和设备分布，改进产品体验": "Measure basic usage, understand version and device distribution, and improve the product experience",
    "安装标识符、崩溃堆栈、崩溃时的相关 App 状态、设备型号与操作系统信息，以及开发者记录的诊断日志": "Installation identifiers, crash stacks, relevant app state at the time of a crash, device model and operating-system information, and developer-recorded diagnostic logs",
    "定位崩溃、评估影响范围并提高稳定性": "Identify crashes, assess their impact, and improve stability",
    "我们不会向 Firebase 发送你的饮水量、每日目标、姓名、电子邮箱或账号信息。App 当前没有账号系统，也不会主动设置可识别自然人的 Firebase User ID。": "We do not send your hydration amount, daily goal, name, email address, or account information to Firebase. The app currently has no account system and does not intentionally set a Firebase User ID that identifies a person.",
    "我们如何使用这些数据": "How we use this data",
    "提供、维护和改进水滴伙伴的功能；": "Provide, maintain, and improve Water Buddy’s features;",
    "了解 App 是否能够正常启动和运行；": "Understand whether the app starts and runs correctly;",
    "诊断崩溃与非致命错误，提升稳定性；": "Diagnose crashes and non-fatal errors to improve stability;",
    "履行适用法律、平台规则和安全义务。": "Meet applicable legal, platform, and security obligations.",
    "我们不会出售或出租数据，不会用这些数据展示定向广告，也不会把这些数据与其他公司收集的数据结合起来做广告追踪。": "We do not sell or rent data, use it to show targeted advertising, or combine it with data collected by other companies for advertising tracking.",
    "第三方处理、保留与跨境": "Third-party processing, retention, and international transfers",
    "Google 作为 Firebase 服务提供商处理上述分析和诊断数据。Firebase 服务可能在 Google 或其服务商运营设施的国家或地区处理数据。数据保留时间取决于 Firebase 服务及项目配置；例如，Google 说明 Crashlytics 的崩溃堆栈和相关标识符通常保留 90 天后开始从在线及备份系统移除。": "Google processes the analytics and diagnostic data described above as the Firebase service provider. Firebase services may process data in countries or regions where Google or its service providers operate facilities. Retention depends on the Firebase service and project configuration; for example, Google states that Crashlytics crash stacks and related identifiers are generally retained for 90 days before removal begins from online and backup systems.",
    "你可以查看": "You can review",
    "Firebase 隐私与安全说明": "Firebase Privacy and Security",
    "Firebase 的 Apple 平台数据披露说明": "Firebase’s Apple platform data-disclosure guidance",
    "及": "and",
    "Google 隐私权政策": "Google Privacy Policy",
    "除服务提供商、法律要求、保护权利与安全，或业务转让所必需的情形外，我们不会向其他方披露数据。": "We do not disclose data to other parties except as necessary for service providers, legal requirements, protection of rights and safety, or a business transfer.",
    "你的选择与权利": "Your choices and rights",
    "你可以在 iOS 系统设置中关闭通知权限；核心记录功能仍可使用。": "You can disable notification permission in iOS Settings; core logging features remain available.",
    "你可以在 App 内重置今天的饮水数据，或卸载 App 删除其本地数据。": "You can reset today’s hydration data in the app or uninstall the app to remove its local data.",
    "如需咨询、请求访问或删除我们能够控制的数据，可通过下方邮箱联系我们。由于 App 不要求账号，我们可能无法把 Firebase 中去标识化或按安装标识符组织的数据与你的身份对应。": "To ask a question or request access to or deletion of data we control, contact us using the email below. Because the app does not require an account, we may be unable to associate de-identified Firebase data or data organized by installation identifier with your identity.",
    "官网数据": "Website data",
    "本官网不设置分析工具、广告脚本或营销 Cookie。网站由 Vercel 托管；为传输页面、防止滥用和保障安全，托管服务可能处理 IP 地址、User-Agent 和请求日志等必要网络信息。详情请查看": "This website uses no analytics tools, advertising scripts, or marketing cookies. It is hosted by Vercel, which may process necessary network information such as IP addresses, User-Agent strings, and request logs to deliver pages, prevent abuse, and maintain security. See the",
    "Vercel 隐私政策": "Vercel Privacy Policy",
    "网站会在你的浏览器本机保存语言与主题选择，仅用于在下次访问时恢复偏好，不会由网站脚本发送到服务器。": "The website stores your language and theme choices locally in your browser only to restore them on your next visit. Website scripts do not send these preferences to a server.",
    "水滴伙伴面向普通用户提供喝水记录功能，不包含社交、广告或账号系统，也不会有意收集儿童的姓名、联系方式或饮水记录。如果你认为儿童向我们提供了个人信息，请联系我们处理。": "Water Buddy provides hydration logging for a general audience. It has no social features, advertising, or account system, and does not knowingly collect children’s names, contact details, or hydration records. If you believe a child has provided personal information to us, please contact us.",
    "政策更新": "Policy updates",
    "当功能、第三方服务或法律要求发生变化时，我们可能更新本政策。更新后的版本会在本页标注新的生效日期；如变化重大，我们会在合理可行的范围内提供额外提示。": "We may update this policy when features, third-party services, or legal requirements change. The updated version will show a new effective date on this page; for material changes, we will provide additional notice where reasonably practicable.",
    "如果你对本政策或数据处理方式有疑问，请发送邮件至": "If you have questions about this policy or our data practices, email",
    "，或访问": ", or visit the",
    "支持页面": "Support page",
    "详情见": "See the",
    "。": ".",
    "、": ","
  },
  ja: {
    "水滴伙伴 · 轻松记录每天喝水节奏": "Water Buddy · 毎日の水分補給をもっと気軽に",
    "水滴伙伴是一款轻量、卡通、专注今天补水节奏的 iOS App。记录喝水、设置温柔提醒，并把进度放到桌面和锁屏。": "Water Buddyは、今日の水分補給のリズムに寄り添う、軽やかで楽しいiOSアプリです。飲んだ水を記録し、やさしいリマインダーを設定して、進捗をホーム画面やロック画面で確認できます。",
    "不用账号，不制造压力。让可爱的水滴伙伴陪你照顾今天的补水节奏。": "アカウントもプレッシャーも不要。かわいいWater Buddyと一緒に、今日の水分補給を整えましょう。",
    "跳到主要内容": "メインコンテンツへ移動",
    "主导航": "メインナビゲーション",
    "水滴伙伴首页": "Water Buddy ホーム",
    "页面章节": "ページ内セクション",
    "网站资料": "サイト情報",
    "功能": "機能",
    "小组件": "ウィジェット",
    "隐私": "プライバシー",
    "更新日志": "更新履歴",
    "支持": "サポート",
    "隐私政策": "プライバシーポリシー",
    "官网": "公式サイト",
    "返回官网": "公式サイトへ戻る",
    "联系我们": "お問い合わせ",
    "换个主题": "テーマを変更",
    "池塘蓝": "ポンドブルー",
    "抹茶绿": "抹茶グリーン",
    "深海青": "ディープラグーン",
    "选择网站语言": "サイトの言語を選択",
    "为 iPhone 设计": "iPhoneのためにデザイン",
    "先喝一杯，": "まずはひと口。",
    "今天会轻一点。": "今日が少し軽やかに。",
    "水滴伙伴帮你快速记录喝水、安排温柔提醒，并把今天的水位同步到主屏、锁屏与 Live Activity。": "Water Buddyなら、飲んだ水をすばやく記録し、やさしいリマインダーを設定できます。今日の進捗はホーム画面、ロック画面、ライブアクティビティにも同期されます。",
    "在 App Store 下载": "App Storeからダウンロード",
    "认识水滴伙伴": "Water Buddyを知る",
    "App Store 已上线 · 免费下载 · 支持中文、English、한국어、日本語": "App Storeで配信中 · 無料ダウンロード · 中国語、英語、日本語、韓国語に対応",
    "水滴伙伴 App 界面预览": "Water Buddyアプリのプレビュー",
    "水滴伙伴最新首页，展示 700 ml 饮水量、2,400 ml 目标、29% 水位和下一杯提醒": "700 mlの記録、2,400 mlの目標、29%の進捗、次の一杯のリマインダーを表示するWater Buddyのホーム画面",
    "700 ml 已记下，下一杯还有 18 分钟。": "700 mlを記録しました。次の一杯まであと18分です。",
    "简单，但刚刚好": "シンプルで、ちょうどいい",
    "把补水变成今天的一件小事": "水分補給を、今日の小さな習慣に",
    "不做复杂报表，也不催你焦虑。只保留真正能帮你坚持的节奏。": "複雑なレポートも、焦らせる通知もありません。続けるために本当に必要なリズムだけを残しました。",
    "一按就记下": "ワンタップで記録",
    "“喝一杯”或“小口补水”，两种入口快速更新今天的水位。": "「一杯飲む」と「ひと口飲む」から、今日の水分量をすばやく更新できます。",
    "温柔地提醒": "やさしくお知らせ",
    "按你的节奏设置本地通知。完成目标后，让提醒也休息一下。": "自分のペースに合わせてローカル通知を設定。目標を達成したら、その日のリマインダーもお休みします。",
    "抬眼就看见": "ひと目で確認",
    "主屏小组件、锁屏小组件与 Live Activity，随时看到今日进度。": "ホーム画面とロック画面のウィジェット、ライブアクティビティで、今日の進捗をいつでも確認できます。",
    "不用打开 App，也能继续": "アプリを開かなくても続けられる",
    "主屏、锁屏，都是同一个水位实验室": "ホーム画面もロック画面も、ひとつの水分ラボ",
    "今天喝了多少、下一杯还有多久，以及快捷记录入口，都能放到最顺手的位置。": "今日飲んだ量、次の一杯までの時間、クイック記録を、いちばん使いやすい場所に置けます。",
    "水滴伙伴主屏 Small 与 Medium 小组件，展示 29% 饮水进度、量杯和快捷记录按钮": "29%の進捗、計量カップ、クイック記録ボタンを表示するWater BuddyのSmall・Mediumホーム画面ウィジェット",
    "Small 看水位，Medium 看节奏": "Smallで進捗、Mediumでリズムを確認",
    "一眼查看 700 / 2,400 ml，直接“喝一杯”或“小口补水”；中号组件还会显示下一杯倒计时。": "700 / 2,400 mlをひと目で確認し、「一杯飲む」または「ひと口飲む」を直接記録。Mediumでは次の一杯までのカウントダウンも表示します。",
    "水滴伙伴锁屏圆形、矩形小组件与 Live Activity，展示水位、目标和下一杯提醒": "進捗、目標、次の一杯のリマインダーを表示するWater Buddyの円形・長方形ロック画面ウィジェットとライブアクティビティ",
    "抬起手机，就知道下一口什么时候": "iPhoneを持ち上げれば、次のひと口がわかる",
    "圆形和矩形锁屏小组件负责快速扫读，Live Activity 把 29% 水位、18 分钟倒计时和今日目标留在锁屏。": "円形と長方形のウィジェットで素早く確認。ライブアクティビティには29%の進捗、18分のカウントダウン、今日の目標が表示されます。",
    "隐私说明": "プライバシーについて",
    "你的喝水记录，留在你的设备。": "水分補給の記録は、あなたのデバイスだけに。",
    "不需要账号。今日饮水量、目标、提醒和主题保存在本机，并通过本机 App Group 与小组件共享。": "アカウントは不要です。今日の摂取量、目標、リマインダー、テーマはデバイス内に保存され、ローカルのApp Groupを通じてウィジェットと共有されます。",
    "查看完整隐私政策": "プライバシーポリシーを読む",
    "不上传": "アップロードしません",
    "你的饮水记录或每日目标": "水分補給の記録や毎日の目標を",
    "不出售": "販売しません",
    "个人数据，也不用于广告追踪": "個人データを。広告トラッキングにも使用しません",
    "会收集": "収集するのは",
    "有限的 App 使用事件与崩溃诊断，用于改进体验": "体験改善のための限定的なアプリ使用イベントとクラッシュ診断のみです",
    "今天，再喝一口。": "今日、もうひと口。",
    "水滴伙伴现已在 App Store 上线，也欢迎通过 TestFlight 抢先体验后续更新。": "Water BuddyはApp Storeで配信中です。TestFlightでは今後のアップデートを先行体験できます。",
    "前往 App Store": "App Storeで見る",
    "加入 TestFlight": "TestFlightに参加",
    "Water Buddy. 为轻松一点的今天设计。": "Water Buddy. 今日を少し軽やかにするために。",

    "更新日志 · 水滴伙伴": "更新履歴 · Water Buddy",
    "水滴伙伴更新日志：查看 App Store 首发版本与 TestFlight 构建的核心功能变化。": "Water Buddyの更新履歴：App Store版とTestFlightビルドの主な変更点を確認できます。",
    "水滴伙伴 0.1.1 更新记录：让 App、通知、组件、Live Activity 与 Watch 使用一致语言，并持续刷新下一杯倒计时。": "Water Buddy 0.1.1：アプリ、通知、ウィジェット、ライブアクティビティ、Watchの言語を統一し、次の一杯までのカウントダウンを継続更新。",
    "每一版，都让补水更顺一点。": "アップデートのたびに、水分補給をもっとスムーズに。",
    "水滴伙伴 0.1.1 已在 App Store 上线。这里不写补丁流水账，只记录真正影响日常使用的功能与体验升级。": "Water Buddy 0.1.1はApp Storeで配信中です。細かな修正の羅列ではなく、日々の使い心地を本当に変える機能と体験だけを記録します。",
    "查看 0.1.1 变化": "0.1.1の変更点を見る",
    "App Store 当前版本": "App Store最新バージョン",
    "2026 年 7 月 13 日": "2026年7月13日",
    "水滴伙伴当前主屏小组件，展示饮水进度和快捷记录": "水分補給の進捗とクイック記録を表示する現在のWater Buddyホーム画面ウィジェット",
    "版本与构建记录": "バージョンとビルド履歴",
    "从第一杯，到每个系统表面都保持一致": "最初の一杯から、すべてのシステム画面で一貫した体験へ",
    "0.1.1（Build 33）是 App Store 当前版本；也可通过 TestFlight 抢先体验后续更新。": "0.1.1（Build 33）はApp Storeの最新バージョンです。TestFlightでは今後のアップデートを先行体験できます。",
    "让每一种语言和每一秒倒计时都跟得上": "すべての言語と、カウントダウンの一秒一秒を正確に",
    "0.1.1 聚焦系统表面的语言一致性与实时状态更新，让 App 内的选择可靠地延伸到提醒、组件、实时活动和手表。": "0.1.1では、システム画面の言語統一とリアルタイム更新に注力しました。アプリ内の設定が、リマインダー、ウィジェット、ライブアクティビティ、Apple Watchまで確実に反映されます。",
    "语言选择贯通所有表面": "すべての画面で同じ言語を使用",
    "App、通知、主屏与锁屏组件、Live Activity 和 Watch 同步使用 App 内选择的简中、英文、日文或韩文。": "アプリ、通知、ホーム・ロック画面ウィジェット、ライブアクティビティ、Watchで、アプリ内で選んだ中国語、英語、日本語、韓国語が使われます。",
    "最新状态不被旧任务覆盖": "古い処理が最新の状態を上書きしない",
    "按顺序刷新通知与实时活动，避免较早的本地化任务覆盖刚刚更新的饮水量或提醒状态。": "通知とライブアクティビティを順番に更新し、以前のローカライズ処理が最新の摂取量やリマインダー状態を上書きしないようにしました。",
    "下一杯倒计时持续前进": "次の一杯までのカウントダウンが止まらない",
    "Live Activity 与组件使用系统时间推进，分钟内也能保持及时、易读的下一杯状态。": "ライブアクティビティとウィジェットがシステム時刻に合わせて進み、1分未満の変化も読みやすく最新の状態を保ちます。",
    "组件配置打开更稳定": "ウィジェット設定をより安定して表示",
    "修复本地化环境下打开 Widget 配置时可能发生的崩溃，并补齐对应回归检查。": "ローカライズ環境でウィジェット設定を開いた際に発生することがあったクラッシュを修正し、回帰テストを追加しました。",
    "App Store 首发版本": "App Store初回リリース",
    "水滴伙伴，正式和更多人见面": "Water Buddyが正式に、より多くの人のもとへ",
    "首发版把快速记录、温柔提醒和系统组件整理成一套完整体验，并完成发布前的稳定性、隐私与多语言收尾。": "初回リリースでは、クイック記録、やさしいリマインダー、システム画面をひとつの体験にまとめ、安定性、プライバシー、多言語対応を仕上げました。",
    "轻松记下一杯": "一杯を気軽に記録",
    "快速记录“喝一杯”或“小口补水”，设置每日目标，并在需要时撤回上一笔。": "「一杯飲む」または「ひと口飲む」をすばやく記録し、毎日の目標を設定。必要なら直前の記録を取り消せます。",
    "提醒有节奏，也会休息": "リマインダーも自分のリズムで、休むときは休む",
    "支持本地提醒、专注结束后的可选补水提醒；达到目标后当天不再打扰。": "ローカルリマインダーと、集中モード終了後の任意の水分補給通知に対応。目標達成後はその日の通知を停止します。",
    "水位来到更多地方": "水分量をもっと多くの場所で",
    "主屏与锁屏小组件、Live Activity 和 Apple Watch 都能查看进度或快速补记。": "ホーム・ロック画面ウィジェット、ライブアクティビティ、Apple Watchから進捗確認やクイック記録ができます。",
    "为正式发布做稳": "正式リリースに向けた安定化",
    "完善数据迁移、跨日期状态、导航手势和多语言显示；饮水记录与偏好仍保存在本机。": "データ移行、日付をまたぐ状態、ナビゲーションジェスチャ、多言語表示を改善。水分補給の記録と設定は引き続きデバイス内に保存されます。",
    "发布收尾测试": "リリース最終テスト",
    "把发布前的控制权交还给你": "リリース前に、操作の主導権をあなたへ",
    "这一版集中完成隐私、系统功能与提醒节奏的发布级收尾，也让小组件更接近真正的桌面水位卡片。": "このビルドでは、プライバシー、システム機能、リマインダーのリズムをリリース品質に仕上げ、ウィジェットを本物の水分カードに近づけました。",
    "目标完成，提醒休息": "目標達成後はリマインダーも休憩",
    "达到每日目标后暂停当天后续提醒，第二天再恢复节奏。": "毎日の目標を達成すると、その日のリマインダーを停止し、翌日に再開します。",
    "独立控制 Live Activity": "ライブアクティビティを個別に制御",
    "可以关闭锁屏实时活动，同时保留普通通知与小组件。": "通常の通知とウィジェットを残したまま、ロック画面のライブアクティビティだけをオフにできます。",
    "隐私和数据操作更清楚": "プライバシーとデータ操作をより明確に",
    "集中说明本机数据与 Firebase 诊断，并完善撤回、重置和跨日期状态。": "デバイス内データとFirebase診断を明確に説明し、取り消し、リセット、日付変更時の状態を改善しました。",
    "组件铺满可用空间": "ウィジェットが利用可能な領域を最大限に活用",
    "主屏组件采用更完整的全幅布局，修正预览尺寸和交互反馈。": "ホーム画面ウィジェットをより完全な全幅レイアウトにし、プレビューサイズと操作フィードバックを修正しました。",
    "系统体验扩展": "システム体験の拡張",
    "水位走出 App，来到手腕与锁屏": "水分量がアプリを飛び出し、手首とロック画面へ",
    "功能从 iPhone 页面扩展到更多系统表面，同时完成“水滴实验室”视觉重构与七套主题的深浅色适配。": "iPhoneの画面からより多くのシステム画面へ機能を拡張し、「Water Lab」のビジュアル刷新と7つのテーマのライト・ダーク対応を行いました。",
    "Apple Watch 记录与同步": "Apple Watchでの記録と同期",
    "在手表查看今日水量、目标和剩余量，也能快速补记一杯或一小口。": "Watchで今日の摂取量、目標、残りを確認し、一杯またはひと口をすばやく記録できます。",
    "专注结束后的可选补水": "集中モード終了後の任意の水分補給",
    "通过 Focus Filter 在一次专注结束后安排轻量本地提醒。": "Focus Filterを使って、集中モード終了後に軽いローカルリマインダーを設定できます。",
    "锁屏倒计时持续更新": "更新し続けるロック画面カウントダウン",
    "重做 Live Activity 和锁屏组件，让下一杯时间与今日进度更容易扫读。": "ライブアクティビティとロック画面ウィジェットを刷新し、次の一杯までの時間と今日の進捗を見やすくしました。",
    "水滴实验室与七套主题": "Water Labと7つのテーマ",
    "首页、组件、通知和 Watch 统一卡通视觉，并完成深色模式适配。": "ホーム画面、ウィジェット、通知、Watchの楽しいビジュアルを統一し、ダークモードに対応しました。",
    "交互与兼容性": "操作性と互換性",
    "让第一套体验更像原生 iOS App": "最初の体験を、よりネイティブなiOSアプリらしく",
    "这个里程碑没有堆叠新页面，重点是把已有流程做稳：返回手势、目标边界和锁屏可读性都更符合系统习惯。": "このマイルストーンでは新しい画面を増やさず、既存の流れを安定化。戻るジェスチャ、目標の境界、ロック画面の読みやすさをiOSらしく整えました。",
    "原生边缘侧滑返回": "ネイティブな画面端スワイプで戻る",
    "二级和三级页面保留主题返回图标，也支持符合 iOS 习惯的交互式侧滑。": "2階層目・3階層目の画面ではテーマ付きの戻るアイコンを保ちつつ、iOSらしいインタラクティブな端スワイプにも対応します。",
    "完成目标后仍可记录": "目標達成後も記録可能",
    "进度显示封顶于 100%，但真实饮水量仍能继续增加。": "進捗表示は100%が上限ですが、実際の摂取量は引き続き追加できます。",
    "锁屏对比度与安全区修正": "ロック画面のコントラストとセーフエリアを修正",
    "改善浅色、深色和不同渲染模式下的文本与水位可读性。": "ライト、ダーク、さまざまなレンダリングモードで、文字と水分量の読みやすさを改善しました。",
    "发布配置补齐": "リリース設定を完備",
    "补充出口合规声明与稳定的 Bundle 配置，为外部测试做准备。": "輸出コンプライアンス申告と安定したBundle設定を追加し、外部テストに備えました。",
    "第一个可用版本": "最初の実用バージョン",
    "先把“记下一杯”这件事做完整": "まずは「一杯を記録する」体験を完成させる",
    "水滴伙伴第一次形成完整使用闭环：从新手引导、快速记录，到提醒和系统组件，都围绕“今天”展开。": "Water Buddyで初めて、オンボーディング、クイック記録、リマインダー、システム画面まで、「今日」を中心とした一連の体験が完成しました。",
    "喝一杯、小口补水与撤回": "一杯、ひと口、取り消し",
    "用固定的 200 ml、100 ml 和撤回操作快速更新今日水量。": "200 ml、100 mlの固定量と取り消し操作で、今日の摂取量をすばやく更新できます。",
    "每日目标与温柔提醒": "毎日の目標とやさしいリマインダー",
    "设置目标和提醒间隔，用本地通知维持自己的补水节奏。": "目標と通知間隔を設定し、ローカル通知で自分の水分補給リズムを保てます。",
    "主屏、锁屏与实时活动": "ホーム画面、ロック画面、ライブアクティビティ",
    "不用进入 App，也能查看进度、下一杯状态或直接记录。": "アプリを開かずに、進捗や次の一杯の状態を確認したり、直接記録したりできます。",
    "四种语言与卡通主题": "4言語と楽しいテーマ",
    "支持简中、英文、日文和韩文，并提供 App 内语言与主题切换。": "簡体字中国語、英語、日本語、韓国語に対応し、アプリ内で言語とテーマを切り替えられます。",
    "版本说明": "バージョンについて",
    "关于这些版本号": "バージョン番号について",
    "0.1.0 建立首个完整体验，0.1.1 集中完善本地化与系统组件稳定性。Build 代表构建里程碑，同一 Build 可在发布准备期间对应新的用户版本；日期来自版本配置与 Git 历史。": "0.1.0で最初の完全な体験を構築し、0.1.1ではローカライズとシステム画面の安定性を改善しました。Buildは開発上のマイルストーンです。リリース準備中は同じBuildが新しいユーザー向けバージョンに対応する場合があります。日付はバージョン設定とGit履歴に基づきます。",
    "已经见面，也想继续听见你的声音": "出会ったあとも、あなたの声を聞かせてください",
    "下载 0.1.1，把你的补水节奏带回家。": "0.1.1をダウンロードして、水分補給のリズムを日常へ。",
    "发送反馈": "フィードバックを送る",
    "Water Buddy. 已在 App Store 上线。": "Water Buddy. App Storeで配信中。",
    "mailto:support@microspotlight.team?subject=Water%20Buddy%200.1.1%20反馈": "mailto:support@microspotlight.team?subject=Water%20Buddy%200.1.1%20フィードバック",

    "支持中心 · 水滴伙伴": "サポートセンター · Water Buddy",
    "水滴伙伴支持中心：常见问题、联系邮箱与隐私政策。": "Water Buddyサポートセンター：よくある質問、お問い合わせ先、プライバシーポリシー。",
    "支持中心": "サポートセンター",
    "遇到问题、想提出建议，或者只是想和水滴伙伴打个招呼，都可以在这里找到我们。": "問題が起きたとき、提案があるとき、あるいはWater Buddyに挨拶したいだけでも、ここからご連絡いただけます。",
    "发送邮件": "メールを送る",
    "mailto:support@microspotlight.team?subject=Water%20Buddy%20支持": "mailto:support@microspotlight.team?subject=Water%20Buddy%20サポート",
    "常见问题": "よくある質問",
    "先从这里找答案": "まずはこちらをご確認ください",
    "如何记录喝水？": "水分を記録するには？",
    "在首页点击“喝一杯”记录 200 ml，或点击“小口补水”记录 100 ml。你也可以通过小组件按钮快速记录。": "ホーム画面で「一杯飲む」をタップすると200 ml、「ひと口飲む」をタップすると100 mlを記録できます。ウィジェットのボタンからもすばやく記録できます。",
    "如何调整每日目标？": "毎日の目標を変更するには？",
    "进入“我的水滴”，在快捷设置中拖动每日目标进度条，即可调整当天补水目标。": "「マイバディ」を開き、クイック設定で毎日の目標スライダーを動かすと、その日の水分補給目標を調整できます。",
    "如何开启提醒？": "リマインダーを有効にするには？",
    "进入“我的水滴”，允许 iOS 通知并设置提醒间隔。提醒由系统本地通知发送。": "「マイバディ」を開き、iOSの通知を許可して通知間隔を設定します。リマインダーはシステムのローカル通知として届きます。",
    "小组件为什么没更新？": "ウィジェットが更新されないのはなぜ？",
    "请先打开 App 记录一次饮水或调整设置。系统会自动刷新小组件；某些情况下 iOS 可能延迟刷新。": "まずアプリを開き、水分を記録するか設定を変更してください。システムが自動的にウィジェットを更新しますが、iOSによって更新が遅れる場合があります。",
    "支持哪些语言？": "対応言語は？",
    "水滴伙伴支持简体中文、English、한국어 和日本語，可在 App 内切换。": "Water Buddyは簡体字中国語、英語、韓国語、日本語に対応し、アプリ内で切り替えられます。",
    "我的饮水记录会上云吗？": "水分補給の記録はクラウドに送信されますか？",
    "不会。饮水记录、目标和提醒设置保存在设备本机。有限的 App 使用事件与崩溃诊断会通过 Firebase 处理，详情见": "いいえ。水分補給の記録、目標、リマインダー設定はデバイス内に保存されます。限定的なアプリ使用イベントとクラッシュ診断はFirebaseで処理されます。詳しくは",
    "版本 0.1.1 · Bundle ID: team.MicroSpotlight.WaterBuddy": "バージョン 0.1.1 · Bundle ID: team.MicroSpotlight.WaterBuddy",

    "隐私政策 · 水滴伙伴": "プライバシーポリシー · Water Buddy",
    "水滴伙伴隐私政策：了解本机饮水数据、Firebase Analytics 与 Crashlytics 的数据处理方式。": "Water Buddyプライバシーポリシー：デバイス内の水分補給データ、Firebase Analytics、Crashlyticsのデータ処理について。",
    "水滴伙伴不需要账号，也不会把你的饮水记录上传到服务器。为了解 App 的基本使用情况并修复崩溃，我们会通过 Firebase 处理有限的使用数据与诊断数据。": "Water Buddyはアカウントを必要とせず、水分補給の記録をサーバーへアップロードしません。アプリの基本的な利用状況を把握し、クラッシュを修正するため、Firebaseを通じて限定的な利用データと診断データを処理します。",
    "生效日期：2026 年 7 月 10 日": "発効日：2026年7月10日",
    "适用版本：0.1.0 及后续版本": "対象：バージョン0.1.0以降",
    "本页目录": "このページの目次",
    "摘要": "概要",
    "本机数据": "デバイス内データ",
    "远程数据": "リモートデータ",
    "使用方式": "利用目的",
    "共享与保留": "共有と保持",
    "你的选择": "選択肢",
    "儿童隐私": "子どものプライバシー",
    "先说重点": "要点",
    "饮水量、目标、提醒设置、主题与语言保存在你的设备上，不会上传给我们或 Firebase。": "摂取量、目標、リマインダー設定、テーマ、言語はデバイスに保存され、当社やFirebaseへアップロードされません。",
    "App 不需要注册或登录，不展示第三方广告，也不将数据用于跨 App 或跨网站追踪。": "アプリは登録やログインを必要とせず、第三者広告を表示しません。また、アプリやウェブサイトをまたぐトラッキングにデータを使用しません。",
    "Firebase Analytics 会处理 App 使用事件；Firebase Crashlytics 会在崩溃时处理诊断数据。": "Firebase Analyticsはアプリ使用イベントを処理し、Firebase Crashlyticsはクラッシュ発生時に診断データを処理します。",
    "保存在设备上的数据": "デバイスに保存されるデータ",
    "为提供核心功能，水滴伙伴会在设备本机及本机 App Group 容器中保存：": "主要機能を提供するため、Water BuddyはデバイスとローカルのApp Groupコンテナに次の情報を保存します。",
    "今日饮水量、每日目标和最近一次记录时间；": "今日の摂取量、毎日の目標、直近の記録時刻",
    "提醒间隔、通知开关状态；": "リマインダー間隔、通知のオン・オフ状態",
    "当前主题和 App 内语言选择。": "現在のテーマとアプリ内の言語設定",
    "这些数据仅用于 App、小组件和 Live Activity 的展示与本地提醒。卸载 App 通常会删除 App 自身保存的数据；系统对小组件容器和备份的处理可能受 iOS 设置影响。": "これらのデータは、アプリ、ウィジェット、ライブアクティビティでの表示とローカルリマインダーにのみ使用されます。通常、アプリをアンインストールするとアプリが保存したデータは削除されますが、ウィジェットコンテナやバックアップの扱いはiOSの設定に影響される場合があります。",
    "通过 Firebase 处理的数据": "Firebaseで処理されるデータ",
    "App 集成 Google 提供的 Firebase Analytics 和 Firebase Crashlytics。根据当前实现和 Firebase 的公开说明，相关数据包括：": "アプリはGoogleが提供するFirebase AnalyticsとFirebase Crashlyticsを組み込んでいます。現在の実装とFirebaseの公開情報に基づき、関連データには次が含まれます。",
    "服务": "サービス",
    "数据类型": "データの種類",
    "用途": "目的",
    "App 实例标识符、App 启动和生命周期等产品交互、设备与 App 基本信息，以及由掩码 IP 推导的大致区域": "アプリインスタンス識別子、アプリ起動やライフサイクルなどの操作、デバイスとアプリの基本情報、マスクされたIPアドレスから推定されるおおよその地域",
    "衡量基本使用情况，了解版本和设备分布，改进产品体验": "基本的な利用状況、バージョンとデバイスの分布を把握し、製品体験を改善するため",
    "安装标识符、崩溃堆栈、崩溃时的相关 App 状态、设备型号与操作系统信息，以及开发者记录的诊断日志": "インストール識別子、クラッシュスタック、クラッシュ時の関連するアプリ状態、デバイスモデルとOS情報、開発者が記録した診断ログ",
    "定位崩溃、评估影响范围并提高稳定性": "クラッシュの特定、影響範囲の評価、安定性の向上",
    "我们不会向 Firebase 发送你的饮水量、每日目标、姓名、电子邮箱或账号信息。App 当前没有账号系统，也不会主动设置可识别自然人的 Firebase User ID。": "水分摂取量、毎日の目標、氏名、メールアドレス、アカウント情報をFirebaseへ送信することはありません。現在アカウントシステムはなく、個人を特定できるFirebase User IDを意図的に設定することもありません。",
    "我们如何使用这些数据": "データの利用方法",
    "提供、维护和改进水滴伙伴的功能；": "Water Buddyの機能を提供、維持、改善するため",
    "了解 App 是否能够正常启动和运行；": "アプリが正常に起動・動作しているか把握するため",
    "诊断崩溃与非致命错误，提升稳定性；": "クラッシュや非致命的エラーを診断し、安定性を高めるため",
    "履行适用法律、平台规则和安全义务。": "適用される法律、プラットフォーム規則、安全上の義務を遵守するため",
    "我们不会出售或出租数据，不会用这些数据展示定向广告，也不会把这些数据与其他公司收集的数据结合起来做广告追踪。": "データを販売または貸与せず、ターゲティング広告の表示に使用しません。また、他社が収集したデータと組み合わせて広告トラッキングを行いません。",
    "第三方处理、保留与跨境": "第三者による処理、保持、国外移転",
    "Google 作为 Firebase 服务提供商处理上述分析和诊断数据。Firebase 服务可能在 Google 或其服务商运营设施的国家或地区处理数据。数据保留时间取决于 Firebase 服务及项目配置；例如，Google 说明 Crashlytics 的崩溃堆栈和相关标识符通常保留 90 天后开始从在线及备份系统移除。": "GoogleはFirebaseサービス提供者として、上記の分析データと診断データを処理します。Firebaseサービスは、Googleまたはそのサービス提供者が施設を運営する国や地域でデータを処理する場合があります。保持期間はFirebaseサービスとプロジェクト設定によって異なります。たとえばGoogleは、Crashlyticsのクラッシュスタックと関連識別子を通常90日間保持し、その後オンラインおよびバックアップシステムから削除を開始すると説明しています。",
    "你可以查看": "詳しくは",
    "Firebase 隐私与安全说明": "Firebaseのプライバシーとセキュリティ",
    "Firebase 的 Apple 平台数据披露说明": "FirebaseのAppleプラットフォーム向けデータ開示ガイダンス",
    "及": "および",
    "Google 隐私权政策": "Googleプライバシーポリシー",
    "除服务提供商、法律要求、保护权利与安全，或业务转让所必需的情形外，我们不会向其他方披露数据。": "サービス提供者、法的要請、権利と安全の保護、事業譲渡に必要な場合を除き、他の第三者へデータを開示しません。",
    "你的选择与权利": "選択肢と権利",
    "你可以在 iOS 系统设置中关闭通知权限；核心记录功能仍可使用。": "iOSの設定で通知権限をオフにできます。主要な記録機能は引き続き利用できます。",
    "你可以在 App 内重置今天的饮水数据，或卸载 App 删除其本地数据。": "アプリ内で今日の水分補給データをリセットするか、アプリをアンインストールしてローカルデータを削除できます。",
    "如需咨询、请求访问或删除我们能够控制的数据，可通过下方邮箱联系我们。由于 App 不要求账号，我们可能无法把 Firebase 中去标识化或按安装标识符组织的数据与你的身份对应。": "お問い合わせ、当社が管理できるデータへのアクセスまたは削除のご依頼は、下記のメールアドレスへご連絡ください。アプリはアカウントを必要としないため、Firebase内の匿名化されたデータやインストール識別子で整理されたデータを、ご本人と結び付けられない場合があります。",
    "官网数据": "ウェブサイトのデータ",
    "本官网不设置分析工具、广告脚本或营销 Cookie。网站由 Vercel 托管；为传输页面、防止滥用和保障安全，托管服务可能处理 IP 地址、User-Agent 和请求日志等必要网络信息。详情请查看": "このウェブサイトでは、分析ツール、広告スクリプト、マーケティングCookieを使用しません。サイトはVercelによってホストされており、ページ配信、不正利用の防止、セキュリティ確保のため、IPアドレス、User-Agent、リクエストログなど必要なネットワーク情報を処理する場合があります。詳しくは",
    "Vercel 隐私政策": "Vercelプライバシーポリシー",
    "网站会在你的浏览器本机保存语言与主题选择，仅用于在下次访问时恢复偏好，不会由网站脚本发送到服务器。": "このウェブサイトは、次回訪問時に設定を復元する目的で、言語とテーマの選択をブラウザ内にのみ保存します。ウェブサイトのスクリプトがこれらの設定をサーバーへ送信することはありません。",
    "水滴伙伴面向普通用户提供喝水记录功能，不包含社交、广告或账号系统，也不会有意收集儿童的姓名、联系方式或饮水记录。如果你认为儿童向我们提供了个人信息，请联系我们处理。": "Water Buddyは一般の利用者向けに水分補給の記録機能を提供します。ソーシャル機能、広告、アカウントシステムはなく、子どもの氏名、連絡先、水分補給記録を意図的に収集しません。子どもが当社に個人情報を提供したと思われる場合は、ご連絡ください。",
    "政策更新": "ポリシーの更新",
    "当功能、第三方服务或法律要求发生变化时，我们可能更新本政策。更新后的版本会在本页标注新的生效日期；如变化重大，我们会在合理可行的范围内提供额外提示。": "機能、第三者サービス、法的要件が変わった場合、本ポリシーを更新することがあります。更新版には新しい発効日をこのページに表示し、重大な変更については合理的に可能な範囲で追加のお知らせを行います。",
    "如果你对本政策或数据处理方式有疑问，请发送邮件至": "本ポリシーまたはデータの取り扱いについてご質問がある場合は、",
    "，或访问": "までメールを送るか、",
    "支持页面": "サポートページ",
    "详情见": "詳しくは",
    "。": "。",
    "、": "、"
  },
  ko: window.WATER_BUDDY_TRANSLATIONS?.ko || {}
};

const languageSelects = [...document.querySelectorAll("[data-language-select]")];
const textSourceKeys = new WeakMap();
const attributeSourceKeys = new WeakMap();
const supportedLanguages = new Set(["zh-Hans", "en", "ja", "ko"]);

function normalizedLanguage(value) {
  if (!value) return null;
  const language = value.toLowerCase();
  if (language.startsWith("zh")) return "zh-Hans";
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("ko")) return "ko";
  if (language.startsWith("en")) return "en";
  return null;
}

function translatedValue(key, language) {
  if (language === "zh-Hans") return key;
  return siteTranslations[language]?.[key] || key;
}

function translatableTextNodes() {
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, .language-picker, [data-brand-name], [data-brand-english]")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function applyLanguage(language, persist = false) {
  const value = supportedLanguages.has(language) ? language : "zh-Hans";
  root.lang = value;

  translatableTextNodes().forEach((node) => {
    const source = textSourceKeys.get(node) || node.nodeValue.trim();
    textSourceKeys.set(node, source);
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translatedValue(source, value)}${trailing}`;
  });

  document.querySelectorAll("[aria-label], [alt], [title], meta[content], a[href^='mailto:']").forEach((element) => {
    const sourceMap = attributeSourceKeys.get(element) || {};
    ["aria-label", "alt", "title", "content", "href"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      sourceMap[attribute] ||= element.getAttribute(attribute);
      element.setAttribute(attribute, translatedValue(sourceMap[attribute], value));
    });
    attributeSourceKeys.set(element, sourceMap);
  });

  document.querySelectorAll("[data-brand-name]").forEach((node) => {
    node.textContent = value === "zh-Hans" ? "水滴伙伴" : "Water Buddy";
  });
  document.querySelectorAll("[data-brand-english]").forEach((node) => {
    node.hidden = value !== "zh-Hans";
  });
  languageSelects.forEach((select) => { select.value = value; });

  if (persist) {
    try {
      localStorage.setItem("water-buddy-site-language", value);
    } catch (_) {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", value);
    history.replaceState({}, "", url);
  }
}

const requestedLanguage = normalizedLanguage(new URLSearchParams(window.location.search).get("lang"));
let initialLanguage = requestedLanguage;
if (!initialLanguage) {
  try {
    initialLanguage = normalizedLanguage(localStorage.getItem("water-buddy-site-language"));
  } catch (_) {}
}
if (!initialLanguage) {
  initialLanguage = (navigator.languages || [navigator.language]).map(normalizedLanguage).find(Boolean) || "en";
}

languageSelects.forEach((select) => {
  select.addEventListener("change", (event) => applyLanguage(event.target.value, true));
});
applyLanguage(initialLanguage, Boolean(requestedLanguage));
