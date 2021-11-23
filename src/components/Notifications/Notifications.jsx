import React from "react";
import "./Notifications.module.css";

const Notifications = () => {
  return (
                <div className="main">
                    <div className="topbar">
                        <div className="tittle">
                            <h2>Notificaciones</h2>
                        </div>
                        <div className="description">
                            <h4>Anteriores</h4>
                        </div>

                        <div className="notification">
                            <ul>
                                <li className="first">Diana Gomez</li>
                                <li className="fuzzy space">
                                    ha comentado tu publicación “Oferta Mercado
                                    Libre”
                                </li>
                            </ul>
                            <ul>
                                <li className="fuzzy first">2 hr</li>
                                <li className="fuzzy small__space">Ver mas</li>
                            </ul>
                        </div>
                        <div className="notification">
                            <ul>
                                <li className="first">Diana Gomez</li>
                                <li className="fuzzy space">
                                    ha comentado tu publicación “Oferta Mercado
                                    Libre”
                                </li>
                            </ul>
                            <ul>
                                <li className="fuzzy first">2 hr</li>
                                <li className="fuzzy small__space">Ver mas</li>
                            </ul>
                        </div>
                    </div>
                </div>
  );
};

export default Notifications;