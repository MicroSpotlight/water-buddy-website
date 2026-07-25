# Water Buddy · Product Facts

> Verified: 2026-07-25
> Sources: local repository release notes and App Store submission material; `docs/releases/0.2.0.md`; `docs/releases/0.3.0.md`; `docs/releases/0.3.0-cloudkit-schema.md`; `app-store/metadata/submission.md`; `app-store/metadata/version-update.md`; `app-store/privacy/privacy-policy-update.md`; `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`; `https://testflight.apple.com/join/rqmHh69r`

- Product: 水滴伙伴 / Water Buddy
- Platform: iOS
- Website release focus: 0.3.0, submitted to App Review / awaiting review
- 0.2.0 status for website copy: released on the App Store / 已在 App Store 发布
- 0.2.1 status for website copy: current public App Store version / 当前公开版本
- 0.3.0 status for website copy: submitted to App Review / 已提交 App Store 审核; do not describe it as publicly released
- App Store: `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`
- Current public App Store version: 0.2.1, free to download
- Public beta: `https://testflight.apple.com/join/rqmHh69r`
- The official invitation page identifies the beta as “Water Buddy - 水滴伙伴” and lists it as available on iOS.
- Apple documents public TestFlight links as a supported way to invite external beta testers.
- Languages: Simplified Chinese, English, Korean, Japanese
- Core features: daily hydration logging, daily goals, interval or fixed-time reminders with selected weekdays and quiet hours, optional after-Focus hydration reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch logging/sync, cumulative milestones and local keepsake sharing, seven appearance themes, and in-app language switching
- 0.2.0 feature focus: per-cup timeline, backfill/edit/delete for individual records, custom cups with 24 playful cup styles, week/month/year history, lightweight reward stamps and stamp album, reminder windows, unified record path for widgets/Watch/notification actions, and optional StoreKit consumable purchases for supporting development
- Account: not required
- Hydration data: local-first in the device/App Group database; optional user-enabled CloudKit Private Database sync covers per-cup records, cups, daily reward stamps, and permanent milestone unlocks
- Remote SDKs present in the app: Firebase Analytics and Firebase Crashlytics
- Current custom analytics event: `app_launch`
- The app does not contain advertising UI or an account system in the inspected source.
- 0.3.0 submission candidate: build 77 (`5784fe71-1b85-45e9-8984-5093555f0764`), processed as `VALID`, attached to App Store version 0.3.0, and currently `WAITING_FOR_REVIEW`.

## Release milestones

- Version 0.3.0 · Submitted to App Review / 已提交审核 · Build 77: optional CloudKit Private Database sync, interval or fixed-time reminders with selected weekdays and quiet hours, cumulative milestones and permanent keepsakes, privacy-safe local keepsake sharing, and continued local-first operation.

- Version 0.2.1 · Current App Store version / 当前 App Store 版本: public stability update retaining the 0.2.0 feature set and continuing issue fixes and experience improvements.
- Version 0.2.0 · Feature foundation: per-cup timeline, custom cups, week/month/year history views, lightweight reward stamps, reminder windows, unified local record path, privacy copy for per-cup local SQLite/App Group storage, and optional Support the Developer StoreKit purchases that do not unlock features.

- Version 0.1.1 · Build 33 · 2026-07-13 · Previous public App Store version: App-selected language propagated through notifications, widgets, Live Activities, Watch sync, and SwiftUI; serialized system-surface refreshes; stable localized Widget configuration; continuously updating Live Activity countdown.
- Version 0.1.0 · Build 33 · 2026-07-12 · App Store launch version: complete hydration flow, local reminders, optional after-Focus reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch support, four languages, seven themes, release privacy controls, storage migration fixes, and stable swipe-back navigation.
- Build 7 · 2026-07-11 · Release-polish beta: release privacy controls, independent Live Activity control, clearer undo/reset behavior, four-language release copy, full-bleed widgets, and reminders resting after the daily goal is reached.
- Build 6 · 2026-07-10 · Watch and system surfaces: Apple Watch app and hydration sync, optional after-Focus hydration reminders, redesigned Lock Screen/Live Activity, dynamic reminder countdown, water-lab UI, seven themes, and theme-aware dark mode.
- Build 3 · 2026-07-10 · Interaction and release foundation: native swipe-back navigation, hydration beyond the daily goal, improved Lock Screen contrast, and export-compliance configuration.
- Build 1 · 2026-07-09 · First usable beta: hydration logging, daily goal, onboarding, four languages, appearance themes, haptics, Home Screen/Lock Screen widgets, and Live Activity.

Version 0.2.1 is publicly available on the App Store. The website should present 0.2.1 as the current public version, 0.2.0 as the feature foundation, and 0.3.0 only as submitted for review / upcoming until App Store Connect reports that it has been released.

Public-facing copy must distinguish local hydration data from remote analytics and crash diagnostics.
