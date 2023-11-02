import React, { useState, useEffect } from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Header = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    // const user = useSelector(state => state.users.users[0]);
    const userObj = useSelector(state => state.users.users);
    // console.log("🚀 ~ file: EditProfile.jsx:89 ~ EditProfile ~ userObj:", userObj)

    // Define the function to get and validate the stored playlist data
    const getStoredUser = () => {
        try {
            // Check if currentUser is available in Redux
            const currentUser = useSelector(state => state.users.users);
            if (currentUser && currentUser.length > 0) {
                // Save currentUser to local storage
                sessionStorage.setItem(`currentUser`, JSON.stringify(currentUser));
                return currentUser; // Return the Redux data
            } else {
                // If not available in Redux, check local storage
                const storedUser = sessionStorage.getItem('currentUser');
                if (storedUser) {
                    // Parse the stored data
                    const parsedUser = JSON.parse(storedUser);
                    // Use the stored playlist
                    // You can update the Redux state here if needed
                    return parsedUser;
                } else {
                    // If not available in Redux or local storage, return null
                    return null;
                }
            }
        } catch (error) {
            // Handle any errors here if needed
            console.error(error);
            return null; // Return null in case of an error
        }
    };

    // Call the function to get the stored playlist data
    const storedUser = getStoredUser();
    // console.log("🚀 ~ file: Header.jsx:61 ~ Header ~ storedUser:", storedUser)



    const currentProfileRole = storedUser ? storedUser[0].customer_role : null;
    // Now you can access the properties of the stored playlist
    const currentProfileAvatar = storedUser ? storedUser[0].user_avatar : null;
    // console.log("🚀 ~ file: Header.jsx:67 ~ Header ~ currentProfileAvatar:", currentProfileAvatar)

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    return (
        <></>
    );
};

export default Header;



