import request from '../utils/axios'

export default {
    getBlogList(){
        return request.get('/api/blog/list')
    },
    addBlog(params: any){
        return request.post('/api/blog/add',params)
    },
    deletBlog(id: string){
        return request.delete(`/api/blog/delete?id=${id}`)
    },
}