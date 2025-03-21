import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/profile/actions';
import { selectTheme } from '../../store/theme/selectors';

interface IProfileFormProps {
  firstName: string;
  lastName: string;
}

export const Profile = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  const { register, handleSubmit } = useForm<IProfileFormProps>();
  const onSubmit = (data: IProfileFormProps) => dispatch(changeName(data.firstName, data.lastName));
  return (
    <>
      <h1 className="main__title">Edit profile</h1>
      <h2>Change name</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          First Name
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="firstName"
            id="firstName"
            ref={register}
            required
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="lastName"
            id="lastName"
            ref={register}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
