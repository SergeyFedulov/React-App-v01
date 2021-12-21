let state = {
    profilePage: {
        posts: [
            { id: 1, message: "It's my first post", likesCount: 31 },
            { id: 2, message: 'Hello my friend!', likesCount: 12 },
            { id: 3, message: 'This new post', likesCount: 3 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Jhony' },
            { id: 2, name: 'Nick' },
            { id: 3, name: 'Alex' },
            { id: 4, name: 'Victor' },
            { id: 5, name: 'Ted' }
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Well, well, well' }
        ]
    },
    navbar: {
        friendsList: [
            { friend: 'Jhony' },
            { friend: 'Victor' },
            { friend: 'Alex' }
        ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;