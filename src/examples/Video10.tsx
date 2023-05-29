import { useState } from "react";
import './Video10.css'

interface IUser {
    name: string,
    age: number | string,
    city: string
}

interface IProps {
    defaultName?: string,
    defaultAge?: number | string,
}

const Video10 = (props: IProps) => {
    const { defaultName = "Null", defaultAge = "null" } = props
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội")

    const [users, setUsers] = useState<IUser[]>([])

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        setUsers([...users, user])
        setName("")
        setAge("")
    }

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <>
            <div>Example video 10 :  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={(event) => handleOnChangeName(event)} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event) => setAge(event.target.value)} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select onChange={(event) => setSelectedCity(event.target.value)}>
                        {city.length > 0 && city.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <input type="submit" value="Submit"
                    onClick={(event) => handleSubmit(event)}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 && users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;