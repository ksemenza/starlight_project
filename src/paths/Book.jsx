import '../assets/css/path.css';


function Book () {
  return (
        <div className="path-cta contact">
        <h2 className="path-h2 contact"> Contact </h2>
        <div className="contact-cta content-frame">
            <form className="path-form contact-+o">
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
