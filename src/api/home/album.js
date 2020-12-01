import request from '@/utils/request';
export default{
    albumList(page,limit) {
        return request({
            url: `/imageclass/${page}`,
            method: 'get',
            data:{
                limit,
            }
        })
    },
    albumClass(id,page,limit,order,keyword){
        return request({
            url:`/imageclass/${id}/image/${page}?`,
            method:"GET",
            data:{
                limit,
                order,
                keyword
            }
        })
    },
    albumEditImgName(id,name){
        return request({
            url:`/image/${id}`,
            method:"POST",
            data:{
                name
            }
        })
    },
    albumDeleteImg(id){
        return request({
            url:`/image/${id}`,
            method:"DELETE"
        })
    },
    addAlbumClass(){
        return request({
            url:"/imageclass",
            method:"POST",
            data:{
                order,
                name
            }
        })
    }
}