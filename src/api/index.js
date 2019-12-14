import ajax from './ajax'


export const reqUser = () => ajax({
  method: 'get',
  url: '/userlist'
})