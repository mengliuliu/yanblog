import request from '../utils/axios'

export default {
    getBlogList(){
        return request.get('/api/blog/list')
    },
}