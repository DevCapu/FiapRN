#import "AppDelegate.h"
#import <Firebase.h>
#import <TrustKit/TrustKit.h>
#import <GoogleMaps/GoogleMaps.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [GMSServices provideAPIKey:@"AIzaSyCFUgUbyUZvues3jTTtFfrZigrXyAQsxVc"];
  NSDictionary *trustKitConfig =
  @{
    kTSKSwizzleNetworkDelegates: @NO,
    kTSKPinnedDomains: @{
      @"tabnews.com.br": @{
        kTSKIncludeSubdomains: @YES,
        kTSKDisableDefaultReportUri: @YES,
        kTSKEnforcePinning: @YES,
        kTSKPublicKeyHashes: @[
          @"dQrcLsW4IIFLNnhYN+u1l+junGOVTlclFDBj9c+mcR4=",
          @"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        ]
      }
    }
  };
  [TrustKit initSharedInstanceWithConfiguration:trustKitConfig];
  [FIRApp configure];
  self.moduleName = @"FIAP2MOBr";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  [super application:application didFinishLaunchingWithOptions:launchOptions];

  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
