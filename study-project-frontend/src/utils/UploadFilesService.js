// import { get, post } from "@/net";
//
// class UploadFilesService {
//     upload(file, onUploadProgress) {
//         let formData = new FormData();
//
//         formData.append("file", file);
//
//         return post("/upload", formData, (message, status) => {
//             // handle success
//         }, (message, status) => {
//             // handle failure
//         }, (err) => {
//             // handle error
//         }, onUploadProgress);
//     }
//
//     getFiles() {
//         return get("/files", (message, status) => {
//             // handle success
//         }, (message, status) => {
//             // handle failure
//         }, (err) => {
//             // handle error
//         });
//     }
// }
//
// export default new UploadFilesService();

import { post, get } from '@/net/index.js'

const UploadFilesService = {
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('file', file)
            post('/upload', formData,
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
        })
    },

    getFiles() {
        return new Promise((resolve, reject) => {
            get('/files',
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
        })
    }
}

export default UploadFilesService
