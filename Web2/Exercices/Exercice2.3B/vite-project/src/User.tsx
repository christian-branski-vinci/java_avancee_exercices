interface UserProps {
    users: UserInfo[]
}
interface UserInfo {
    name: string
    age: number
};

const User = (props: UserProps) => {
    return (
        <div>
            <ul>
                {props.users.map((user) => (
                    <li key={user.name}><h2>{user.name}</h2>
                        <p>Age: {user.age}</p></li>

                ))}
            </ul>
        </div>
    )
};

export default User;
