import PropTypes from 'prop-types';
import style from './contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className={style.contactBox}>
      <p className={style.contact}>Contacts</p>
      <ul className={style.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={style.contactItem} key={id}>
            <p>
              {name} - {number}
            </p>
            <button
              className={style.contactButton}
              onClick={() => onDelete(id)}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
