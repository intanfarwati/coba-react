import React, { useState, useEffect, useMemo, useRef } from "react";
import TutorialDataService from "../services/TutorialService";
...

const TutorialsList = (props) => {
    const [tutorials, setTutorials] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const tutorialsRef = useRef();

    tutorialsRef.current = tutorials;

    useEffect(() => {
        retrieveTutorials();
    }, []);

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveTutorials = () => {
        TutorialDataService.getAll()
            .then((response) => {
                setTutorials(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveTutorials();
    };

    const removeAllTutorials = () => {
        TutorialDataService.removeAll()
            .then((response) => {
                console.log(response.data);
                refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const findByTitle = () => {
        TutorialDataService.findByTitle(searchTitle)
            .then((response) => {
                setTutorials(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const openTutorial = (rowIndex) => {
        const id = tutorialsRef.current[rowIndex].id;

        props.history.push("/tutorials/" + id);
    };

    const deleteTutorial = (rowIndex) => {
        const id = tutorialsRef.current[rowIndex].id;

        TutorialDataService.remove(id)
            .then((response) => {
                props.history.push("/tutorials");

                let newTutorials = [...tutorialsRef.current];
                newTutorials.splice(rowIndex, 1);

                setTutorials(newTutorials);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
...
);
};

export default TutorialsList;