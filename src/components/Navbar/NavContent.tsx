import Image from "next/image";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserAvatar from "src/assets/images/sarah-dayan.a620c98f.jpg";
import {TOPICS} from "src/constants";
import {GrClose} from "react-icons/gr";
import {selectCollections, selectEco, setCollections, setEco} from "src/store/app";

import Switch from "../Switch";

interface NavContentProps {
    handleToggle: () => void;
}

const NavContent = (props: NavContentProps) => {
    const {handleToggle} = props;

    const [topicArr, setTopicArr] = useState<string[]>([]);

    const dispatch = useDispatch();
    const collections = useSelector(selectCollections);
    const isEco = useSelector(selectEco);

    useEffect(() => {
        if (collections) {
            setTopicArr(collections);
        }
    }, []);

    const handleClickTopic = (topic: string) => {
        if (topicArr.includes(topic)) {
            setTopicArr(topicArr.filter((item) => item !== topic));
        } else {
            setTopicArr([...topicArr, topic]);
        }
    };

    const isSelected = (topic: string) => {
        return topicArr.includes(topic);
    };

    const handleConfirm = () => {
        dispatch(setCollections(topicArr));
        handleToggle();
    };

    const handleToggleEco = (e: any) => {
        if (!e) {
            dispatch(setCollections([]));
            setTopicArr([]);
        }
        dispatch(setEco(e));
    };

    return (
        <div className="navbar__content">
            <div className="user-info flex items-center relative ">
                <Image className="w-24 h-24 rounded-full mx-auto" src={UserAvatar} alt="user" width="72" height="72" />
                <span className="ml-4 text-lg font-semibold">Palmer Jordyn</span>
                <div onClick={handleToggle} className="close-btn absolute right-0">
                    <GrClose size={32} style={{color: "#fff"}} />
                </div>
            </div>

            <div className="eco-mode relative">
                <Switch value={isEco} onChange={handleToggleEco} label="eco" noText />
                <span className="text-primary">Eco-mode</span>
            </div>
            {isEco && (
                <div>
                    <ul className="label-list flex-wrap flex gap-2 mt-8">
                        {TOPICS.map((topic) => (
                            <li
                                onClick={() => handleClickTopic(topic)}
                                key={topic}
                                className={`label-item ${topic} ${isSelected(topic) ? "is-selected" : ""}`}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center mt-8">
                        <div onClick={handleConfirm} className="button px-8 py-2  font-semibold rounded-xl">
                            Confirm
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavContent;
