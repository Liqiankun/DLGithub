//
//  Crop.h
//  ReactNativeApp
//
//  Created by FT_David on 2017/4/28.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

@interface Crop:NSObject<UIImagePickerControllerDelegate,UINavigationControllerDelegate>
-(instancetype)initWithViewController:(UIViewController *)vc;
typedef void(^PickSuccess)(NSDictionary *resultDic);
typedef void(^PickFailure)(NSString* message);
@property (nonatomic, retain) NSMutableDictionary *response;
@property (nonatomic,copy)PickSuccess pickSuccess;
@property (nonatomic,copy)PickFailure pickFailure;
@property(nonatomic,strong)UIViewController *viewController;

-(void)selectImage:(NSDictionary*)option successs:(PickSuccess)success failure:(PickFailure)failure;

@end
