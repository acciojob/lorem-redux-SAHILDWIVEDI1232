import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions";
import "../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Do not remove the main div */}

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <p>
          <strong>{data.title}</strong>
          <br />
          {data.body}
        </p>
      )}
    </div>
  );
};

export default App;
