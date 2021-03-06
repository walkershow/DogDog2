/*
京喜工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  '1R28eKJ0z1qLwspHMjWArw==@DqcsTQud-Gn1vvbSl_NbtA==@cL1QBF2sGrVgbdw63XuPIQ==@4Wy0F1_ZufplubQUAV7_-w==@UsMi4askQRfQFNwX6hvZdw==@rUKe719u1uLtysxde30Dyg==@OHPZC_iRV8tMOwaTOyDg8g==@4J3zGgRKLp2GfK7_Mo95Qw==@1wAOJ8UcOYBPyYKoz3Fy5A==@Hfs5JI-xtePXKY5aRmCZJg==',//账号一的好友shareCode,不同好友中间用@符号隔开
  '1R28eKJ0z1qLwspHMjWArw==@DqcsTQud-Gn1vvbSl_NbtA==@cL1QBF2sGrVgbdw63XuPIQ==@4Wy0F1_ZufplubQUAV7_-w==@UsMi4askQRfQFNwX6hvZdw==@rUKe719u1uLtysxde30Dyg==@OHPZC_iRV8tMOwaTOyDg8g==@4J3zGgRKLp2GfK7_Mo95Qw==@1wAOJ8UcOYBPyYKoz3Fy5A==@Hfs5JI-xtePXKY5aRmCZJg==',//账号二的好友shareCode，不同好友中间用@符号隔开
  '1R28eKJ0z1qLwspHMjWArw==@DqcsTQud-Gn1vvbSl_NbtA==@cL1QBF2sGrVgbdw63XuPIQ==@4Wy0F1_ZufplubQUAV7_-w==@UsMi4askQRfQFNwX6hvZdw==@rUKe719u1uLtysxde30Dyg==@OHPZC_iRV8tMOwaTOyDg8g==@4J3zGgRKLp2GfK7_Mo95Qw==@1wAOJ8UcOYBPyYKoz3Fy5A==@Hfs5JI-xtePXKY5aRmCZJg==',
  '1R28eKJ0z1qLwspHMjWArw==@DqcsTQud-Gn1vvbSl_NbtA==@cL1QBF2sGrVgbdw63XuPIQ==@4Wy0F1_ZufplubQUAV7_-w==@UsMi4askQRfQFNwX6hvZdw==@rUKe719u1uLtysxde30Dyg==@OHPZC_iRV8tMOwaTOyDg8g==@4J3zGgRKLp2GfK7_Mo95Qw==@1wAOJ8UcOYBPyYKoz3Fy5A==@Hfs5JI-xtePXKY5aRmCZJg==',
  '1R28eKJ0z1qLwspHMjWArw==@DqcsTQud-Gn1vvbSl_NbtA==@cL1QBF2sGrVgbdw63XuPIQ==@4Wy0F1_ZufplubQUAV7_-w==@UsMi4askQRfQFNwX6hvZdw==@rUKe719u1uLtysxde30Dyg==@OHPZC_iRV8tMOwaTOyDg8g==@4J3zGgRKLp2GfK7_Mo95Qw==@1wAOJ8UcOYBPyYKoz3Fy5A==@Hfs5JI-xtePXKY5aRmCZJg==',
  
]
// 判断github action里面是否有京喜工厂互助码
if (process.env.DREAM_FACTORY_SHARE_CODES) {
  if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('&');
  } else if (process.env.DREAM_FACTORY_SHARE_CODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split('\n');
  } else {
    shareCodes = process.env.DREAM_FACTORY_SHARE_CODES.split();
  }
} else if (process.env.DREAM_FACTORY_SHARE_CODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
