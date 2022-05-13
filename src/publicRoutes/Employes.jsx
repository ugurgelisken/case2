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
    _getEmployes();
    return () => {};
  }, []);

  return (
    <div className="bg-white min-h-[800px] h-[calc(100vh-120px)]">
      <div className="overflow-x-auto w-full">
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
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Employes;
