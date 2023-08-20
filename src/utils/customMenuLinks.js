import { Link } from "react-router-dom";

const customMenuLink = ({ key = Math.random() * 1000, title, link, icon, children = undefined, onClick = () => { }, collapsed = false }) => {
    return {
        key: key,
        label: link ? (
            <Link to={link}>
                {icon ? icon : undefined}
                {title && ' ' + title}
            </Link>
        ) : (
            <div onClick={onClick}>
                {icon ? icon : undefined}
                {title && ' ' + title}
            </div>
        ),
        children,
    };
};

export default customMenuLink;