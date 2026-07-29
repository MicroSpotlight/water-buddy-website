# Water Buddy · Product Facts

> Verified: 2026-07-29
> Sources: local repository release notes and App Store submission material; `docs/releases/0.2.0.md`; `docs/releases/0.3.0.md`; `docs/releases/0.3.1.md`; `docs/releases/0.4.0.md`; `app-store/0.3.1/README.md`; `app-store/0.4.0/README.md`; `app-store/metadata/submission.md`; `app-store/metadata/version-update.md`; `app-store/privacy/privacy-policy-update.md`; `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`; `https://testflight.apple.com/join/rqmHh69r`

- Product: 水滴伙伴 / Water Buddy
- Platform: iOS
- Website release focus: 0.3.1, released on the App Store
- 0.2.0 status for website copy: released on the App Store / 已在 App Store 发布
- 0.2.1 status for website copy: previous public App Store version / 上一公开版本
- 0.3.0 status for website copy: previous public App Store version / 上一公开版本
- 0.3.1 status for website copy: current public App Store version / 当前公开版本
- 0.4.0 status for website copy: prepared in App Store Connect, not submitted
  or publicly released / 已在 App Store Connect 准备，尚未提审或公开发布
- App Store: `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`
- Current public App Store version: 0.3.1, free to download
- Next prepared version: 0.4.0, adding Siri/App Shortcuts and iOS 18 Controls;
  public website release claims must wait until App Store distribution.
- Public beta: `https://testflight.apple.com/join/rqmHh69r`
- The official invitation page identifies the beta as “Water Buddy - 水滴伙伴” and lists it as available on iOS.
- Apple documents public TestFlight links as a supported way to invite external beta testers.
- Languages: Simplified Chinese, English, Korean, Japanese
- Core features: daily hydration logging, daily goals, interval or fixed-time reminders with selected weekdays and quiet hours, optional after-Focus hydration reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch logging/sync, cumulative milestones and local keepsake sharing, local JSON/CSV export, separate local/iCloud deletion, seven appearance themes, and in-app language switching
- 0.2.0 feature focus: per-cup timeline, backfill/edit/delete for individual records, custom cups with 24 playful cup styles, week/month/year history, lightweight reward stamps and stamp album, reminder windows, unified record path for widgets/Watch/notification actions, and optional StoreKit consumable purchases for supporting development
- Account: not required
- Hydration data: local-first in the device/App Group database; optional user-enabled CloudKit Private Database sync covers per-cup records, cups, daily reward stamps, and permanent milestone unlocks; theme, in-app language, appearance, and home-layout identifiers use an isolated allowlisted non-health preference Zone
- Remote SDKs present in the app: Firebase Analytics and Firebase Crashlytics
- Current custom analytics event: `app_launch`
- The app does not contain advertising UI or an account system in the inspected source.
- 0.3.0 release build: build 77 (`5784fe71-1b85-45e9-8984-5093555f0764`), processed as `VALID`, attached to App Store version 0.3.0, and verified as `READY_FOR_SALE` on 2026-07-26.
- 0.3.1 release build: build 83 (`4e3ea8ee-d6b2-44ce-b990-a2eac915e772`), processed as `VALID`, attached to App Store version 0.3.1 on 2026-07-28, and re-read as `READY_FOR_DISTRIBUTION` on 2026-07-29.

## Release milestones

- Version 0.4.0 · Prepared, not submitted or released: five Siri/App Shortcuts,
  two iOS 18 Controls for Control Center and the Lock Screen, and supported
  Action Button entry points. The public website must continue to present
  0.3.1 as current until App Store distribution.

- Version 0.3.1 · Current App Store version / 当前 App Store 版本 · Build 83: onboarding iCloud entry for earlier restoration, sensible initial goal/unit/cup defaults, a 09:00–21:00 30-minute reminder template that activates only after user consent, local JSON/CSV export, separate local/iCloud deletion, and user-readable sync details.

- Version 0.3.0 · Previous App Store version / 上一 App Store 版本 · Build 77: optional CloudKit Private Database sync, interval or fixed-time reminders with selected weekdays and quiet hours, cumulative milestones and permanent keepsakes, privacy-safe local keepsake sharing, and continued local-first operation.

- Version 0.2.1 · Previous App Store version / 上一 App Store 版本: public stability update retaining the 0.2.0 feature set and continuing issue fixes and experience improvements.
- Version 0.2.0 · Feature foundation: per-cup timeline, custom cups, week/month/year history views, lightweight reward stamps, reminder windows, unified local record path, privacy copy for per-cup local SQLite/App Group storage, and optional Support the Developer StoreKit purchases that do not unlock features.

- Version 0.1.1 · Build 33 · 2026-07-13 · Previous public App Store version: App-selected language propagated through notifications, widgets, Live Activities, Watch sync, and SwiftUI; serialized system-surface refreshes; stable localized Widget configuration; continuously updating Live Activity countdown.
- Version 0.1.0 · Build 33 · 2026-07-12 · App Store launch version: complete hydration flow, local reminders, optional after-Focus reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch support, four languages, seven themes, release privacy controls, storage migration fixes, and stable swipe-back navigation.
- Build 7 · 2026-07-11 · Release-polish beta: release privacy controls, independent Live Activity control, clearer undo/reset behavior, four-language release copy, full-bleed widgets, and reminders resting after the daily goal is reached.
- Build 6 · 2026-07-10 · Watch and system surfaces: Apple Watch app and hydration sync, optional after-Focus hydration reminders, redesigned Lock Screen/Live Activity, dynamic reminder countdown, water-lab UI, seven themes, and theme-aware dark mode.
- Build 3 · 2026-07-10 · Interaction and release foundation: native swipe-back navigation, hydration beyond the daily goal, improved Lock Screen contrast, and export-compliance configuration.
- Build 1 · 2026-07-09 · First usable beta: hydration logging, daily goal, onboarding, four languages, appearance themes, haptics, Home Screen/Lock Screen widgets, and Live Activity.

Version 0.3.1 is publicly available on the App Store and is the current public
version. The website should present 0.3.0 as the previous public version,
0.2.1 as an earlier stability release, and 0.2.0 as the feature foundation.

Public-facing copy must distinguish local hydration data from remote analytics and crash diagnostics.
