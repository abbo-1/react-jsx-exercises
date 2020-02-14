let Header = () => {
    return (
        <div>
            <h1>This is my dope header for my dope blog</h1>
        </div>
    )
    // <span>Design a header for your blog</span>
}
let Article = () => {
    return (
    <div>
        <p>This is my dope article</p>
    </div>
    )
}
let Footer = () => {
    return (
        <div>
           <p>This is my dope footer</p>
        </div>
    )
}

let Blog = () => {
    return (
        <div>   
             <Header /> 
             <Article />
             <Footer />
        </div>
    )
}


ReactDOM.render(<Blog />, document.getElementById('root'))