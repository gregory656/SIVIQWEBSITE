# SIVIQ Flutter Team Install Links

Use Firebase App Distribution for pre-release SIVIQ Flutter testing. Do not send APK files through WhatsApp; Firebase gives the team a trusted install link, handles tester invites, and keeps Android and iOS updates organized.

## Tester Emails

Create a Firebase App Distribution tester group named:

```text
siviq-team
```

Add these testers:

```text
gregorysteve656@gmail.com
lenox11458@gmail.com
janetkutai@gmail.com
khayadistephen@gmail.com
```

Emmanuel Blessing has no email provided yet. Add him later when his tester email is available.

## Required App Details

The Flutter coder must confirm these from the Flutter project and Firebase Console:

- Android package name / application ID, for example `com.siviq.app`.
- iOS bundle ID, for example `com.siviq.app`.
- Firebase Android app ID, shaped like `1:1234567890:android:abcdef`.
- Firebase iOS app ID, shaped like `1:1234567890:ios:abcdef`.
- Firebase project ID for SIVIQ.

In Flutter, the Android package name is usually in:

```text
android/app/build.gradle
android/app/build.gradle.kts
```

Look for `applicationId`.

## Required Permissions And Access

The person running the commands needs:

- Access to the SIVIQ Firebase project.
- Permission to add Android and iOS apps in Firebase.
- Permission to use Firebase App Distribution.
- Permission to create tester groups and add tester emails.
- Firebase CLI login with the same Google account that has project access.
- For Android release builds: Android signing config or keystore details if release signing is not already configured.
- For iOS release builds: Apple Developer account access, macOS with Xcode, signing certificates, provisioning profile, and tester UDIDs.

Recommended Firebase role for the setup person:

```text
Firebase Admin
```

If using narrower roles, make sure the account can manage Firebase apps and App Distribution releases/testers.

## One-Time Setup

Run these from the Flutter app project, not this website project:

```bash
flutter pub add firebase_core
flutter pub add firebase_app_distribution
npm install -g firebase-tools
firebase login
```

Then connect the Flutter app to Firebase:

```bash
dart pub global activate flutterfire_cli
flutterfire configure
```

During `flutterfire configure`, select the SIVIQ Firebase project and register/select the Android and iOS apps using the package IDs above.

## Android Upload

Build the release APK:

```bash
flutter build apk --release
```

Upload it to Firebase App Distribution:

```bash
firebase appdistribution:distribute build/app/outputs/flutter-apk/app-release.apk \
  --app YOUR_FIREBASE_ANDROID_APP_ID \
  --groups siviq-team \
  --release-notes "SIVIQ internal Android test build"
```

Firebase emails testers automatically. They open the invite, accept it, and install the app from the Firebase tester page.

## iOS Upload

iOS requires Apple Developer setup before testers can install. Add tester UDIDs to the Apple Developer portal, regenerate the provisioning profile, then build:

```bash
flutter build ipa --release
```

Upload the IPA:

```bash
firebase appdistribution:distribute build/ios/ipa/*.ipa \
  --app YOUR_FIREBASE_IOS_APP_ID \
  --groups siviq-team \
  --release-notes "SIVIQ internal iOS test build"
```

## What To Do In Firebase

1. Open Firebase Console and select the SIVIQ project.
2. Add the Android app using the SIVIQ package name.
3. Add the iOS app using the SIVIQ bundle ID.
4. Go to App Distribution.
5. Create a tester group named `siviq-team`.
6. Add the tester emails listed above to that group.
7. Copy the Android and iOS Firebase app IDs and send them to me.
8. After upload, confirm testers received the invite email.

## Command I Want My Flutter Coder To Run

Replace `YOUR_FIREBASE_ANDROID_APP_ID` with the real Firebase Android app ID:

```bash
firebase login
flutterfire configure
flutter build apk --release
firebase appdistribution:distribute build/app/outputs/flutter-apk/app-release.apk \
  --app YOUR_FIREBASE_ANDROID_APP_ID \
  --groups siviq-team \
  --release-notes "SIVIQ internal Android test build"
```

For iOS, replace `YOUR_FIREBASE_IOS_APP_ID` with the real Firebase iOS app ID:

```bash
flutter build ipa --release
firebase appdistribution:distribute build/ios/ipa/*.ipa \
  --app YOUR_FIREBASE_IOS_APP_ID \
  --groups siviq-team \
  --release-notes "SIVIQ internal iOS test build"
```

## Notes

- Email and WhatsApp are fine for sending Firebase invite links.
- Do not distribute raw APKs as the main testing method.
- Instagram links are not ideal for install distribution; use Firebase tester email invites.
- Firebase App Distribution can show releases, tester access, and basic install status.
- iOS testers may need to register device UDIDs before they can install internal builds.
