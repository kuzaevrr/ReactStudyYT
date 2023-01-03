import {Component} from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 3,
                    firstname: "Ivan",
                    lastname: "Ivanov",
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate debitis ducimus ea excepturi fuga illo impedit in inventore laborum magnam odio pariatur provident quo quod, quos saepe sit voluptatum.',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 7,
                    firstname: "Petr",
                    lastname: "Petrov",
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate debitis ducimus ea excepturi fuga illo impedit in inventore laborum magnam odio pariatur provident quo quod, quos saepe sit voluptatum.',
                    age: 22,
                    isHappy: false
                }
            ]
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
