

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <div>
                <h2>Our Contact Information</h2>
                <p>Phone: (312) 123-4567</p>
                <p>Email: helpishere@stillwaters.org</p>
                <p>Address: 458 w Downhill St, Chicago, IL</p>
            </div>
        </div>
    );
}

export default Contact;