import backend from '_env';

export function getPosts() {
    return fetch(`${backend}/posts`).then((d) => d.json());
}

export function addPost(data) {
    return fetch(`${backend}/posts`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((d) => d.json());
}
export function removePost(id) {
    return fetch(`${backend}/posts/${id}`, {
        method: 'delete'
    }).then(() => {
        return {
            id: id
        };
    });
}