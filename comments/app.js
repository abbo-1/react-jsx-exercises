let ProfilePic = () => {
    return (
        <div>
            <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg/220px-Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg"></img>
        </div>
    )
}

let CommentBody = () => {
    return (
        <div>
            <h1>Marty McFly</h1>
        </div>
    )
}

let Comment = () => {
    return (
        <div>
            <p> I'm from the future. I came here in a time machine that you invented. Now I need your help to get back to the year 1985.</p>
        </div>
    )
}

let Comments = () => {
    return (
        <div>
            <ProfilePic />
            <CommentBody />
            <Comment />
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))

