import request from '../utils/request'
export default {
    getBlogList(){
        return request.get('/api/blog/list')
    },
}