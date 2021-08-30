import request from '../utils/axios'

export default {
    getUserList(){
        return request.get('/api/user/list')
    },
}