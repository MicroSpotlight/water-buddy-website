# Water Buddy · Product Facts

> Verified: 2026-07-17
> Sources: local Xcode configuration and Git history; `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`; `https://testflight.apple.com/join/rqmHh69r`; `https://developer.apple.com/testflight/`

- Product: 水滴伙伴 / Water Buddy
- Platform: iOS
- Version in the current Xcode configuration: 0.1.1 (Build 33)
- App Store: `https://apps.apple.com/us/app/water-buddy-hydration/id6789022089`
- Current public App Store version: 0.1.1, released 2026-07-13, free to download
- Public beta: `https://testflight.apple.com/join/rqmHh69r`
- The official invitation page identifies the beta as “Water Buddy - 水滴伙伴” and lists it as available on iOS.
- Apple documents public TestFlight links as a supported way to invite external beta testers.
- Languages: Simplified Chinese, English, Korean, Japanese
- Core features: daily hydration logging, daily goals, local reminders, optional after-Focus hydration reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch logging/sync, and seven appearance themes
- Account: not required
- Hydration data: stored locally on the device and in the local App Group container for app/widget sharing
- Remote SDKs present in the app: Firebase Analytics and Firebase Crashlytics
- Current custom analytics event: `app_launch`
- The app does not contain advertising UI or an account system in the inspected source.

## TestFlight build milestones

- Version 0.1.1 · Build 33 · 2026-07-13 · Current App Store version: App-selected language propagated through notifications, widgets, Live Activities, Watch sync, and SwiftUI; serialized system-surface refreshes; stable localized Widget configuration; continuously updating Live Activity countdown.
- Version 0.1.0 · Build 33 · 2026-07-12 · App Store launch version: complete hydration flow, local reminders, optional after-Focus reminders, Home Screen and Lock Screen widgets, Live Activity, Apple Watch support, four languages, seven themes, release privacy controls, storage migration fixes, and stable swipe-back navigation.
- Build 7 · 2026-07-11 · Release-polish beta: release privacy controls, independent Live Activity control, clearer undo/reset behavior, four-language release copy, full-bleed widgets, and reminders resting after the daily goal is reached.
- Build 6 · 2026-07-10 · Watch and system surfaces: Apple Watch app and hydration sync, optional after-Focus hydration reminders, redesigned Lock Screen/Live Activity, dynamic reminder countdown, water-lab UI, seven themes, and theme-aware dark mode.
- Build 3 · 2026-07-10 · Interaction and release foundation: native swipe-back navigation, hydration beyond the daily goal, improved Lock Screen contrast, and export-compliance configuration.
- Build 1 · 2026-07-09 · First usable beta: hydration logging, daily goal, onboarding, four languages, appearance themes, haptics, Home Screen/Lock Screen widgets, and Live Activity.

Version 0.1.1 (Build 33) is publicly available on the App Store. No repository release tag exists yet.

Public-facing copy must distinguish local hydration data from remote analytics and crash diagnostics.
