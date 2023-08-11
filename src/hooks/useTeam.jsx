import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import teamService from "../services/team.service";
// import { toast } from "react-toastify";

export const TeamContext = React.createContext();

export const useTeam = () => {
    return useContext(TeamContext);
};

const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loc, setLoc] = useState();
    useEffect(() => {
        getTeam();
    }, []);
    useEffect(() => {
        if (error !== null) {
            setError(null);
        }
    }, [error]);
    async function getTeam() {
        try {
            const content = await teamService.fetchAll();
            setTeam(Object.values(content));
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function getTeamPerson(id) {
        try {
            const content = await teamService.get(id);
            setLoading(false);
            return content;
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function getUpdateTeamPerson(id, data) {
        try {
            const content = await teamService.update(id, data);
            console.log(content);
            const a = team.map((el) => {
                if (el.id === id) {
                    return { ...el, bookmark: !el.bookmark };
                } else {
                    return el;
                }
            });
            setTeam(a);
            setLoading(false);
            // return content;
        } catch (error) {
            errorCatcher(error);
        }
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }
    // function getUserById(userId) {
    //     return users.find((u) => u._id === userId);
    // }
    const getLocation = (l) => {
        setLoc(l);
    };
    return (
        <TeamContext.Provider
            value={{ team, getTeamPerson, getUpdateTeamPerson, loc, getLocation }}
        >
            {!isLoading ? children : "Loading..."}
        </TeamContext.Provider>
    );
};

TeamProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TeamProvider;
