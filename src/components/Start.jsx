import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Start = () => {
    const history = useHistory();
    const { dataUser } = useContext(DataContext);
    return (
        <button
            className="btn btn-sm btn-info "
            onClick={() => history.push(`/formjobs/619d4add3b05857d3be6fe64`)}
        >
            editar
        </button>
    );
};

export default Start;
