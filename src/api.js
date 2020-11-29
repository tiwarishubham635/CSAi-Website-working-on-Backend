import axios from 'axios';

export default{
    user:{
        login:(credentials) => axios.post('backend/login', {credentials})
            .then(res => res.data.user),

        signup: (user) => axios.post('backend/signup',{user})
            .then(res => res.data.user)
    },
    thread:{
        createThread:(details) => axios.post('backend/newthread',{details})
            .then(res => res.data.thread),
        editThread:(details) => axios.put('/backend/editthread',{details})
            .then(res => res.data.thread),
        deleteThread:(threadId) => axios.delete(`/backend/threads/${threadId}`)
            .then(res => res.data.message),
    },
    comment:{
        createComment:(details) => axios.post('/backend/newcomment',{details})
            .then(res => res.data.comment),
        editComment:(details) => axios.put('/backend/comments',{details})
            .then(res => res.data.comment),
        deleteComment:(commentId) => axios.delete(`/backend/comments/${commentId}`)
            .then(res => res.data.message),
    }
}