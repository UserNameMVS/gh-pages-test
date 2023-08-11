import React from "react";
import MainPage from "./layout/MainPage";
import NavBar from "./component/NavBar";
import { Switch, Route } from "react-router-dom";
import CardPerson from "./layout/CardPerson";
import TeamProvider from "./hooks/useTeam";
import SelectedPersons from "./layout/SelectedPersons";
import Footer from "./component/Footer";
import Breadcrumbs from "./component/Breadcrumbs";
import AboutUs from "./layout/AboutUs";
import ContactInfo from "./layout/Contact";

function App() {
    return (
        <>
            <TeamProvider>
                <NavBar />
                <div style={{ background: "#DCDCDC" }}>
                    <Breadcrumbs />
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/selected" component={SelectedPersons} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contact" component={ContactInfo} />
                        <Route path="/:cardId" component={CardPerson} />
                    </Switch>
                </div>
                <Footer />
            </TeamProvider>
        </>
    );
}

export default App;
