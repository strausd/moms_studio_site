import React from 'react';


export class ContactPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    fetch('')
  }

  render() {
    return (
      <div className="page_content">
        <h1>{this.props.pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.pageData.body }}></div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-grp">
            <label htmlFor="name">Name</label>
            <input className="form-text-input" name="name" id="name" type="text" ref="name" placeholder="Name" />
          </div>
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input className="form-text-input" name="email" id="email" type="text" ref="email" placeholder="Email" />
          </div>
          <div className="input-grp">
            <label htmlFor="message">Message</label>
            <textarea className="form-text-input" name="message" id="message" cols="30" rows="10" ref="message"></textarea>
          </div>
          <button className="btn btn--accent">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;