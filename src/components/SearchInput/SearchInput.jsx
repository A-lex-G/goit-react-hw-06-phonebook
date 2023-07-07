import { nanoid } from "nanoid";
import css from "./SearchInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updFilter } from "redux/filterSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const finderInputId = nanoid();

    const handleSetState = (e) => {
        const { value } = e.currentTarget;
        e.preventDefault();
        dispatch(updFilter(value));
    }

    return (
        <>
            <label
                className={css.search_title}
                htmlFor={finderInputId}>
                Find contacts by name
            </label>
            <input
                className={css.search_input}
                type="text"
                name="filter"
                id={finderInputId}
                value={filter}
                onChange={handleSetState}
                required
            />
        </>
    )
}