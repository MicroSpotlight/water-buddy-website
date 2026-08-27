# Water Buddy · Product Facts

> Verified: 2026-08-27
> Sources: local repository release notes, App Store submission material, and the native Android implementation; `docs/releases/0.2.0.md`; `docs/releases/0.3.0.md`; `docs/releases/0.3.1.md`; `docs/releases/0.4.0.md`; `docs/releases/0.5.0.md`; `docs/releases/0.6.0.md`; `Android/README.md`; `Android/gradle.properties`; `Android/app/build.gradle.kts`; `app-store/0.3.1/README.md`; `app-store/0.4.0/README.md`; `app-store/0.5.0/version-update.md`; `app-store/0.6.0/README.md`; `app-store/0.6.0/manifest.md`; `app-store/metadata/submission.md`; `app-store/metadata/version-update.md`; `app-store/privacy/privacy-policy-update.md`; `https://apps.apple.com/us/app/water-buddy-drink-reminder/id6789022089`; `https://itunes.apple.com/lookup?id=6789022089&country=us`; `https://testflight.apple.com/join/rqmHh69r`

- Product: 水滴伙伴 / Water Buddy
- Platform: iOS (public); Android and Wear OS (native development builds)
- Website release focus: iOS 0.6.0 is released on the App Store; Android and Wear OS are in development and are not publicly available on Google Play
- 0.2.0 status for website copy: released on the App Store / 已在 App Store 发布
- 0.2.1 status for website copy: previous public App Store version / 上一公开版本
- 0.3.0 status for website copy: previous public App Store version / 上一公开版本
- 0.3.1 status for website copy: previous public App Store version / 上一公开版本
- 0.4.0 status for website copy: previous public App Store version / 上一公开版本
- 0.5.0 status for website copy: previous public App Store version / 上一公开版本
- 0.6.0 status for website copy: current public App Store version / 当前公开版本
- App Store: `https://apps.apple.com/us/app/water-buddy-drink-reminder/id6789022089`
- Current public App Store version: 0.6.0, free to download
- 0.6.0 release status: Build 103 (`759d0eaa-b817-44b7-9c50-745a755c1dcc`) was released on 2026-08-27 and is the current public App Store version
- Current version highlights: a local 30-day hydration rhythm summary, recorded
  days and goal days, average and median amounts, a latest-seven-day comparison,
  broad time-of-day distribution, date drill-down to the existing per-cup
  timeline, and a read-only large Widget. HealthKit is not included.
- Public beta: `https://testflight.apple.com/join/rqmHh69r`
- The official invitation page identifies the beta as “Water Buddy - 水滴伙伴” and lists it as available on iOS.
- Apple documents public TestFlight links as a supported way to invite external beta testers.
- Android website status: native Android and Wear OS implementations are in active development; there is no public Google Play listing and no promised release date.
- Android development version: 0.5.0 (`versionCode` 50000); phone baseline Android 8.0+ (`minSdk 26`, `targetSdk 36`), Wear OS baseline Wear OS 3+ (`minSdk 30`).
- Android core scope: daily hydration logging, per-cup records, cups, reminders, rewards, seven themes, four languages, Home Screen widgets, notification actions, launcher shortcuts, a Quick Settings tile, Wear OS logging/sync, local export and voluntary Google Play support purchases.
- Android platform equivalents: notifications, launcher shortcuts and the Quick Settings tile are Android-native alternatives for Apple-only Lock Screen Widget, Live Activity, Focus Filter, Siri and Control surfaces where Android has no stable equivalent.
- Android hydration data: local-first in Room/DataStore; optional user-enabled Google Drive `appDataFolder` sync is private to the user's Google account and only synchronizes Android hydration facts. Core recording remains available offline without Drive authorization.
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
- 0.4.0 release build: build 92 (`51a1ac77-496f-4344-937e-a49aea9dde41`),
  processed as `VALID`, exempt from non-exempt encryption, and publicly released
  as App Store version 0.4.0 on 2026-08-01.
- 0.5.0 release build: build 102 (`a564321c-093c-44c2-a25d-756a8e36afc6`),
  processed as `VALID`, attached to App Store version 0.5.0, submitted for
  review on 2026-08-08, and publicly released before 0.6.0.
- 0.6.0 release build: build 103 (`759d0eaa-b817-44b7-9c50-745a755c1dcc`),
  processed as `VALID`, attached to App Store version 0.6.0, and publicly
  released on 2026-08-27.

## Release milestones

- Version 0.6.0 · Current App Store version / 当前 App Store 版本 · Build 103:
  local 30-day hydration rhythm summary, recorded and goal days, average and
  median amounts, latest-seven-day comparison, broad time-of-day distribution,
  date drill-down to the existing per-cup timeline, and a read-only large
  Widget. HealthKit is outside the release.

- Version 0.5.0 · Previous App Store version / 上一 App Store 版本 · Build 102: optional AlarmKit alarm-style
  reminders on iOS 26+, gentle notifications on iOS 17+, a single next-drink
  coordinator, clear delivery-channel explanations, permission fallback, and
  bounded Stop/Snooze actions. HealthKit is outside the release.

- Version 0.4.0 · Previous App Store version / 上一 App Store 版本 · Build 92: six Siri/App Shortcuts,
  three iOS 18 Controls for Control Center and the Lock Screen, configurable
  sips, quick-action recovery, recent results, time-based recommendations,
  automation guides, and supported Action Button entry points.

- Version 0.3.1 · Previous App Store version / 上一 App Store 版本 · Build 83: onboarding iCloud entry for earlier restoration, sensible initial goal/unit/cup defaults, a 09:00–21:00 30-minute reminder template that activates only after user consent, local JSON/CSV export, separate local/iCloud deletion, and user-readable sync details.

- Version 0.3.0 · Previous App Store version / 上一 App Store 版本 · Build 77: optional CloudKit Private Database sync, interval or fixed-time reminders with selected weekdays and quiet hours, cumulative milestones and permanent keepsakes, privacy-safe local keepsake sharing, and continued local-first operation.

- Version 0.2.1 · Previous App Store version / 上一 App Store 版本: public stability update retaining the 0.2.0 feature set and continuing issue fixes and experience improvements.
- Version 0.2.0 · Feature foundation: per-cup timeline, custom cups, week/month/year history views, lightweight reward stamps, reminder windows, unified local record path, privacy copy for per-cup local SQLite/App Group storage, and optional Support the Developer StoreKit purchases that do not unlock features.

- Version 0.1.1 · Build 33 · 2026-07-13 · Previous public App Store version: App-selected language propagated through notifications, widgets, Live Activities, Watch sync, and SwiftUI; serialized system-surface refreshes; stable localized Widget configuration; continuously updating Live Activity countdown.
- Version 0.1.0 · Build 33 · 2026-07-12 · App Store launch version: complete hydration flow, local reminders, optional after-Focus reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch support, four languages, seven themes, release privacy controls, storage migration fixes, and stable swipe-back navigation.
- Build 7 · 2026-07-11 · Release-polish beta: release privacy controls, independent Live Activity control, clearer undo/reset behavior, four-language release copy, full-bleed widgets, and reminders resting after the daily goal is reached.
- Build 6 · 2026-07-10 · Watch and system surfaces: Apple Watch app and hydration sync, optional after-Focus hydration reminders, redesigned Lock Screen/Live Activity, dynamic reminder countdown, water-lab UI, seven themes, and theme-aware dark mode.
- Build 3 · 2026-07-10 · Interaction and release foundation: native swipe-back navigation, hydration beyond the daily goal, improved Lock Screen contrast, and export-compliance configuration.
- Build 1 · 2026-07-09 · First usable beta: hydration logging, daily goal, onboarding, four languages, appearance themes, haptics, Home Screen/Lock Screen widgets, and Live Activity.

Version 0.6.0 is publicly available on the App Store and is the current public
version. Version 0.5.0, 0.4.0 and earlier releases remain historical entries.

Public-facing copy must distinguish local hydration data from remote analytics and crash diagnostics.
Public-facing Android copy must describe the app as in development, must not show a Google Play download action, and must not promise a release date until a public listing is verified.
