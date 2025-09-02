
# 📱 Mobile App Development Guide

Complete guide for converting your Need2Fix web application into native Android and iOS mobile apps using Capacitor.

## Prerequisites

### System Requirements
- **Node.js** 18+ and npm
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)
- **Java JDK** 11 or higher
- **Android SDK** (installed via Android Studio)

### Install Capacitor Dependencies
```bash
# Core Capacitor packages
npm install @capacitor/core @capacitor/cli

# Platform-specific packages
npm install @capacitor/android @capacitor/ios
```

---

## 🚀 Setup Process

### Step 1: Initialize Capacitor
```bash
# Initialize Capacitor in your project
npx cap init

# When prompted, use these values:
# App ID: app.lovable.need2fix
# App Name: Need2Fix
```

### Step 2: Build Web Assets
```bash
# Build the web application
npm run build
```

### Step 3: Add Mobile Platforms
```bash
# Add Android platform
npx cap add android

# Add iOS platform (macOS only)
npx cap add ios
```

### Step 4: Sync Web Code to Native Platforms
```bash
# Sync web assets to native platforms
npx cap sync
```

---

## 🤖 Android Development

### Android Studio Setup
1. **Download Android Studio**: [developer.android.com](https://developer.android.com/studio)
2. **Install Android SDK**: Follow the setup wizard
3. **Create Virtual Device**: For testing (or use physical device)

### Building Android App
```bash
# Open Android project in Android Studio
npx cap open android

# Or run directly from command line
npx cap run android
```

### Android Studio Development Process
1. Open the `android` folder in Android Studio
2. Wait for Gradle sync to complete
3. Configure signing certificate for release builds
4. Build APK: `Build → Build Bundle(s) / APK(s) → Build APK(s)`
5. Generated APK location: `android/app/build/outputs/apk/`

### Android Permissions
Add these permissions to `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

---

## 🍎 iOS Development

### Xcode Setup (macOS Required)
1. **Install Xcode**: From Mac App Store
2. **Install Xcode Command Line Tools**: `xcode-select --install`
3. **Configure Apple Developer Account**: For app signing

### Building iOS App
```bash
# Open iOS project in Xcode
npx cap open ios

# Or run directly
npx cap run ios
```

### Xcode Development Process
1. Open the `ios/App.xcworkspace` file in Xcode
2. Configure Team and Bundle Identifier
3. Select target device/simulator
4. Build and run: `Product → Run`

### iOS Permissions
Add these permissions to `ios/App/App/Info.plist`:
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app needs location access to find nearby service providers.</string>
<key>NSCameraUsageDescription</key>
<string>This app needs camera access to take photos for service requests.</string>
```

---

## 🔧 Native Capabilities

### Available Plugins
- **Camera Access**: For profile pictures and service documentation
- **Push Notifications**: Real-time service updates
- **GPS Location**: Enhanced location accuracy
- **Contact Integration**: Easy contact management
- **File Storage**: Offline data caching
- **Share API**: Share service provider details

### Adding Native Features
```bash
# Install plugins as needed
npm install @capacitor/camera
npm install @capacitor/push-notifications
npm install @capacitor/geolocation
npm install @capacitor/share

# Sync after adding plugins
npx cap sync
```

---

## 📊 Performance Optimization

### Mobile Performance Best Practices
- **Image Optimization**: Compress images for faster loading
- **Lazy Loading**: Load content as needed
- **Caching Strategy**: Store frequently accessed data
- **Network Optimization**: Handle offline scenarios
- **Bundle Size**: Minimize JavaScript bundle

### Testing Commands
```bash
# Test on device
npx cap run android --target=<device-id>
npx cap run ios --target=<device-id>

# Debug in browser
npm run dev
# Then open Chrome DevTools → More Tools → Remote Devices
```

---

## 🔐 Security Considerations

### Mobile Security Best Practices
- **HTTPS Only**: Secure all API communications
- **Data Encryption**: Encrypt sensitive local data
- **Certificate Pinning**: Prevent man-in-the-middle attacks
- **Secure Storage**: Use Capacitor Secure Storage
- **App Permissions**: Request minimal necessary permissions

---

## 🛠️ Troubleshooting

### Common Issues
1. **Build Errors**: Check Java/Gradle versions
2. **Sync Issues**: Run `npx cap sync` after changes
3. **Plugin Conflicts**: Check plugin compatibility
4. **Performance**: Optimize images and bundle size

### Debug Commands
```bash
# Check Capacitor environment
npx cap doctor

# Clean and rebuild
npx cap sync --deployment

# View native logs
npx cap run android --log
npx cap run ios --log
```

---

## 📚 Resources

- **Capacitor Documentation**: [capacitorjs.com](https://capacitorjs.com)
- **Android Developer Guide**: [developer.android.com](https://developer.android.com)
- **iOS Developer Guide**: [developer.apple.com](https://developer.apple.com)

---

*For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)*
