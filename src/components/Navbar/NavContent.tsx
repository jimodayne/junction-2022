import Image from "next/image";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import UserAvatar from "src/assets/images/sarah-dayan.a620c98f.jpg";
import {TOPICS} from "src/constants";
import {setCollections} from "src/store/app";

import Switch from "../Switch";

const NavContent = () => {
    const [topicArr, setTopicArr] = useState<string[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {}, []);

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
    };

    return (
        <div className="navbar__content">
            <div className="user-info flex items-center">
                <Image className="w-24 h-24 rounded-full mx-auto" src={UserAvatar} alt="user" width="72" height="72" />
                <span className="ml-4 text-lg font-semibold">Palmer Jordyn</span>
            </div>
            <div className="eco-mode relative">
                <Switch label="eco" noText />
                <span className="text-primary">Eco-mode</span>
            </div>
            <div>
                <ul className="label-list flex-wrap flex gap-2 mt-8">
                    {TOPICS.map((topic, idx) => (
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
        </div>
    );
};

export default NavContent;
