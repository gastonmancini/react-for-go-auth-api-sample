import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import axios from 'axios';
import { User } from '../models/user';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/setUserAction';

function Profile(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    useEffect(() => {
        (
            async () => {
                setFirstName(props.user.firstName);
                setLastName(props.user.lastName);
                setEmail(props.user.email);
                setImage(props.user.image);
            }
        )()
    }, [props.user]); // Call it everytime the user changes

    async function submitAccountInformation(event) {
        event.preventDefault();
        const { data } = await axios.put("me", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            image: image,
            roleId: 1 // TODO: Add DropDownlist to select a role
        });
        props.setUser(new User(
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.role,
            data.image
        )); // Dispatch the chage event
    }

    async function submitPasswordChange(event) {
        event.preventDefault();
        await axios.put("me/password", {
            password,
            passwordConfirm
        });
    }

    async function uploadProfileImage(files) {
        if (files === null) return;

        const formData = new FormData();
        formData.append('image', files[0]); // the first item is the only item we upload

        const { data } = await axios.post('me/image', formData);
        setImage(data.url);
    }

    return (
        <Wrapper>
            <h3>Account Information</h3>
            <img src={image} width="50" />
            <form onSubmit={submitAccountInformation}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control"
                        defaultValue={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control"
                        defaultValue={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control"
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                            <label className="btn btn-primary">
                                Upload <input type="file" hidden
                                onChange={e => uploadProfileImage(e.target.files)} />
                        </label>
                    </div>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>

            <h3 className="mt-4">Change Password</h3>
            <form onSubmit={submitPasswordChange}>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control"
                        onChange={e => setPasswordConfirm(e.target.value)} />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => dispatch(setUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);