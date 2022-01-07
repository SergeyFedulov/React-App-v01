import { renderEntireTree } from './../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "It's my first post", likesCount: 31 },
            { id: 2, message: 'Hello my friend!', likesCount: 12 },
            { id: 3, message: 'This new post', likesCount: 3 }
        ],
        newPostText: ['it-kamasutra']
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
        ],
        newMessageText: ['Hey, Sergio']
    },
    navbar: {
        friendsList: [
            { friend: 'Jhony' },
            { friend: 'Victor' },
            { friend: 'Alex' }
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.newPostText = ''; // зануляем поле textarea;
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.newMessageText = '';
    state.dialogsPage.messages.push(newMessage);
    renderEntireTree(state);
}

export let updateNewMessageText = (newTextMessage) => {
    state.dialogsPage.newMessageText = newTextMessage;
    renderEntireTree(state);
}

export default state;