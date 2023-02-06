import '../assets/css/path.css';


function Book () {
  return (
    <div className="contact-frame">
        <div className="contact-header">
        <h3 className="contact-h3"> Contact </h3>
        </div>
        
        <div className="contact-content content-frame">
            <form className="contact-form">
            <p>
                
                Name<br/>
                <input name="name" type="text"/>
                    <br/>
                    Company<br/>
                <input name="company" type="text"/>
                    <br/>                
                Email<br/>
                <input name="email" type="email"/>
                    <br/>
                Phone<br/>
                <input name="phone" type="phone"/>
                    <br/>
                    <br/>
                Questions/Comments<br/>
                <textarea label="comments" name="comments"/>
                    <br/>
            </p>
                <br/>                                        
            </form>
        </div>
    </div>
)
}

export default Book;
