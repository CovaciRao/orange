import { Component } from 'react';

const USER_DATA = [
  {
    username: "Maria",
    email: "maria@example.com",
  },
  {
    username: "Consuela",
    email: "consuela@example.com",
  },
  {
    username: "Benni",
    email: "benni@example.com",
  },
  {
    username: "Zina",
    email: "zina@example.com",
  },
]

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USER_DATA,
      column: '',
      direction: 'asc',
    }
  }

  sortByUsername = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;

    if(this.state.column == 'username') {
      direction = direction == 'asc' ? 'desc' : 'asc';
    }

    sortedArray.sort((a,b) => {
      if(direction == 'asc') {
        // asc
        return a.username > b.username ? 1 : a.username < b.username ? -1 : 0;
      } else {
        // desc
        return a.username > b.username ? -1 : a.username < b.username ? 1 : 0;
      }
    })

    this.setState({
      users: sortedArray,
      column: 'username',
      direction: direction,
    });
  }

  sortByEmail = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;

    if(this.state.column == 'email') {
      direction = direction == 'asc' ? 'desc' : 'asc';
    }

    sortedArray.sort((a,b) => {
      if(direction == 'asc') {
        // asc
        return a.email > b.email ? 1 : a.email < b.email ? -1 : 0;
      } else {
        // desc
        return a.email > b.email ? -1 : a.email < b.email ? 1 : 0;
      }
    })

    this.setState({
      users: sortedArray,
      column: 'email',
      direction: direction,
    });
  }

  render() {
    return(
      <> 
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <button className="btn btn-dark" onClick={this.sortByUsername}>
                  <span>Username</span>
                  {this.state.column == 'username' &&
                    <span className={[
                      "fas",
                      this.state.direction == 'asc' ? 'fa-angle-up' : 'fa-angle-down',
                    ].join(' ')}></span>
                  }
                </button>
              </th>
              <th>
                <button className="btn btn-dark" onClick={this.sortByEmail}>
                <span>Email</span>
                  {this.state.column == 'email' &&
                    <span className={[
                      "fas",
                      this.state.direction == 'asc' ? 'fa-angle-up' : 'fa-angle-down',
                    ].join(' ')}></span>
                  }
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );  
  }
}

export default UserList;