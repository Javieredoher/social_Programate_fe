import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import style from "./filterHome.module.css";

const FilterHome = () => {
    const { filterHome, setFilterHome } = useContext(DataContext);

    const handleChange = ({ target }) => {
        const valueInput = target.value.toLowerCase();
        setFilterHome(valueInput);
    };

    return (
        <div className={style.filter}>
            <input
                type="text"
                placeholder="Buscar publicaciones"
                value={filterHome}
                onChange={handleChange}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
};

export default FilterHome;
