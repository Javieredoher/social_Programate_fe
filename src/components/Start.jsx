import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Start = () => {
    const history = useHistory();
    const { dataUser } = useContext(DataContext);
    return (
        <button
            className="btn btn-sm btn-info "
            onClick={() => history.push(`/formevent/619e6ba7a9591615d657e18e`)}
        >
            editar
        </button>
    );
};

export default Start;
