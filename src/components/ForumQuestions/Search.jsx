import React from "react";
import styles from "./ForumQuestions.module.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useHistory } from "react-router";

export const Search = () => {
  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
        history.push("/questions?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Buscar pregunta"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <BiSearch size="20" />
        </button>
      </div>
    </form>
  );
};
