import { Filter } from '../../types/Filter';

type Props = {
  searchQuery: string;
  handleQuery: (str: string) => void;
  handleFilterChange: (filter: Filter) => void;
};

export const TodoFilter: React.FC<Props> = ({
  searchQuery,
  handleQuery,
  handleFilterChange,
}) => {
  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    handleQuery(newQuery);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={e => {
              handleFilterChange(e.target.value as Filter);
            }}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchOnChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {searchQuery && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => {
                handleQuery('');
              }}
            />
          </span>
        )}
      </p>
    </form>
  );
};
