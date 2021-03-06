import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/user/audios', controller.user.getAudios);
  router.delete('/user/cloud/song/del', controller.user.deleteCloudMusic);
  router.get('/user/cloud/songs/info', controller.user.getCloudMusicsInfo);
  router.get('/user/cloud', controller.user.getCloudMusics);
  router.get('/user/info', controller.user.getUserInfo);
  router.get('/user/djs', controller.user.getUserDjs);
  router.get('/user/event', controller.user.getUserEvent);
  router.get('/user/followeds', controller.user.getUserFolloweds);
  router.get('/user/follows', controller.user.getUserFollows);
  router.get('/user/playlist', controller.user.getUserPlaylist);
  router.get('/user/playrecord', controller.user.getUserPlayrecord);
  router.get('/user/subcount', controller.user.getUserSubcount);
  router.put('/user/info', controller.user.putUserInfo);
  router.get('/user/logs', controller.user.getUserLogs);
  router.get('/user/fm', controller.user.getUserFM);
  router.get('/user/rec/djprogram', controller.user.getUserDjprogram);
  router.get('/user/rec/mv', controller.user.getUserMv);
  router.get('/user/rec/newsong', controller.user.getUserMewsong);
  router.get('/user/privatecontent', controller.user.getUserPrivateContent);
  router.get('/user/rec/playlist', controller.user.getUserRecPlaylist);
};
