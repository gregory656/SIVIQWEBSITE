# SIVIQ Team Install Links

Use Firebase App Distribution for pre-release SIVIQ testing. Do not send APK files through WhatsApp; Firebase gives the team a trusted install link, handles tester invites, and keeps Android and iOS updates organized.

## What I Need From You

- Firebase project access for the SIVIQ app.
- Android package name, for example `com.siviq.app`.
- Firebase Android app ID, shaped like `1:1234567890:android:abcdef`.
- Team tester emails, or permission to create a Firebase tester group called `siviq-team`.
- For Android release builds: the signing keystore details if the Flutter project is not already configured.
- For iOS: Apple Developer access, iOS bundle ID, Firebase iOS app ID, and each tester's UDID.

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
  --release-notes "SIVIQ internal test build"
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
6. Add each team member's email to that group.
7. Copy the Android and iOS Firebase app IDs and send them to me.
8. After upload, confirm testers received the invite email.

## What I Can Help Run

Once you give me the Firebase app IDs and the Flutter project is available on this machine, I can run:

```bash
firebase login
flutterfire configure
flutter build apk --release
firebase appdistribution:distribute build/app/outputs/flutter-apk/app-release.apk --app YOUR_FIREBASE_ANDROID_APP_ID --groups siviq-team
```

For iOS, I can prepare the command and project config, but the final build normally needs macOS with Xcode and an Apple Developer account.

## Notes

- Email and WhatsApp are fine for sending Firebase invite links.
- Do not distribute raw APKs as the main testing method.
- Instagram links are not ideal for install distribution; use Firebase tester email invites.
- Firebase App Distribution can show releases, tester access, and basic install status.
