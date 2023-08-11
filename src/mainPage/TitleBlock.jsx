import React from "react";

const TitleBlock = () => {
    return (
        <div className="d-flex justify-content-center">
            <div
                className="row w-75 rounded-4 mt-5"
                style={{ background: "red" }}
            >
                <div className="col text-center text-white pt-3">
                    <h1 className="pb-2">Наша команда</h1>
                    <h4 className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non felis tristique, congue lectus eu, hendrerit risus. Duis sollicitudin augue eu ex accumsan fringilla in ut augue. Aenean vestibulum magna in consequat varius. Proin scelerisque sit amet leo ac accumsan.</h4>
                </div>
            </div>
        </div>
    );
};

export default TitleBlock;
