class Example extends React.Component 
{
    constructor() 
    {
      super();
      this.state = { user: {} };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) 
    {
      e.preventDefault();
      var self = this;
      fetch('http://reqres.in/api/users', 
            { 
                method: 'POST',
                data: {
                        name: self.refs.name,
                        job: self.refs.job
                      }
            }).then(function(response) 
            {
                return response.json()
            }).then(function(body) 
            {
                console.log(body);
            }
        );
    }
    render() 
    {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name"/>
          <input type="text" placeholder="Job" ref="job"/>
          <input type="submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(<Example/>, document.getElementById('View'));
  