
# 🛠️ Troubleshooting Guide

Common issues and solutions for Need2Fix development and deployment.

## 🐛 Common Development Issues

### Build Errors

#### Node.js Version Issues
```bash
# Error: Node.js version incompatibility
# Solution: Use Node.js 18+
nvm install 18
nvm use 18
npm install
```

#### Dependency Conflicts
```bash
# Error: Package resolution failed
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### TypeScript Errors
```bash
# Error: Type checking failed
# Solution: Check type definitions
npm run type-check
# Fix type mismatches in reported files
```

### Runtime Errors

#### Location Services Not Working
```javascript
// Issue: Geolocation API fails
// Solution: Check HTTPS and permissions
if (!navigator.geolocation) {
  console.error('Geolocation not supported');
}

// Ensure site is served over HTTPS
// Check browser permissions for location
```

#### WhatsApp Integration Issues
```javascript
// Issue: WhatsApp links not opening
// Solution: Verify URL format
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
// Ensure phone number format: country code + number (no + or spaces)
```

#### Service Provider Filtering
```javascript
// Issue: No providers showing
// Solution: Check location data and service area matching
console.log('User location:', userLocation);
console.log('Available providers:', providers);
console.log('Filtered providers:', filteredProviders);
```

---

## 📱 Mobile Development Issues

### Android Issues

#### Gradle Build Failures
```bash
# Error: Gradle sync failed
# Solution: Check Java version and Android SDK
java -version  # Should be Java 11+
echo $ANDROID_HOME  # Should point to Android SDK

# Clean and rebuild
cd android
./gradlew clean
./gradlew build
```

#### APK Not Installing
```bash
# Error: App not installed
# Solution: Check signing and permissions
# 1. Enable "Install from Unknown Sources"
# 2. Check APK signature
# 3. Verify target SDK version compatibility
```

#### Plugin Not Working
```bash
# Error: Capacitor plugin not found
# Solution: Sync after adding plugins
npx cap sync android
npx cap run android
```

### iOS Issues

#### Xcode Build Errors
```bash
# Error: Build failed in Xcode
# Solution: Check iOS deployment target
# 1. Open ios/App.xcworkspace in Xcode
# 2. Select App target
# 3. Set iOS Deployment Target to 13.0+
# 4. Clean build folder: Product → Clean Build Folder
```

#### Simulator Not Starting
```bash
# Error: iOS Simulator won't start
# Solution: Reset simulator
xcrun simctl erase all
# Restart Xcode and try again
```

#### App Store Rejection
- **Issue**: App rejected for guidelines violation
- **Solution**: Review Apple's App Store Review Guidelines
- **Common issues**: Missing privacy policy, inappropriate content, functionality issues

---

## 🌐 Deployment Issues

### Web Deployment

#### Build Size Too Large
```bash
# Issue: Bundle size exceeds limits
# Solution: Analyze and optimize
npm run build -- --analyze

# Optimize images
# Remove unused dependencies
# Implement code splitting
```

#### 404 Errors on Refresh
```bash
# Issue: SPA routing not working
# Solution: Configure server redirects
# For Netlify: _redirects file
/*    /index.html   200

# For Apache: .htaccess file
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

#### HTTPS Certificate Issues
- **Issue**: SSL certificate errors
- **Solution**: Use Let's Encrypt or hosting platform SSL
- **Check**: Certificate validity and domain matching

### Mobile Store Issues

#### Google Play Rejection
Common reasons and solutions:
- **Missing Privacy Policy**: Add privacy policy URL
- **Inappropriate Content**: Review content guidelines
- **Malware Detection**: Check for suspicious code patterns
- **Target SDK**: Update to latest Android target SDK

#### App Store Rejection
Common reasons and solutions:
- **App Completeness**: Ensure all features work properly
- **Design Guidelines**: Follow iOS Human Interface Guidelines
- **Metadata**: Accurate app description and screenshots
- **In-App Purchases**: Proper implementation if applicable

---

## 📊 Performance Issues

### Web Performance

#### Slow Loading Times
```javascript
// Issue: App loads slowly
// Solutions:
// 1. Implement lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// 2. Optimize images
// Use WebP format and appropriate sizes

// 3. Enable service worker caching
// Check service worker registration
```

#### Memory Leaks
```javascript
// Issue: Memory usage increases over time
// Solution: Check for memory leaks
// 1. Use React DevTools Profiler
// 2. Clean up event listeners
useEffect(() => {
  const handler = () => {};
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);

// 3. Clear intervals and timeouts
useEffect(() => {
  const interval = setInterval(() => {}, 1000);
  return () => clearInterval(interval);
}, []);
```

### Mobile Performance

#### App Crashes
```bash
# Issue: App crashes on startup
# Solution: Check native logs
npx cap run android --log
npx cap run ios --log

# Common causes:
# - Plugin compatibility issues
# - Memory constraints
# - Network timeout errors
```

#### Slow Rendering
- **Issue**: UI updates are laggy
- **Solution**: Optimize React rendering
- **Use**: React.memo, useMemo, useCallback
- **Check**: Unnecessary re-renders with React DevTools

---

## 🔧 Debug Tools

### Browser Developer Tools
```javascript
// Enable React DevTools
// Install React Developer Tools extension

// Console debugging
console.log('Debug info:', data);
console.table(arrayData);
console.time('operation');
// ... code ...
console.timeEnd('operation');
```

### Mobile Debugging
```bash
# Android debugging
# Chrome DevTools for hybrid apps
chrome://inspect/#devices

# iOS debugging
# Safari Web Inspector for iOS Simulator
# Develop → Simulator → Your App
```

### Network Issues
```javascript
// Check API calls
fetch('/api/providers')
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .catch(error => {
    console.error('API Error:', error);
    // Implement fallback or error handling
  });
```

---

## 🆘 Getting Help

### Before Asking for Help
1. **Check Console**: Look for error messages
2. **Reproduce Issue**: Can you make it happen again?
3. **Check Documentation**: Review relevant docs
4. **Search Issues**: Look for similar problems online

### What to Include in Bug Reports
- **Environment**: OS, browser/device, versions
- **Steps to Reproduce**: Exact steps that cause the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Error Messages**: Complete error text
- **Screenshots**: Visual issues require images

### Support Channels
- **Need2Fix Support**: +91 84990 90369
- **Email**: support@need2fix.com
- **GitHub Issues**: For code-related problems
- **Stack Overflow**: For technical questions

---

## 📚 Additional Resources

- **React Documentation**: [reactjs.org](https://reactjs.org)
- **Capacitor Troubleshooting**: [capacitorjs.com/docs/troubleshooting](https://capacitorjs.com/docs/troubleshooting)
- **Android Developer Console**: [developer.android.com](https://developer.android.com)
- **iOS Developer Portal**: [developer.apple.com](https://developer.apple.com)

---

*Remember: Most issues have been encountered by others before. Don't hesitate to search for solutions online and ask for help when needed!*
