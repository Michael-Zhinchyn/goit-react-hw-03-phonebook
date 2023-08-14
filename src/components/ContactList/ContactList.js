import {
  StyledContactList,
  StyledContactItem,
  StyledContactNumber,
  StyledContactsBlock,
  DeleteButton,
} from './ContactList.styled';
import { MdOutlineDeleteForever } from 'react-icons/md';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledContactsBlock>
      <StyledContactList>
        {contacts.map(item => {
          const { id, name, number } = item;

          return (
            <StyledContactItem key={id}>
              <div>
                {name}:<StyledContactNumber>{number}</StyledContactNumber>
              </div>
              <DeleteButton type="button" onClick={() => onDelete(id)}>
                <MdOutlineDeleteForever size={25} />
              </DeleteButton>
            </StyledContactItem>
          );
        })}
      </StyledContactList>
    </StyledContactsBlock>
  );
};
