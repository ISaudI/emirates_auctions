import React from "react";
import { FormattedMessage } from "react-intl";
import "./sidebar.sass";

function Filter() {
  return (
    <form className="sidebar__filters">
      <div className="sidebar__filters-header">
        <p>
          <FormattedMessage id="filter" defaultMessage="Filter" />
        </p>
        <button className="sidebar__filters-reset" type="reset">
          <FormattedMessage id="reset" defaultMessage="Reset" />
        </button>
      </div>
      <div className="sidebar__filters-content">
        <p className="sidebar__filters-content-title">
          <FormattedMessage id="condition" defaultMessage="Condition" />
        </p>
        <ul className="sidebar__filters-content-list">
          <li className="sidebar__filters-content-item">
            <label htmlFor="newLabel">
              <FormattedMessage id="new" defaultMessage="New" />
            </label>
            <input type="checkbox" id="newLabel" />
          </li>
          <li className="sidebar__filters-content-item">
            <label htmlFor="usedLabel">
              <FormattedMessage id="used" defaultMessage="Used" />
            </label>
            <input type="checkbox" id="usedLabel" />
          </li>
          <li className="sidebar__filters-content-item">
            <label htmlFor="scrapLabel">
              <FormattedMessage id="scrap" defaultMessage="Scrap" />
            </label>
            <input type="checkbox" id="scrapLabel" />
          </li>
        </ul>
        <select className="form-control sidebar__filters-content-select">
          <option disabled>-Select-</option>
          <option>Dodge</option>
          <option> Nissan</option>
          <option>Cherry</option>
          <option>Honda</option>
          <option>Chevrolet</option>
        </select>
        <select className="form-control sidebar__filters-content-select">
          <option disabled>-Select-</option>
          <option>Dodge</option>
          <option> Nissan</option>
          <option>Cherry</option>
          <option>Honda</option>
          <option>Chevrolet</option>
        </select>
      </div>
    </form>
  );
}
export default Filter;
