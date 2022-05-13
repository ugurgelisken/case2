import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEmployes } from "../services/employes.service";
import { setData } from "../store/employes.store";

const Employes = () => {
  
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.employes);

  const _getEmployes = async () => {
    const employesData = await getEmployes();
    dispatch(setData(employesData));
  };

  useEffect(() => {
    document.title = `Employes`;
    dispatch(setData([]));
    _getEmployes();
    return () => {};
  }, []);

  return (
    <div className="bg-white min-h-[800px]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <p>{item.id}</p>
                    </td>
                    <td>
                      <div className="w-48 h-48">
                        <img loading="lazy" src={item.avatar} alt={item.name} className="h-full"/>
                      </div>
                    </td>
                    <td>
                      <p>{item.name}</p>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
  );
};

export default Employes;
