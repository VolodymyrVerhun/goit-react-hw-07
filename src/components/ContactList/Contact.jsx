import { IoPerson, IoCall } from "react-icons/io5";

import style from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      <div>
        <p className={style.parag}>
          <IoPerson /> {contact.name}
        </p>
        <p className={style.parag}>
          <IoCall /> {contact.phone}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(removeContact(contact.id));
        }}
        className={style.btn}
      >
        Delete X
      </button>
    </li>
  );
}
