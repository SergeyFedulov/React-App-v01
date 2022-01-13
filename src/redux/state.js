const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() { //старое название метода renderEntireTree;
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.newPostText = ''; // зануляем поле textarea;
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text });

window.store = store;

export default store;