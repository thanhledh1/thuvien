import axios from "axios";

class BookModel {
    apiUrl = 'https://6083df209b2bed00170404a0.mockapi.io/angular/products';
    // Lấy tất cả dữ liệu
    all(){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    // lấy 1 dữ liệu
    find( id ){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl + '/' + id ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    //xóa dữ liệu
    async destroy(id){
        return await axios.delete( this.apiUrl + '/' + id )
    }
    // Thêm dữ liệu
    store( data ){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }

    // Cập nhật dữ liệu
    update( id, data ){
        return new Promise( ( resolve,reject ) => {
            axios.put( this.apiUrl + '/' + id , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
}

export default new BookModel;
