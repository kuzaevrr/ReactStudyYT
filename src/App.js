import {Component} from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

class App extends Component {
    constructor(props) {
        super(props);

        axios.get(baseUrl)
            .then((res) => {
                if (!!res.data) {
                    this.setState({users: res.data.data})
                }
            })
            .catch();

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="Список пользователей"/>
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        )
    }

    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({users: [...this.state.users, {id, ...user}]});
    }

    editUser(user) {
        let allUsers = this.state.users;
        allUsers[allUsers.findIndex(el => el.id === user.id)] = user;
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        });
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users?.filter(user => user.id !== id)
        });
    }

}

export default App;
