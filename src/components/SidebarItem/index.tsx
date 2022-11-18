import { Link } from "react-router-dom";
import * as C from "./styles";
import ProfileIcon from "../../svgs/profile.svg";
import BookIcon from "../../svgs/book.svg";
import MailIcon from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <img src={ProfileIcon} className="imgIcon" alt="" />
          )}
          {icon === "book" && <img src={BookIcon} className="imgIcon" alt="" />}
          {icon === "mail" && <img src={MailIcon} className="imgIcon" alt="" />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
