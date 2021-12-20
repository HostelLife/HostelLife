import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export function SearchBar() {
  return (
    <div>
      <div className="row height d-flex justify-content-center align-items-center my-3">
        <div className="col-md-6">
          <div className="form">
            <div className="d-flex justify-content-center align-items-center my-3">
              <input
                type="text"
                // value={searchTerm}
                // onChange={onChange}
                className="form-control form-input mr-3"
                placeholder="Search anything..."
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}