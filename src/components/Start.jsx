import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Start = () => {
    const history = useHistory();
    const { dataUser } = useContext(DataContext);
    return (
        <button
            className="btn btn-sm btn-info "
            // onClick={() => history.push(`/formnews/6196d50789ee532d9ef90fd0`)}
        >
            editar
        </button>
    );
};

export default Start;
