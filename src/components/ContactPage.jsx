import React from 'react';


export class ContactPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const formIsValid = this.validateForm();
    if (formIsValid) {
      const name = this.refs.name.value;
      const email = this.refs.email.value;
      const message = this.refs.message.value;
      const data = { name, email, message };
      console.log(data);
      fetch('//flipmail.co/api/L448N06sFeUnluBLsy6u', {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(data => console.log(data)).catch(e => console.log(e));
    } else {
      console.log('Invalid');
    }
  }

  validateBasicText = node => {
    const isValid = !!(node.value && node.value.length);
    this.setInvalidClassName(node, isValid);
    return isValid;
  };

  validateEmail = node => {
    const isValid = /^\S+[@]\S+[.]\S{2,}$/.test(node.value);
    this.setInvalidClassName(node, isValid);
    return isValid;
  };

  setInvalidClassName = (node, isValid) => {
    if (isValid) {
      node.parentElement.classList.remove('invalid');
    } else {
      node.parentElement.classList.add('invalid');
    }
  };

  validateForm = () => {
    const nameIsValid = this.validateBasicText(this.refs.name);
    const emailIsValid = this.validateEmail(this.refs.email);
    const messageIsValid = this.validateBasicText(this.refs.message);

    if (nameIsValid && emailIsValid && messageIsValid) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="page_content">
        <h1>{this.props.pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.pageData.body }}></div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-grp">
            <label htmlFor="name">Name</label>
            <input className="form-text-input" name="name" id="name" type="text" ref="name" placeholder="Name" onChange={e => this.validateBasicText(e.target)} />
          </div>
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input className="form-text-input" name="email" id="email" type="text" ref="email" placeholder="Email" onChange={e => this.validateEmail(e.target)} />
          </div>
          <div className="input-grp">
            <label htmlFor="message">Message</label>
            <textarea className="form-text-input" name="message" id="message" cols="30" rows="10" ref="message" onChange={e => this.validateBasicText(e.target)} ></textarea>
          </div>
          <button className="btn btn--accent" >Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;