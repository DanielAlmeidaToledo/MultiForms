import { Link } from "react-router-dom";
import * as C from "./styles";
import person from "../../svgs/person.svg";
import code from "../../svgs/code.svg";
import mail from "../../svgs/mail.svg";
import check from "../../svgs/check.svg";

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
            <img src={person} className="imgIcon" alt="" />
          )}
          {icon === "book" && <img src={code} className="imgIcon" alt="" />}
          {icon === "mail" && <img src={mail} className="imgIcon" alt="" />}
          {icon === "check" && <img src={check} className="imgIcon" alt="" />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
