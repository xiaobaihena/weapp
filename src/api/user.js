import { request, authRequest, uploadFile } from '@/utils/request';
export function getCurrentUser(data) {
  return authRequest('user');
}
//更新用户信息
export function updateUser(data) {
  return authRequest('user', {
    method: 'put',
    data: data,
  });
}
//上传头像
export function updateAvatar(avatar) {
  return uploadFile('images', {
    method: 'POST',
    name: 'image',
    formData: {
      type: 'avatar',
    },
    filePath: avatar,
  });
}
