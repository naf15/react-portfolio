const ContactMe = () => {
    return(
        <footer id="contact-form">
            <h2 id="contact-me">Contact Me</h2>
            <form class="contact-form">
                <label>Name: </label>
                <input type="text" />
                <br />
                <label>Email: </label>
                <input type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </footer>
    );
};

export default ContactMe;